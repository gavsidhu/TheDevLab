import React from 'react';

interface TableOfContentsProps {
    headings: Array<{ text: string; link: string; level: number }>;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
    return (
        <nav className="sticky top-10 max-h-screen overflow-auto p-4 hidden md:block rounded-lg shadow-2xl bg-[#222630] mx-auto sm:max-w-lg">
            <h2 className="text-xl font-bold font-heading mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-white">
                {headings.map((heading, index) => (
                    <li key={index} className={`ml-${(heading.level - 1) * 4}`}>
                        <a href={`${heading.link}`} className="hover:text-gray-300">
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
