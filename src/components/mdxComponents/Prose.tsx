import clsx from 'clsx';

type Props = {
    children: React.ReactNode;
    className?: string;
};

export function Prose({ children, className }: Props) {
    return <div className={clsx(className, 'prose prose-invert mx-auto lg:prose-2xl prose-pre:my-0 prose-pre:pt-10 prose-headings:font-heading prose-p:text-lg')}>{children}</div>;
}
