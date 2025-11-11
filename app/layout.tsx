import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Acme Dashboard",
    template: "%s | Acme Dashboard",
  },
  description: "Acme Dashboard built with Next.js and NextAuth",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased s`}>{children}</body>
    </html>
  );
}
