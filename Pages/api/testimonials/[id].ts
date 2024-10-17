// pages/api/testimonials/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id } = req.query;

  if (!id || Array.isArray(id) || isNaN(Number(id))) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  switch (method) {
    case 'DELETE':
      try {
        await prisma.testimonial.delete({
          where: { id: Number(id) },
        });
        return res.status(204).end();
      } catch (error) {
        console.error('Error deleting testimonial:', error);
        return res.status(500).json({ error: 'Failed to delete testimonial' });
      }
    default:
      res.setHeader('Allow', ['DELETE']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}