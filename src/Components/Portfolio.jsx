/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "How to perform CRUD operations on the Todo App using Next Js and Astra DB 🎉",
    description:
      "Hi fellow developers and database enthusiasts, today I would like to share a step-by-step guide following which you will be able to understand and use Apache Cassandra along with NextJS13 in your projects.",
    url: "https://www.linkedin.com/pulse/how-perform-crud-operations-serverless-astra-db-next-build-bilal/?trackingId=aH5l9rR5RYqOEUZJKbW5hA%3D%3D&wt.mc_id=studentamb_283685",
  },
  {
    title: "How to develop a RealTime Chat App using RedisJSON and Next JS from scratch.",
    description:
      "We will be using Redis JSON and Node JS, and Express JS on the backend for the database part. While in the front end I will use Next JS with type script but you can use React JS also if you know about React.",
    url: "https://www.linkedin.com/pulse/how-develop-realtime-chat-app-using-redisjson-next-js-muhammad-bilal/?trackingId=auzoPtWJTbWyro7z9KbHgg%3D%3D&wt.mc_id=studentamb_283685",
  },
  {
    title: "How to develop a Todo App in Next JS and Redis database from scratch",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "How to develop a Todo App in Next JS and Redis database from scratch",
    description:
      "As a beginner when I started working with CRUD operations I remember that I struggled to find the right commands to implement CRUD operations in an app using a database. That is the reason I have planned to write a complete guide on working with Redis database crud operations using redisJSON.",
    url: "https://www.linkedin.com/pulse/how-develop-todo-app-next-js-redis-database-from-scratch-bilal/?trackingId=%2BdEr%2B3wNQyWUOkDIkvl6eQ%3D%3D&wt.mc_id=studentamb_283685",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
