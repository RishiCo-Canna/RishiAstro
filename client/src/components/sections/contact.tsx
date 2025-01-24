import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="container px-4 py-24 md:px-6">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Contact Us
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Get in touch with our team
        </p>
      </div>
      <Card className="mx-auto max-w-[500px] mt-16">
        <CardHeader>
          <CardTitle>Send us a message</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Input placeholder="Name" />
            </div>
            <div className="space-y-2">
              <Input placeholder="Email" type="email" />
            </div>
            <div className="space-y-2">
              <Textarea placeholder="Message" />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
