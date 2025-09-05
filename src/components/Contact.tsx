import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/rajavardhanreddy",
      color: "hover:text-accent"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/rajavardhanreddy",
      color: "hover:text-primary"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:rajavardhan@email.com",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a great conversation about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-hover p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:rajavardhan@email.com" className="text-accent hover:underline">
                      rajavardhan@email.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Hyderabad, India</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card-hover p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-foreground">Follow Me</h3>
              <div className="flex space-x-4">
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
          <div className="card-hover p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[120px]"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-accent w-full"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;