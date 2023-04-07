import React from 'react'
import TableOfContents from '../layout/TableOfContents'
import { Prose } from '../mdxComponents/Prose'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import MDXComponents from '../mdxComponents/MDXComponents';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Seo from '../Seo';
import { SEOData } from '@/types/global';

interface PostData extends SEOData {
    fullPath: string
}

interface MoleculeProps {
    source: MDXRemoteSerializeResult;
    headings: Array<{ text: string; link: string; level: number }>;
    post: PostData
}


const MoleculeLayout = ({ source, headings, post }: MoleculeProps) => {
    return (
        <>
            <Seo
                title={post.title}
                description={post.description}
                date={post.published}
                image={post.image}
                templateTitle={post.title}
            />
            <Navbar />
            <main className='max-w-7xl mx-auto text-white'>
                <div className='md:flex mx-auto px-8 py-24 md:px-4'>
                    <aside className='w-1/5'>
                        <TableOfContents headings={headings} />
                    </aside>
                    <article className='md:w-4/5 w-full'>
                        <Prose>
                            <MDXRemote {...source} components={MDXComponents as any} />
                        </Prose>
                    </article>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default MoleculeLayout