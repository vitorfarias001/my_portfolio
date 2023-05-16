import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.jpeg",
      projectName: "Netflix",
      projectLink: "https://github.com/vitorfarias001/next-netflix",
      projectDescription:
        "This is a repository for a FullStack Netflix Clone tutorial using React, NextJS, TailwindCSS & Prisma.",
      projectTech: [
        "Environment, Typescript, NextJS Setup",
        "MongoDB & Prisma connect, Database creation",
        "Authentication with NextAuth, Google & Github Login",
        "Full responsiveness on all pages", 
        "Cookie based authentication",
        "API and Controllers creation",
        "Detail-oriented effects and animations using TailwindCSS",
        "React SWR data fetching",
        "Zustand state management"
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/project2.jpeg",
      projectName: "Airbnb Clone",
      projectLink: "https://github.com/vitorfarias001/next-airbnbm",
      projectDescription:
        "This is a repository for a Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth.",
      projectTech: [
        "Tailwind design , Tailwind animations and effects & Full responsiveness",
        "Credential authentication , Google authentication , Github Auth",
        "Image Upload CDN",
        "Client form validation and handling using react-hook-form",
        "Server error handling using react-toast",
        "Calendars with react-date-range",
        "Page loading state , Page empty state",
        "Booking / Reservation system , Guest reservation cancellation , Owner reservation cancellation",
        "Creation and deletion of properties , Pricing calculation",
        "Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms",
        "For example we will filter out properties that have a reservation in your desired date range to travel",
        "Favorites system & Shareable URL filters",
        "Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results",
        "How to write POST and DELETE routes in route handlers (app/api)",
        "How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)",
        "How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling",
        "How to handle relations between Server and Child components"
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/project3.jpeg",
      projectName: "Twitter Clone ",
      projectLink: "https://github.com/vitorfarias001/next-twitter",
      projectDescription:
        "This is a repository for a FullStack Twitter clone tutorial using React, NextJS, TailwindCSS & Prisma.",
      projectTech: [
        "Authentication system & Notification System",
        "Image Upload using Base64 strings , Prisma ORM with MongoDB",
        "Responsive Layout",
        "1 To Many Relations (User - Post)",
        "Many To Many Relations (Post - Comment)",
        "Following functionality",
        "Comments / Replies",
        "Likes functionality"
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
