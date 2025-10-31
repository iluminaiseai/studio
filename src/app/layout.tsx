import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import { FacebookPixel } from '@/components/facebook-pixel';
import { TikTokPixel } from '@/components/tiktok-pixel';

export const metadata: Metadata = {
  title: 'Decodificador do Amor',
  description: 'Um quiz de relacionamento interativo para avaliar sinais de interesse, atenção, comportamento e sentimentos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
          "min-h-screen bg-background font-body antialiased",
          "bg-gradient-to-br from-background via-accent to-white"
        )}>
        <FacebookPixel />
        <TikTokPixel />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
