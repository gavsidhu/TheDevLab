import Card from '@/components/Card';
import Seo from '@/components/Seo';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { getAllContent } from '@/lib/getContent';
import { Post } from '@/types/global';
import { GetStaticProps } from 'next';
import React from 'react'

interface Props {
    atoms: Post[]
}

const index = ({ atoms }: Props) => {
    return (
        <>
            <Seo
                title='Atoms'
                description='Small, focused code snippets that address specific programming tasks, syntax, or concepts.'
            />
            <Navbar />
            <main>
                <div className='mx-auto max-w-7xl px-6 py-16 sm:py-12 lg:px-8'>
                    <div className='max-w-2xl'>
                        <h1 className='mt-10 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                            Atoms
                        </h1>
                        <p className='mt-6 leading-8 text-gray-300'>
                            Small, focused code snippets that address specific programming tasks, syntax, or concepts. These bite-sized pieces of
                            knowledge help you quickly understand and implement fundamental elements across various programming languages.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 py-20'>
                        {atoms.map((atom) => (
                            <Card
                                key={atom.frontMatter.title}
                                title={atom.frontMatter.title}
                                description={atom.frontMatter.description}
                                href={atom.slug}
                                imageUrl={atom.frontMatter.image}
                                alt={atom.frontMatter.alt}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const atoms = await getAllContent("atoms");
    if (!atoms) {
        return { notFound: true };
    }
    return { props: { atoms } };
};
export default index


