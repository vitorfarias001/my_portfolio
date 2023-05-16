import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Due Lazer",
      role: "React Native Developer",
      url: "https://duelaser.com/",
      start: "December 2020",
      end: "February 2021",
      shortDescription: [
        "I developed private project an application in the industrial branch where communication was made with a laser machine.",
        "Strong knowledge with React Native, the application was made to facilitate the company's labor and speed up production"
      ],
    },
    {
      name: "ClickSoft",
      role: "Reat Native Developer",
      url: "https://clicksoft.com.br/",
      start: "March 2021",
      end: "April 2021",
      shortDescription: [
        "Application development in private React Native projects",
      ],
    },
    {
      name: "Avanti ",
      role: "Internship",
      url: "https://penseavanti.com.br/ecommerce/",
      start: "May 2021",
      end: "July 2021",
      shortDescription: [
        "Training in B2B and B2C e-commerce website development for large national and international companies.",
        "In squads, inserted in agile methodologies working together with the design and project management team.",
      ],
    },
    {
      name: "M3",
      role: "Front End Engineer",
      url: "https://m3ecommerce.com/",
      start: "August 2021",
      end: "November 2021",
      shortDescription: [
        "I worked with an ecommerce platform directly with the client",
      ],
    },
    {
      name: "LaModa",
      role: "Senior Developer",
      url: "https://lamoda.com.br/en/",
      start: "March 2022",
      end: "November 2022",
      shortDescription: [
        "Configuration and support for the development of actions on the VTEX IO platform",
        "I work together with technology, e-commerce and partners to front - end development of applications",
        "Carrying out analysis, technical specification and development of requirements for business",
        "I work in requirements gathering and development/construction of APIs for consuming information and information in JSON",
        "Management and Monitoring of Software Development",
        "Teamwork new features",
        "End-to-end action on failures, incidents and problems of systems and portals Network",
        "I work in code review and support in the definition of day-to-day processes"
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
