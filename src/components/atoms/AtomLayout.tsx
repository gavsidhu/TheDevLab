import React from 'react'
import Navbar from '../layout/Navbar'
import { Prose } from '../mdxComponents/Prose'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import MDXComponents from '../mdxComponents/MDXComponents'
import Footer from '../layout/Footer'
import Seo from '../Seo'
import { SEOData } from '@/types/global'

interface PostData extends SEOData {
    fullPath: string
}

interface AtomProps {
    source: MDXRemoteSerializeResult;
    post: PostData
}

const AtomLayout = ({ source, post }: AtomProps) => {
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
            <main className='px-8 mx-auto text-white'>
                <div>
                </div>
                <article className='w-full py-20'>
                    <Prose>
                        <MDXRemote {...source} components={MDXComponents as any} />
                    </Prose>
                </article>
            </main>
            <Footer />
        </>
    )
}

export default AtomLayout