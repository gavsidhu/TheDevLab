import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { promisify } from 'util';
import glob from 'fast-glob';
import { contentDirectory } from '../../config.cjs';

const readFile = promisify(fs.readFile);

export async function getMdxContent() {
  const filePaths = await glob('**/*.mdx', { cwd: contentDirectory });
  const contentData = await Promise.all(
    filePaths.map(async (filePath) => {
      const fullPath = path.join(contentDirectory, filePath);
      const fileContents = await readFile(fullPath, 'utf8');
      const { data } = matter(fileContents);
      const slug = path.dirname(filePath);

      return {
        ...data,
        slug,
        fullPath,
      };
    })
  );

  return contentData;
}

export async function getAllContent(directory: string) {
  const fullPath = path.join(contentDirectory, directory);

  if (!fs.existsSync(fullPath)) {
    console.warn(`Directory "${fullPath}" does not exist or is empty.`);
    return [];
  }
  const filenames = fs.readdirSync(fullPath);
  const contentData = filenames.map((filename) => {
    const filePath = path.join(fullPath, filename, 'index.mdx');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      fullPath: filePath,
      slug: `${directory}/${filename}`,
      frontMatter: data,
    };
  });
  return contentData;
}
