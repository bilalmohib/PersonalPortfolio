/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a Web and mobile developer currently working in React,React native.I like to work on different programming projects.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Accessibility",
  "React",
  "React Native",
  "Node JS",
  "MongoDB",
  "SQL",
  "NoSQL",
  "DevOps",
  "CI/CD",
  "Azure",
  "AWS",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "Microservices",
  "REST APIs",
  "GraphQL",
  "Python",
  "Java",
  "C#",
  "C++",
  "C",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "SASS",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I know one thing that, if a developer is capable of performing CRUD operations in any tech stack in any database then he/she is capable of building large scale applications. As some who has the knowledge of building things from the groud up can go a long way in building any scalable software.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>
          {detailOrQuote}
          <br />
          <a
            style={{
              color: "blue",
              fontWeight: "bold",
              textDecoration: "underline",
              fontSize: 25,
              fontFamily: "cursive",
            }}
            href="https://www.linkedin.com/newsletters/databases-are-not-difficult-6945124839913320448/?displayConfirmation=true"
            target="_blank"
            rel="noreferrer"
          >
            Full Stack Dev Blog
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
