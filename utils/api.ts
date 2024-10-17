// // utils/api.ts

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// export const fetchTestimonials = async () => {
//   const res = await fetch(`${BASE_URL}/api/testimonials`); // Use absolute URL
//   if (!res.ok) {
//     throw new Error('Failed to fetch testimonials');
//   }
//   return res.json();
// };

// export const postTestimonial = async (data: { name: string; content: string; videoUrl?: string }) => {
//   const res = await fetch(`${BASE_URL}/api/testimonials`, { // Use absolute URL
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });
//   if (!res.ok) {
//     throw new Error('Failed to submit testimonial');
//   }
//   return res.json();
// };

// // utils/api.ts

// export const deleteTestimonial = async (id: number) => {
//   const res = await fetch(`${BASE_URL}/api/testimonials?id=${id}`, {
//     method: 'DELETE',
//   });

//   if (!res.ok) {
//     throw new Error('Failed to delete testimonial');
//   }
  
//   // Since we're returning 204 No Content, we don't need to parse the JSON
//   return;
// };

// utils/api.ts
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const fetchTestimonials = async () => {
  const res = await fetch(`${BASE_URL}/api/testimonials`);
  if (!res.ok) {
    throw new Error('Failed to fetch testimonials');
  }
  return res.json();
};

export const postTestimonial = async (data: { name: string; content: string; videoUrl?: string }) => {
  const res = await fetch(`${BASE_URL}/api/testimonials`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error('Failed to submit testimonial');
  }
  return res.json();
};

// utils/api.ts
export const deleteTestimonial = async (id: number) => {
  const res = await fetch(`${BASE_URL}/api/testimonials/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || 'Failed to delete testimonial');
  }
};

