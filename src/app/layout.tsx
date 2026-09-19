import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "RIZKI RAMDHANI | Informatics Student",
    template: "%s | Rizki Ramdhani",
  },
  description:
    "Portfolio Rizki Ramdhani, mahasiswa Informatika yang membangun project web, mobile, dan IoT.",
  keywords: ["Rizki Ramdhani", "portfolio", "informatika", "web development", "IoT"],
  authors: [{ name: "Rizki Ramdhani" }],
  openGraph: {
    title: "RIZKI RAMDHANI | Informatics Student",
    description:
      "Portfolio project web, mobile, dan IoT karya Rizki Ramdhani.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
