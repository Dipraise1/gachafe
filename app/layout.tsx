import './globals.css';
import { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import localFont from 'next/font/local';
import Script from 'next/script';

const onest = localFont({
  src: './fonts/Onest-Variable.woff2',
  variable: '--font-onest',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gotcha Pingu',
  description: 'Gotcha Pingu is a playful GameFi project where users earn tokens and compete for land ownership in a ETH-powered economy.',
};

// Google Analytics Component
const GoogleAnalytics = () => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2E6LYD3KN3" strategy="afterInteractive" id="google-analytics" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2E6LYD3KN3');
          `,
          
        }}
      />
    </>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <GoogleAnalytics />
      <body className={`${onest.variable} antialiased bg-background text-foreground font-onest`}>
        <div className="min-h-screen overflow-hidden">
          {children}
        </div>
        <ToastContainer />
      </body>
    </html>
  );
} 