import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shivaraj Senthil Rajan Portfolio",
  description: "Interactive AI-powered portfolio. Chat with my digital twin to learn about my skills, projects, and experience in AI, Data Science, and Machine Learning.",
  keywords: [
    "Shivaraj Senthil Rajan",
    "SSR",
    "Portfolio",
    "AI Engineer",
    "Data Scientist",
    "Machine Learning",
    "Interactive",
    "AI Portfolio",
    "CU Boulder",
    "Data Science",
    "Next.js",
    "React"
  ],
  authors: [
    {
      name: "Shivaraj Senthil Rajan",
      url: "https://github.com/Shiva250503ss",
    },
  ],
  creator: "Shivaraj Senthil Rajan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Shiva250503ss",
    title: "Shivaraj Senthil Rajan Portfolio",
    description: "Interactive AI-powered portfolio - Chat with my digital twin!",
    siteName: "Shivaraj's AI Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivaraj Senthil Rajan Portfolio",
    description: "Interactive AI-powered portfolio - Chat with my digital twin!",
    creator: "@ShivarajSR",
  },
  icons: {
    icon: [
      {
        url: "/logo-ssr.svg",
        sizes: "any",
      }
    ],
    shortcut: "/logo-ssr.svg?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/logo-ssr.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans antialiased transition-colors duration-500 ease-in-out",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}