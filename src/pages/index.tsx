import { Inter } from "next/font/google";
import Weather from '@/components/weather';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-8 p-24 ${inter.className}`}
    >
      <h1 className="font-bold text-7xl">Weather</h1>
    </main>
  );
}
