import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Github, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
          Contact
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4 md:space-y-6">
            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
                Restons en contact
              </h3>
              <p className="text-muted-foreground mb-8">
                N'hésitez pas à me contacter pour discuter de vos projets ou simplement pour échanger !
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:sousstizni@hotmail.fr"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="text-primary" size={24} />
                  <span>sousstizni@hotmail.fr</span>
                </a>
                <a
                  href="https://github.com/celya2009/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Github className="text-primary" size={24} />
                  <span>github.com/celya2009/portfolio</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Votre nom" required className="bg-background border-border text-foreground" />
              <Input type="email" placeholder="Votre email" required className="bg-background border-border text-foreground" />
              <Textarea placeholder="Votre message" rows={5} required className="bg-background border-border text-foreground resize-none" />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
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
