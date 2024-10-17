// pages/_app.tsx
import { AppProps } from 'next/app'; // Import AppProps type
import { useEffect } from 'react';
import Router from 'next/router';

declare global {
  interface Window {
    gtag: (...args: any[]) => void; // Declare gtag on the Window object
  }
}

const MyApp = ({ Component, pageProps }: AppProps) => { // Use AppProps for typing
  useEffect(() => {
    const handleRouteChange = (url: string) => { // Explicitly type url as string
      window.gtag('config', 'GA_TRACKING_ID', {
        page_path: url,
      });
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
