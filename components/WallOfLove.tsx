// import React from 'react';
// import TestimonialItem from './TestimonialItem';

// const WallOfLove: React.FC<{ testimonials: any[] }> = ({ testimonials }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {testimonials.map((testimonial) => (
//         <TestimonialItem
//           key={testimonial.id}
//           name={testimonial.name}
//           content={testimonial.content}
//           videoUrl={testimonial.videoUrl}
//         />
//       ))}
//     </div>
//   );
// };

// export default WallOfLove;

// components/WallOfLove.tsx
import React from 'react';
import TestimonialItem from './TestimonialItem';

const WallOfLove: React.FC<{ testimonials: any[] }> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {testimonials.map((testimonial) => (
        <TestimonialItem
          key={testimonial.id}
          testimonial={testimonial} // Pass the entire testimonial object
        />
      ))}
    </div>
  );
};

export default WallOfLove;

