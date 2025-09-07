"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      value: "rajavardhan96@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      value: "+91 9182800745",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      value: "Hyderabad, India",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/ravularajavardhan96",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/rajavardhan-reddy-ravula-b122372b0",
      color: "hover:text-blue-600",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      url: "https://wa.me/919182800745",
      color: "hover:text-green-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-background-secondary relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">   Let’s Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you’re interested in collaborating, have a project idea, 
    or just want to say hi — I’d love to hear from you.
          </p>
          </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-hover p-4 sm:p-6 md:p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-background-secondary rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {info.title}
                      </p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-hover p-4 sm:p-6 md:p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-background-secondary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${link.color}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-hover p-4 sm:p-6 md:p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-background-secondary"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-background-secondary"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="bg-background-secondary min-h-[120px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full sm:w-auto"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
    </section>
  );
}
