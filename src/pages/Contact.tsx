import { useState } from "react";
import { ParamountNavbar } from "@/components/layout/ParamountNavbar";
import { ParamountFooter } from "@/components/layout/ParamountFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, Loader2 } from "lucide-react";

const services = [
  "Workflow Automation",
  "Data Processing",
  "Customer Support Automation",
  "Report Generation",
  "System Integration",
  "Compliance Monitoring",
  "Custom AI Agents",
  "Strategic Consulting"
];


const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || "",
      company: formData.company.trim() || "",
      service: formData.service || "",
      message: formData.message.trim()
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzTr_tw6A3WpOP-DGTKoZlcb0nYCamiHJftuNFGxu1pLEffMqRTei54hsxPwhWlJqxD/exec",
        {
          method: "POST",
          body: JSON.stringify(data)
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        toast({
          title: "Message Sent!",
          description: `Your message was successfully sent! Submission ID: ${result.id}`
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: ""
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ParamountNavbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ready to transform your operations with intelligent automation?
              Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 (555) 000-0000"
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Your company"
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service of Interest
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger className="bg-background border-border text-foreground">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your operational challenges..."
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <Button
                  size="lg"
                  type="submit"
                  className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      Sending...{" "}
                      <Loader2 className="ml-2 w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Address
                      </h3>
                      <p className="text-muted-foreground">
                        123 Innovation Drive
                        <br />
                        Tech City, TC 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        contact@paramountintel.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Working Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9AM - 6PM EST
                        <br />
                        24/7 Support for Enterprise Clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <a
                  href="#"
                  className="flex items-center justify-between px-6 py-4 rounded-xl bg-foreground/10 text-foreground hover:bg-foreground hover:text-background transition-all group"
                >
                  <span className="text-lg font-medium">LinkedIn</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ParamountFooter />
    </div>
  );
};

export default Contact;
