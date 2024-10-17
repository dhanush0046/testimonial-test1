// pages/api/testimonials/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const { name, content, videoUrl } = req.body;

      // Validate required fields
      if (!name || !content) {
        return res.status(400).json({ error: 'Name and content are required' });
      }

      try {
        const newTestimonial = await prisma.testimonial.create({
          data: { name, content, videoUrl, published: false },
        });
        return res.status(201).json(newTestimonial);
      } catch (error) {
        console.error('Error creating testimonial:', error);
        return res.status(500).json({ error: 'Failed to create testimonial' });
      }
    } 

  else if (req.method === 'GET') {
    try {
      const testimonials = await prisma.testimonial.findMany();
      return res.status(200).json(testimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return res.status(500).json({ error: 'Failed to fetch testimonials' });
    }
  } 
  
  else {
    res.setHeader('Allow', ['POST', 'GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}