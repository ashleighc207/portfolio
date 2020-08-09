import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Project from "../Project/Project";
import { projects, categories } from "../utils/projects";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(projects);

  useEffect(() => {
    category !== "All"
      ? setVisibleProjects(
          projects.filter(
            p => p.category.toLowerCase() === category.toLowerCase()
          )
        )
      : setVisibleProjects(projects);
  }, [category]);

  return (
    <>
      <Header />
      <main className="App">
        <h1 className="heading-one">
          Code is both <span className="heading-bold">art and science</span>;
        </h1>
        <h1 className="heading-one">
          {" "}
          I build software that finds the perfect{" "}
          <span className="heading-bold">balance</span>
        </h1>
        <section className="main-content">
          <div className="project-categories">
            {categories.map(p => {
              return (
                <p
                  className={
                    category === p
                      ? "project-category active"
                      : "project-category"
                  }
                  key={p}
                  onClick={e => setCategory(e.target.innerText)}
                >
                  {p}
                </p>
              );
            })}
          </div>
          {visibleProjects.map(p => {
            return <Project project={p} key={p.name} />;
          })}
        </section>
      </main>
    </>
  );
};

export default App;
