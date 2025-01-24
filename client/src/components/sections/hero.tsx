import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container px-4 py-32 md:px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Build Beautiful Websites
          <br />
          Faster Than Ever
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          A modern UI toolkit for creating stunning web applications. Built with React and
          Tailwind CSS.
        </p>
        <div className="flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
