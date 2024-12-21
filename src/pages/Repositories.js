import React from "react";
import "../styles/repository.css";
import RefreshIcon from "../assets/refreshIcon.svg";
import PlusIcon from "../assets/plusIcon.svg";
import SearchIcon from "../assets/search.svg";
import DatabaseIcon from '../assets/databaseIcon.svg';
import Ellipse from '../assets/Ellipse.svg'
function Repositories() {
  const repositories = [
    {
      name: "design-system",
      type: "Public",
      language: "React",
      size: "7320 KB",
      updated: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      type: "Private",
      language: "JavaScript",
      size: "5871 KB",
      updated: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      type: "Private",
      language: "Python",
      size: "4521 KB",
      updated: "5 days ago",
    },
    {
      name: "mobile-app",
      type: "Public",
      language: "Swift",
      size: "3096 KB",
      updated: "3 days ago",
    },
    {
      name: "e-commerce-platform",
      type: "Private",
      language: "Java",
      size: "6210 KB",
      updated: "6 days ago",
    },
    {
      name: "blog-website",
      type: "Public",
      language: "HTML/CSS",
      size: "1876 KB",
      updated: "4 days ago",
    },
    {
      name: "social-network",
      type: "Private",
      language: "PHP",
      size: "5432 KB",
      updated: "7 days ago",
    },
  ];
  return (
    <>
      <section className="repos-container-outer">
        <div className="repository-container">
         <div className="repository-header">
         <div className="dashboard-header">
            <div>
              <h1 className="dashboard-heading">Repositories</h1>
              <p>33 total repositories</p>
            </div>
            <div className="dashboard-buttons">
              <button className="refresh-button ">
                <img src={RefreshIcon} alt="refresh icon" />
                Refresh All
              </button>
              <button className="add-repo-button">
                <img src={PlusIcon} alt="refresh icon" /> Add Repository
              </button>
            </div>
          </div>
          <div className="search-container">
            <img src={SearchIcon} alt="search icon" className="search-icon" />
            <input
              type="text"
              placeholder="Search Repositories"
              className="search-bar"
            />
          </div>
         </div>

          <ul className="repo-list">
            {repositories.map((repo, index) => (
              <li key={index} className="repo-item">
                <div className="repo-details">
                  <h3 className="repo-name">{repo.name}</h3>
                  <span className="repo-type">{repo.type}</span>
                </div>
                <div className="repo-meta">
                
                  <span className="repo-language">{repo.language}<img src={Ellipse} alt="circle of blue color"/></span>
                  <span className="repo-size"><img src={DatabaseIcon} alt="database icon"/>{repo.size}</span>
                  <span>Updated {repo.updated}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Repositories;
