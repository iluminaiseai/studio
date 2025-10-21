
import { LogoCapricho } from "@/components/logo-capricho";
import Link from "next/link";

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <LogoCapricho className="h-10 w-auto text-primary" />
            <span className="font-headline text-xl font-bold">Decodificador do Amor</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
