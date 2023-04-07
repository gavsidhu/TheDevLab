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
import AtomLayout from '@/components/atoms/AtomLayout';
import { SEOData } from '@/types/global';

const readFile = promisify(fs.readFile);

interface PostData extends SEOData {
    fullPath: string
}

interface PostProps {
    source: MDXRemoteSerializeResult;
    post: PostData
}

const Atom = ({ source, post }: PostProps) => {
    return (
        <>
            <AtomLayout source={source} post={post} />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const contentData = await getMdxContent();
    const paths = contentData
        .filter((item) => item.slug.startsWith('atoms/'))
        .map(({ slug }) => {
            const atomsSlug = slug.replace('atoms/', '');
            const params = { slug: atomsSlug };
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
    const post = contentData.find((item) => item.slug === `atoms/${slug}`);

    if (!post) {
        return { notFound: true };
    }

    const mdxSource = await readFile(post.fullPath, 'utf8');
    const { content } = matter(mdxSource); // Extract the content without front matter

    const source = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeCodeTitles,
                rehypePrism,
            ]
        }
    }); // Serialize the content without front matter

    return { props: { source, post } };
};

export default Atom