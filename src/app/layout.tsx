import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react'; // Import ReactNode for typing children

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: ReactNode; // Specify the type for children
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
