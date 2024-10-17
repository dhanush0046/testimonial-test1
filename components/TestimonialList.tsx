// // components/TestimonialList.tsx
// import React from 'react';
// import TestimonialItem from './TestimonialItem';

// const TestimonialList: React.FC<{ testimonials: any[], onDelete: (id: number) => Promise<void> }> = ({ testimonials, onDelete }) => {
//   return (
//     <div>
//       {testimonials.map((testimonial) => (
//         <div key={testimonial.id} className="border p-4 mb-4">
//           <TestimonialItem testimonial={testimonial} />
//           <button
//             onClick={() => onDelete(testimonial.id)}
//             className="mt-2 bg-red-500 text-white px-3 py-1 rounded border border-black"
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TestimonialList;

// components/TestimonialList.tsx
import React, { useState } from 'react';
import TestimonialItem from './TestimonialItem';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, 
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
   AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger 
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  videoUrl?: string;
  createdAt: string;
  published: boolean;
}

interface TestimonialListProps {
  testimonials: Testimonial[];
  onDelete: (id: number) => Promise<void>;
}

const TestimonialList: React.FC<TestimonialListProps> = ({ testimonials, onDelete }) => {
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const { toast } = useToast()

  const handleDelete = async (id: number) => {
    setDeletingId(id);
    try {
      await onDelete(id);
      toast({
        title: "Testimonial deleted",
        description: "The testimonial has been successfully removed.",
      })
    } catch (error) {
      console.error('Failed to delete testimonial:', error);
      toast({
        title: "Error",
        description: "Failed to delete the testimonial. Please try again.",
        variant: "destructive",
      })
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-4">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="border p-4 rounded-lg shadow">
          <TestimonialItem testimonial={testimonial} />
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="mt-2">Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the testimonial
                  from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => handleDelete(testimonial.id)}
                  disabled={deletingId === testimonial.id}
                >
                  {deletingId === testimonial.id ? 'Deleting...' : 'Delete'}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ))}
    </div>
  );
};

export default TestimonialList;