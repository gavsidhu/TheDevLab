import Link from 'next/link';
import React from 'react'

interface Props {
    imageUrl: string;
    title: string;
    description: string;
    alt: string;
    href: string;
}

const Card = ({ imageUrl, title, description, alt, href }: Props) => {
    return (
        <Link href={href} className="overflow-hidden rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition hover:shadow-sm bg-[#222630] p-4 mx-auto sm:max-w-lg" >
            <img
                alt={alt}
                src={imageUrl}
                className="w-full object-cover"
            />

            <div className="p-4 sm:p-6">

                <div>
                    <h3 className="mt-0.5 text-xl font-heading font-semibold text-white">
                        {title}
                    </h3>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-gray-300 line-clamp-3">
                    {description}
                </p>
            </div>
        </Link>

    )
}

export default Card