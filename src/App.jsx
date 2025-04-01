import React from "react";
import "./styles.css";
import Project from "./project";
import { useState } from "react";
// EDUCATION
const education = {
  college: {
    name: "Computer Science (Fall 2025)",
    details:
      "Accepted to CS programs across the United States - Still deciding on a school and will be starting fall 2025.",
  },
  highSchool: {
    name: "Phillips Academy",
    logo: "andover.jpg",
    activities: ["Varsity Lacrosse", "Andover Economic Society", "Philanthropy Investment Club"],
  },
};

// WORK EXPERIENCE (newest first)
const workExperience = [
  {
    position: "Trading Systems Engineer - Amidala One",
    timeline: "2025 - Present",
    logo: "amidalaone.png",
  },
  {
    position: "Lake Patrol & Head Lifeguard - Boulder Reservoir",
    timeline: "Summer 2024",
    logo: "reservoir.jpeg",
  },
  {
    position: "Lifeguard - Boulder Reservoir",
    timeline: "Summer 2022, Summer 2023",
    logo: "reservoir.jpeg",
  },
];

// ENGINEERING PORTFOLIO (6 projects, 3×2 grid)
const projects = [
  {
    title: "Model Node",
    image: "model.png",
    description: "Open-source backend for hosting LLMs",
  },
  {
    title: "VPN Service",
    image: "degen.png",
    description: "Cloud-based VPN proxy service for foreign sites",
  },
  {
    title: "Amidala One",
    image: "amidalaone.png",
    description: "High frequency trading algorithms for cryptocurrencies",
  },
  {
    title: "Racing Simulator Handbrake",
    image: "final.png",
    description: "Custom USB handbrake for realistic racing simulators",
  },
  {
    title: "Reaction Time Metrics",
    image: "laxthumb.png",
    description: "Camera-based software for real-time faceoff speed metrics.",
  },
  {
    title: "React Web Apps",
    image: "reactpng.png",
    description: "Websites built using Facebook's React library",
  },
];

// PHILANTHROPY
const philanthropy = [
  {
    org: "The Weatherspoon Foundation",
    role: "Board Member & Secretary",
    dates: "Distributing funds to support 501C3 charities  •  2023 - Present",
    logo: "TWF.png",
  },
  {
    org: "The White Line Foundation",
    role: "Board Member",
    dates: "Pedestrian safety advocacy  •  2023 - Present",
    logo: "TWL.jpg",
  },
  {
    org: "EFAA Boulder",
    role: "Volunteer",
    dates: "Emergency Family Assistance Assiciation  •  2018 - 2024",
    logo: "EFAA.jpg",
  },
];

export default function App() {

  const [page, setPage] = useState("none")




  return (
    <div className="main-container">
      {/* LEFT SIDE (HERO) */}
      <section className="hero-section">
        <div className="hero-content">
          <img src="jude.jpg" alt="Jude" className="hero-image" />
          <h1 className="hero-name">Jude Scarbrough</h1>
          <p className="hero-subtitle">
           Boulder, Colorado <span style={{ margin: '0 6px' }}>•</span> Austin, Texas
          </p>
          <p className="hero-subtitle">
           Boston, Massachusetts
          </p>

        </div>
      </section>

      {/* RIGHT SIDE (GRID LAYOUT) */}
      <section className="right-section">
        {/* EDUCATION (top-left) */}
        <article className="section-card education">
          <div className="section-title">EDUCATION</div>
          <div className="education-inner">
            <div className="category-block">
              <div className="category-header">COLLEGE</div>
              <div className="category-body">
                <h3>{education.college.name}</h3>
                <div className="category-text">{education.college.details}</div>
              </div>
            </div>

            <div className="category-block">
              <div className="category-header">HIGH SCHOOL</div>
              <div className="row-layout">
                {/* Medium images (80×80) */}
                <img
                  src={education.highSchool.logo}
                  alt={education.highSchool.name}
                  className="med-square-image"
                />
                <div>
                  <h3>{education.highSchool.name}</h3>
                  <div className="category-text">
                    Activities: {education.highSchool.activities.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* WORK EXPERIENCE (top-right) */}
        <article className="section-card work">
          <div className="section-title">WORK EXPERIENCE</div>
          {workExperience.map((job, idx) => (
            <div key={idx} className="row-layout work-item">
              {/* Medium images (80×80) */}
              <img
                src={job.logo}
                alt={job.position}
                className="med-square-image"
              />
              <div>
                <h3>{job.position}</h3>
                <div className="category-text">{job.timeline}</div>
              </div>
            </div>
          ))}
        </article>

        {/* ENGINEERING PORTFOLIO (middle, spanning full width) */}
        <article className="section-card engineering">
          <div className="section-title">ENGINEERING</div>
          <div className="grid-layout">
            {projects.map((proj, idx) => (
              <div key={idx} className="grid-item row-layout" onClick={() => setPage(proj.title)}>
                {/* Larger images (120×120) */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="portfolio-image"
                />
                <div>
                  <h3>{proj.title}</h3>
                  <div className="category-text">{proj.description}</div>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* PHILANTHROPY (bottom-left) -> 2 top, 1 centered below */}
        <article className="section-card philanthropy">
          <div className="section-title">PHILANTHROPY</div>
          <div className="philanthropy-grid">
            {/* Top row: 2 items */}
            {philanthropy.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className={`row-layout philanthropy-item ${idx === 1 ? "cursor-pointer" : ""}`}
                onClick={() => {
                  if (idx === 1) {
                    window.open("https://thewhiteline.org", "_blank");
                  }
                }}
              >
                <img
                  src={item.logo}
                  alt={item.org}
                  className="sm-square-image"
                />
                <div>
                  <h3>
                    {item.org} <span className="small-text">({item.role})</span>
                  </h3>
                  <div className="category-text">{item.dates}</div>
                </div>
              </div>
            ))}


            {/* Bottom row: single item centered */}
            <div className="philanthropy-last">
              {philanthropy.slice(2).map((item, idx) => (
                <div key={idx} className="row-layout philanthropy-item">
                  <img
                    src={item.logo}
                    alt={item.org}
                    className="sm-square-image"
                  />
                  <div>
                    <h3>
                      {item.org} <span className="small-text">({item.role})</span>
                    </h3>
                    <div className="category-text">{item.dates}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* CONNECT (bottom-right) */}
        <article className="section-card connect">
          <div className="section-title">CONNECT</div>
          <div className="connect-layout">
            {/* LinkedIn */}
            <div className="linkedin-block">
              <h3 className="link-title">LINKEDIN PROFILE</h3>
              <img
                src="jude.jpg"
                alt="LinkedIn Jude"
                className="linkedin-photo"
              />
              <div className="link-name">Jude Scarbrough</div>
              <button
                className="open-link"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/jude-scarbrough-197344228/", "_blank")
                }
              >
                Open →
              </button>
            </div>
            {/* Contact */}
            <div className="contact-fields">
              <div className="contact-block">
                <div className="contact-label">PHONE</div>
                <div className="contact-value">+1 (512) 662-3667</div>
              </div>
              <div className="contact-block">
                <div className="contact-label">EMAIL</div>
                <div className="contact-value">jude.scarbrough@gmail.com</div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <Project page={page} resetPage={() => setPage("none")}></Project>
    </div>
    
  );
}
