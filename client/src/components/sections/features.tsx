import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Paintbrush, Zap, Shield } from "lucide-react";

const features = [
  {
    title: "Beautiful Design",
    description: "Create stunning user interfaces with modern design principles.",
    icon: Paintbrush,
  },
  {
    title: "Lightning Fast",
    description: "Optimized for performance and speed out of the box.",
    icon: Zap,
  },
  {
    title: "Secure & Reliable",
    description: "Built with security and reliability in mind.",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="container px-4 py-24 md:px-6">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to build modern web applications
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-16">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
