import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Build ecommerce sites , maintenance and consulting and mobile applications
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality solutions that delight our clients and exceed their
            expectations{" "}
          </p>
          <p className="about-grid-info-text">
            Additionally, I share my knowledge and passion with the world
            through my porfolio and github where I demonstrate how to build
            full-stack applications.
          </p>
          <p className="about-grid-info-text">
            broad domain and knowledge in technologies:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Next </li>
            <li className="about-grid-info-list-item">React </li>
            <li className="about-grid-info-list-item">Vue </li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Flutter</li>
            <li className="about-grid-info-list-item">Node.js</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/vitor.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
