import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const imageHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { folder, post, filename } = req.query;

  if (
    typeof folder !== 'string' ||
    typeof post !== 'string' ||
    typeof filename !== 'string'
  ) {
    res.status(400).send('Invalid parameters');
    return;
  }

  const imagePath = path.join(process.cwd(), 'content', folder, post, filename);

  if (!fs.existsSync(imagePath)) {
    res.status(404).send('Image not found');
    return;
  }

  const imageBuffer = fs.readFileSync(imagePath);
  const mimeType = path.extname(imagePath).substring(1);

  res.setHeader('Content-Type', `image/${mimeType}`);
  res.status(200).send(imageBuffer);
};

export default imageHandler;
