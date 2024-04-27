import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"] });

const metainfo = {
  name: "Oyeti Oluwatimileyin - chocoscoding",
  description: "Full-stack web developer from Nigeria with 4 years in building functional and scalable web apps/sites.",
  url: "https://chocoscoding.tech",
  image: "/meta/meta.png",
  twitter: "@chocoscoding",
  linkedin: "@timio",
};

export const metadata: Metadata = {
  metadataBase: new URL(metainfo.url),
  title: metainfo.name,
  description: metainfo.description,
  authors: {
    name: metainfo.name,
    url: metainfo.url,
  },
  creator: metainfo.name,
  openGraph: {
    type: "website",
    url: metainfo.url,
    title: metainfo.name,
    description: metainfo.description,
    images: metainfo.image,
  },
  twitter: {
    card: "summary_large_image",
    title: metainfo.name,
    description: metainfo.description,
    creator: metainfo.twitter,
    images: metainfo.image,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-neutral-100 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300", epilogue.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <section className="container flex min-h-screen max-w-2xl flex-col">
            <Header />
            <main className="flex flex-1 flex-col pb-20 pt-40 md:pt-40 ">{children}</main>
            <Footer />
          </section>
        </ThemeProvider>
        <div className="pointer-events-none fixed inset-0 z-[99] h-full w-full overflow-hidden bg-[url(/assets/noise.png)] opacity-30 dark:opacity-[0.17]" />
      </body>
    </html>
  );
}