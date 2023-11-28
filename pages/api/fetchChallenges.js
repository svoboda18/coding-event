import { readFileSync } from 'fs'
import { resolve } from 'path'

export default function handler(req, res) {
    try {
      const data = readFileSync(resolve(__dirname, '../../../../ch'), 'utf-8');
      res.status(200).json({ content: data });
    } catch (error) {
      console.error('Error reading file:', error);
      res.status(500).json({ error: 'Error reading file' });
    }
  }