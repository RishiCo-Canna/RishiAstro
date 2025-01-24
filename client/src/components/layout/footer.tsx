import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built with React and Tailwind CSS. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="#features" className="text-muted-foreground hover:text-foreground">Features</Link>
          <Link href="#testimonials" className="text-muted-foreground hover:text-foreground">Testimonials</Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
