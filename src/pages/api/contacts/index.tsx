import { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios"

const contactHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = req.body
        const headers = {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        };
    
        await axios.put(
          `https://api.sendgrid.com/v3/marketing/contacts`,
          data,
          {
            headers: headers
          }
        );
        
        res.status(200).json({ message: 'Success'});
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

export default contactHandler