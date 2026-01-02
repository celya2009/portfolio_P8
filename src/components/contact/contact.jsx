import React, { useState } from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import Card from "@/components/card/card";
import Button from "@/components/button/button"; 
import "./contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
    setMessage("");
  };

  return (
    <section id="contact" className="contact-section" aria-label="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>

        <div className="contact-grid">
          {/* Bloc informations */}
            <Card className="contact-card"> 
             <h3 className="contact-card-title">Restons en contact</h3> 
            <p className="contact-intro">
              N'hésitez pas à me contacter pour discuter de vos projets web
            </p>

            <div className="contact-link">
              <a href="mailto:sousstizni@hotmail.fr">
                <FaEnvelope /> sousstizni@hotmail.fr
              </a>
              <a
                href="https://github.com/celya2009/portfolio_P8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> github.com/celya2009/portfolio
              </a>
            </div>
             </Card>
          

          {/* Formulaire */}
         <Card className="contact-card">  
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                placeholder="Votre nom"
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Votre email"
                required
              />
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message"
                rows={5}
                required
              />
               <Button type="primary" htmlType="submit">
                Envoyer le message
              </Button>
            </form>
              </Card>
          </div>
           </div>
    </section>
  );
};

export default Contact;
