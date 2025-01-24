import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Product Designer",
    content: "This toolkit has revolutionized how I build web applications. The components are beautiful and easy to use.",
    avatar: "AJ",
  },
  {
    name: "Bob Smith",
    role: "Developer",
    content: "The best UI component library I've ever used. It's well-documented and saves me hours of development time.",
    avatar: "BS",
  },
  {
    name: "Carol Williams",
    role: "Founder",
    content: "Our team's productivity has increased significantly since we started using this toolkit.",
    avatar: "CW",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="container px-4 py-24 md:px-6 bg-muted">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Testimonials
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          See what others are saying about our toolkit
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-16">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="bg-background">
            <CardHeader>
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>{testimonial.avatar}</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{testimonial.content}</p>
            </CardContent>
            <CardFooter>
              <div>
                <p className="text-sm font-medium leading-none">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
