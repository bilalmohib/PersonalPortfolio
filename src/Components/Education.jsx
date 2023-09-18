import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
      <h2>🎓 Education</h2>

      <div className="education">
        <div className="education__item">
          <h3 className="education__item__title">Bachelors in Computer Science 🖥️</h3>
          <p className="education__item__meta">2019 - 2023</p>
          <p className="education__item__description">
            I am currently pursuing my bachelors in computer science 🖥️ from University of and
            Technology (UET) 🏛
          </p>
        </div>
        <div className="education__item">
          <h3 className="education__item__title">Intermediate in 👨🏻‍💻 Pre Engineering</h3>
          <p className="education__item__meta">2017 - 2019</p>
          <p className="education__item__description">
            I have completed my intermediate in pre engineering from Aspire Group of Colleges 🏛
            (Harbanspura Campus)
          </p>
        </div>
        <div className="education__item">
          <h3 className="education__item__title">Matriculation in Computer Science</h3>
          <p className="education__item__meta">2015 - 2017</p>
          <p className="education__item__description">
            I have completed my matriculation in science from 📖 Shaur Educational Complex.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
