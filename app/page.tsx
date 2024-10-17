"use client"; // Ensure this is a client component
import React, { useEffect, useState } from 'react';
import Layout from '@/app/layout';
import WallOfLove from '@/components/WallOfLove';
import { fetchTestimonials } from '@/utils/api';
import Link from 'next/link';

const HomePage: React.FC = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (err) {
        const errorMessage = (err as Error).message;
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    getTestimonials();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Wall of Love</h1>
      <Link href="/request" className="text-blue-500">
        Create a Testimonial
      </Link>
      <Link href="/admin" className="text-blue-500 ml-4">
        Admin Dashboard
      </Link>
      <WallOfLove testimonials={testimonials} />
    </Layout>
  );
};

export default HomePage;
