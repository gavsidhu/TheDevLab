import { ReactNode } from 'react';
import CodeBlock from './CodeBlock';

interface Heading2Props {
    children?: ReactNode;
}

const Heading2 = ({ children }: Heading2Props) => {
    if (typeof children !== 'string') return null;

    const idText = children.replace(/ /g, '_').toLowerCase();

    return <h2 id={idText}>{children}</h2>;
};


const MDXComponents = {
    h2: Heading2,
    pre: CodeBlock
};

export default MDXComponents;
