// // components/TestimonialItem.tsx
// import React from 'react';

// interface Testimonial {
//   id: string; 
//   name?: string;
//   content?: string;
//   videoUrl?: string;

// }

// const TestimonialItem: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
//   const embedCode = `<iframe src="YOUR_EMBED_URL/${testimonial.id}" width="400" height="300"></iframe>`;

//   const shareToFacebook = (testimonial: Testimonial) => {
//     const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}/testimonials/${testimonial.id}`;
//     window.open(url, '_blank');
//   };


//   return (
//     <div className="border p-4 rounded shadow-md">
//       <h2 className="text-xl font-bold">{testimonial.name}</h2>
//       <p>{testimonial.content}</p>
//       {testimonial.videoUrl && <video src={testimonial.videoUrl} controls />}
//       <button onClick={() => navigator.clipboard.writeText(embedCode)} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
//         Copy Embed Code
//       </button>
//       <button onClick={() => shareToFacebook(testimonial)} className="mt-2 bg-green-500 text-white px-3 py-1 rounded ml-2">
//         Share on Facebook
//       </button>
//     </div>
//   );
// };

// export default TestimonialItem;

// components/TestimonialItem.tsx
import React from 'react';
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  videoUrl?: string;
  createdAt: string;
  published: boolean;
}

const TestimonialItem: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const embedCode = `<iframe src="YOUR_EMBED_URL/${testimonial.id}" width="400" height="300"></iframe>`;

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}/testimonials/${testimonial.id}`;
    window.open(url, '_blank');
  };

  const copyEmbedCode = () => {
    navigator.clipboard.writeText(embedCode).then(() => {
      toast({
        title: "Embed Code Copied",
        description: "The embed code has been copied to your clipboard.",
      });
    }).catch(() => {
      toast({
        title: "Failed to Copy",
        description: "There was an error copying the embed code.",
        variant: "destructive",
      });
    });
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{testimonial.name}</h2>
      <p className="mb-4">{testimonial.content}</p>
      {testimonial.videoUrl && (
        <video src={testimonial.videoUrl} controls className="w-full mb-4" />
      )}
      <p className="text-sm text-gray-500 mb-4">
        Created at: {new Date(testimonial.createdAt).toLocaleString()}
      </p>
      <p className="text-sm text-gray-500 mb-4">
        Status: {testimonial.published ? 'Published' : 'Unpublished'}
      </p>
      <div className="flex space-x-2">
        <Button onClick={copyEmbedCode} variant="outline">
          Copy Embed Code
        </Button>
        <Button onClick={shareToFacebook} variant="outline">
          Share on Facebook
        </Button>
      </div>
    </div>
  );
};

export default TestimonialItem;
