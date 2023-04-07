import { useRef } from 'react';
import { HiClipboard } from 'react-icons/hi2';

interface CodeBlockProps {
    children: React.ReactNode;
}

export default function CodeBlock({ children }: CodeBlockProps) {
    const preRef = useRef<HTMLPreElement>(null);

    function copy() {
        const content = preRef.current?.textContent ?? '';
        navigator.clipboard.writeText(content);
    }

    return (
        <div className="relative code-block">
            <pre ref={preRef}>{children}</pre>
            <button
                onClick={copy}
                className="absolute top-0 right-0 mt-2 mr-2 p-2 border-none text-xl font-semibold focus:outline-none active:scale-90 transition-transform duration-100 ease-in-out cursor-pointer text-white"
            >
                <span className="sr-only">Copy</span>
                <HiClipboard />
            </button>
        </div>
    );
}

