import { remark } from 'remark';
import remarkToc from 'remark-toc';
import remarkParse from 'remark-parse';

export const getTableOfContents = async (mdxSource: string) => {
  const processor = remark().use(remarkParse).use(remarkToc);
  const file = await processor.process(mdxSource);
  const contents = file.toString();
  return contents;
};
