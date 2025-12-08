import React from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Github, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    setMessage("");
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
          Contact
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Bloc informations */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
                Restons en contact
              </h3>
              <p className="text-muted-foreground mb-8">
                N'hésitez pas à me contacter pour discuter de vos projets web, poser des questions sur mon portfolio ou simplement échanger sur le développement Full Stack.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:sousstizni@hotmail.fr"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  aria-label="Envoyer un email"
                >
                  <Mail className="text-primary" size={24} />
                  <span>sousstizni@hotmail.fr</span>
                </a>
                <a
                  href="https://github.com/celya2009/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  aria-label="Lien vers GitHub"
                >
                  <Github className="text-primary" size={24} />
                  <span>github.com/celya2009/portfolio</span>
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4" aria-labelledby="contact-form-title">
              <h3 id="contact-form-title" className="sr-only">Formulaire de contact</h3>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="sr-only">Nom</label>
                <Input
                  id="name"
                  placeholder="Votre nom"
                  required
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="sr-only">Email</label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Votre email"
                  required
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Votre message"
                  rows={5}
                  required
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-[#b26500] text-primary-foreground"
              >
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
