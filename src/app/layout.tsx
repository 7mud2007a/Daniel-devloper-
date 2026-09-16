import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel — Premier Web Designer & Software Engineer",
  description:
    "Portfolio of Daniel, an elite web designer and full-stack engineer crafting high-converting, ultra-fast digital products with code, design & AI.",
  keywords: [
    "Daniel",
    "Web Designer",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "Glassmorphism",
    "AI Development",
    "FinTech",
    "Luxury E-Commerce",
  ],
  authors: [{ name: "Daniel" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  if (storedTheme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-sky-500/30 selection:text-sky-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
