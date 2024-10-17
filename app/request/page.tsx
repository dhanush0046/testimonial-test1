// app/request.tsx
"use client"; // Ensure this is a client component
import React from 'react';
import Layout from '@/app/layout';
import TestimonialForm from '@/components/TestimonialForm';

const RequestPage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Submit Your Testimonial</h1>
      <TestimonialForm />
    </Layout>
  );
};

export default RequestPage;

