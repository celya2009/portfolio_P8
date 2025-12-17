import React, { useState } from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
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
                N'hésitez pas à me contacter pour discuter de vos projets web.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:sousstizni@hotmail.fr"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  aria-label="Envoyer un email"
                >
                  {/* SVG Mail simplifié */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v2l8 5 8-5V4H4zm16 16V8l-8 5-8-5v12h16z"/>
                  </svg>
                  <span>sousstizni@hotmail.fr</span>
                </a>

                <a
                  href="https://github.com/celya2009/portfolio_P8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  aria-label="Lien vers GitHub"
                >
                  {/* SVG GitHub */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.933 0-1.31.467-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.803 5.628-5.475 5.923.43.37.814 1.1.814 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
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
