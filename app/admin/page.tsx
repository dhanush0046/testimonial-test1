// // pages/admin.tsx
// "use client";
// import React, { useEffect, useState } from 'react';
// import Layout from '@/app/layout';
// import TestimonialList from '@/components/TestimonialList';
// import { fetchTestimonials, deleteTestimonial } from '@/utils/api';

// interface Testimonial {
//   id: number;
//   name: string;
//   content: string;
//   videoUrl?: string;
//   createdAt: string;
//   published: boolean;
// }

// const AdminDashboard: React.FC = () => {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

//   useEffect(() => {
//     const getTestimonials = async () => {
//       try {
//         const data: Testimonial[] = await fetchTestimonials();
//         console.log("Data",data);
//         //setTestimonials(data.reverse());
//         setTestimonials(data);
//         console.log("testimonials",testimonials);
//       } catch (error) {
//         console.error('Error fetching testimonials', error);
//       }
//     };
//     getTestimonials();
//   }, []);

//   const handleDelete = async (id: number) => {
//     try {
//       await deleteTestimonial(id);
//       setTestimonials((prevTestimonials) =>
//         prevTestimonials.filter((testimonial) => testimonial.id !== id)
//       );
//     } catch (error) {
//       console.error('Error deleting testimonial', error);
//     }
//   };

//   return (
//     <Layout>
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
//       <TestimonialList testimonials={testimonials} 
//       onDelete={handleDelete} />
//     </Layout>
//   );
// };

// export default AdminDashboard;

// pages/admin/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import Layout from '@/app/layout';
import TestimonialList from '@/components/TestimonialList';
import { fetchTestimonials, deleteTestimonial } from '@/utils/api';
import { Toaster } from "@/components/ui/toaster"

interface Testimonial {
  id: number;
  name: string;
  content: string;
  videoUrl?: string;
  createdAt: string;
  published: boolean;
}

const AdminDashboard: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadTestimonials = async () => {
    setIsLoading(true);
    try {
      const data = await fetchTestimonials();
      setTestimonials(data);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const handleDelete = async (id: number) => {
    // Optimistic update
    setTestimonials((prevTestimonials) =>
      prevTestimonials.filter((testimonial) => testimonial.id !== id)
    );

    try {
      await deleteTestimonial(id);
    } catch (err) {
      console.error('Error deleting testimonial:', err);
      // Revert the optimistic update
      loadTestimonials();
    }
  };

  if (isLoading) {
    return <Layout><div>Loading...</div></Layout>;
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <TestimonialList testimonials={testimonials} onDelete={handleDelete} />
      <Toaster />
    </Layout>
  );
};

export default AdminDashboard;