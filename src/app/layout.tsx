import "~/styles/globals.css";
import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "HIMAFI ITB Link Shortener",
  description: "link shortener server for Himpunan Mahasiswa Fisika ITB",
  icons: [{ rel: "icon", url: "/favicon.webp" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.className}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
