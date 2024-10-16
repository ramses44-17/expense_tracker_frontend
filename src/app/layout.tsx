import type { Metadata } from "next";
import "./globals.css";
import {Button} from "@/components/ui/button"
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expensphere",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className="dark">
        <header className="flex p-5 justify-between items-center">
          <div className="font-bold font-sans text-orange-700 text-xl">expenSphere</div>
            <ul className="md:flex space-x-6 hidden">
              <Link href="/">Accueil</Link>
              <Link href="#">Fonctionnalités</Link>
              <Link href="#">Tarifs</Link>
              <Link href="#">Contact</Link>
            </ul>
          <Button disabled>s'enregistrer</Button>
        </header>
        <main>
          {children}
        </main>
        <footer className="py-4 text-gray-400">
  <div className="container mx-auto text-center">
    <p className="mb-1">© 2024 ExpenSphere. Tous droits réservés.</p>
    <p className="mb-2">Pour toute question, contactez moi via mon adresse email <a href="mailto:ramses44@gmail.com" className="underline">ramseskalunga44@gmail.com</a></p>
  </div>
</footer>
<AnimatedGridPattern
        numSquares={100}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        height={40}
        width={30}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%]  skew-y-12",
        )}
      />
      </body>
    </html>
  );
}
