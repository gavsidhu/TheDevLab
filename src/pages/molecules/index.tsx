import Card from '@/components/Card';
import Seo from '@/components/Seo';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { getAllContent } from '@/lib/getContent';
import { Post } from '@/types/global';
import { GetStaticProps } from 'next';
import React from 'react'

interface Props {
    molecules: Post[]
}

const index = ({ molecules }: Props) => {
    return (
        <>
            <Seo
                templateTitle='Molecules'
                description='Brief programming tutorials that cover foundational aspects of programming, libraries, frameworks, and tools.'

            />
            <Navbar />
            <main>
                <div className='mx-auto max-w-7xl px-6 py-16 sm:py-12 lg:px-8'>
                    <div className='max-w-2xl'>
                        <h1 className='mt-10 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                            Molecules
                        </h1>
                        <p className='mt-6 leading-8 text-gray-300'>
                            Brief tutorials that cover foundational aspects of programming, libraries, frameworks, and tools. Gain practical
                            knowledge and learn how to apply key concepts through these concise guides.
                        </p>
                    </div>
                    <div className='grid grid-cols-4 gap-8 py-20'>
                        {molecules.map((molecule) => (
                            <Card
                                title={molecule.frontMatter.title}
                                description={molecule.frontMatter.description}
                                href={molecule.slug}
                                imageUrl={molecule.frontMatter.image}
                                alt={molecule.frontMatter.alt}
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
    const molecules = await getAllContent("molecules");
    if (!molecules) {
        return { notFound: true };
    }
    return { props: { molecules } };
};
export default index


