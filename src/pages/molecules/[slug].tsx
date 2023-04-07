import { getMdxContent } from '@/lib/getContent';
import React from 'react'
import { promisify } from 'util';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import rehypePrism from '@mapbox/rehype-prism';
import rehypeCodeTitles from 'rehype-code-titles'
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import MoleculeLayout from '@/components/molecules/MoleculeLayout';
import { SEOData } from '@/types/global';

const readFile = promisify(fs.readFile);

interface PostData extends SEOData {
    fullPath: string
}


interface PostProps {
    source: MDXRemoteSerializeResult;
    headings: Array<{ text: string; link: string; level: number }>;
    post: PostData
}

const Molecule = ({ source, headings, post }: PostProps) => {
    return (
        <MoleculeLayout source={source} headings={headings} post={post} />
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const contentData = await getMdxContent();
    const paths = contentData
        .filter((item) => item.slug.startsWith('molecules/'))
        .map(({ slug }) => {
            const moleculesSlug = slug.replace('molecules/', '');
            const params = { slug: moleculesSlug };
            return { params };
        });

    return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params) {
        return { notFound: true };
    }

    const { slug } = params;
    const contentData = await getMdxContent();
    const post = contentData.find((item) => item.slug === `molecules/${slug}`);

    if (!post) {
        return { notFound: true };
    }

    const mdxSource = await readFile(post.fullPath, 'utf8');
    const { content } = matter(mdxSource); // Extract the content without front matter

    const getHeadings = (content: string) => {
        const regex = /^## (.*)$/gm;
        const headings: Array<{ text: string; link: string }> = [];

        let match;
        while ((match = regex.exec(content)) !== null) {
            const headingText = match[1];
            const link = '#' + headingText.replace(/ /g, '_').toLowerCase();
            headings.push({ text: headingText, link });
        }

        return headings;
    };

    const headings = getHeadings(content);

    const source = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeCodeTitles,
                rehypePrism,
            ]
        }
    }); // Serialize the content without front matter

    return { props: { source, headings, post } };
};

export default Molecule