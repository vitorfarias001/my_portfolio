/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        For proposals , send me an email , or contact me on linkedin and I'll respond immediately 24/7
      </p>
      <div className="contact-cta">
        <Button link="mailto:contato.vitorfariass@gmail.com" text="Email" />
        <Button link="https://www.linkedin.com/in/devvitorfarias/" text="Linkedin" />
      </div>
    </motion.div>
  );
}

export default Contact;
