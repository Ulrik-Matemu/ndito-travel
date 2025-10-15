import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/shared/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Ndito Travel",
  description: "Top Tour Operator in Tanzania. Book Safaris, Zanzibar Holidays, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#e8dfd7]">
        {/* Main content fills remaining height */}
        <main className="flex-grow">{children}</main>

        {/* Footer stays pinned at bottom */}
        <div className="mx-4 md:mx-16">
          <Footer />
          
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
