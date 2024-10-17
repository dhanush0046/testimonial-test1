// // components/ui/toaster.tsx
// import React from "react";
// import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose } from "./toast";

// interface ToastMessage {
//   id: string;
//   title: string;
//   description?: string;
// }

// const ToasterContext = React.createContext<{
//   addToast: (toast: ToastMessage) => void;
//   removeToast: (id: string) => void;
// }>({
//   addToast: () => {},
//   removeToast: () => {},
// });

// const ToasterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [toasts, setToasts] = React.useState<ToastMessage[]>([]);

//   const addToast = (toast: ToastMessage) => {
//     setToasts((prev) => [...prev, toast]);
//   };

//   const removeToast = (id: string) => {
//     setToasts((prev) => prev.filter((toast) => toast.id !== id));
//   };

//   return (
//     <ToasterContext.Provider value={{ addToast, removeToast }}>
//       <ToastProvider>
//         {children}
//         <ToastViewport>
//           {toasts.map((toast) => (
//             <Toast key={toast.id} onOpenChange={() => removeToast(toast.id)}>
//               <ToastTitle>{toast.title}</ToastTitle>
//               {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
//               <ToastClose />
//             </Toast>
//           ))}
//         </ToastViewport>
//       </ToastProvider>
//     </ToasterContext.Provider>
//   );
// };

// // Custom hook to use the Toaster context
// const useToaster = () => {
//   return React.useContext(ToasterContext);
// };

// export { ToasterProvider, useToaster };


// components/ui/toaster.tsx
import React from "react";
import { ToastProvider, ToastViewport } from "./toast"; // Adjust if necessary

const Toaster: React.FC = () => {
  return (
    <ToastProvider>
      <ToastViewport />
    </ToastProvider>
  );
};

export { Toaster };
