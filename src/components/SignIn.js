import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignIn.css";
import GithubIcon from "../assets/GithubIcon.svg";
import GitLabIcon from "../assets/GitLabIcon.svg";
import BitbucketIcon from "../assets/BitbucketIcon.svg";
import LogoWithtext from "../assets/LogoWithText.svg";
import GreyLogo from "../assets/greyLogo.svg";
import AzureIcon from "../assets/AzureIcon.svg";
import KeyIcon from "../assets/KeyIcon.svg";
import Logo from "../assets/logo.svg";
import Stats from "../assets/StatsCircle.svg";
import Arrow from "../assets/ArrowUp.svg";

function SignIn() {
  const [isSAAS, setIsSAAS] = useState(true);
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard/repo");
  };

  return (
    <div className="auth-page">
      {/* Left Section: Illustration */}
      <section className="auth-illustration-section">
        <div className="stats-wrapper">
          <div className="stats-card">
            <div className="stats-card-header">
              <img src={Logo} alt="logo" />
              <p>AI to Detect & Autofix Bad Code</p>
            </div>
            <div className="stats-container">
              <div className="stat-block">
                <p>30+</p>
                <p>Language Support</p>
              </div>
              <div className="stat-block">
                <p>10K+</p>
                <p>Developers</p>
              </div>
              <div className="stat-block">
                <p>100K+</p>
                <p>Hours Saved</p>
              </div>
            </div>
          </div>
          <div className="stats-issue-card">
            <div className="stats-issue-header">
              <img
                src={Stats}
                alt="circle that represents stats"
                className="stats-icon"
              />
              <div className="stats-percentage">
                <div className="stats-percentage-count">
                  <img src={Arrow} alt="Upwards Arrow" className="arrow-icon" />
                  <p className="percentage-text">14%</p>
                </div>
                <div>
                  <p className="week-text">This week</p>
                </div>
              </div>
            </div>
            <div className="stats-details">
              <p className="details-title">Issues Fixed</p>
              <p className="details-number">500K+</p>
            </div>
          </div>
        </div>
        <div>
          <img src={GreyLogo} alt="Company Grey Logo" className="overlay-logo" />
        </div>
      </section>

      {/* Right Section: Sign-in Options */}
      <section className="auth-options-wrapper">
        <div className="auth-options-container">
          {/* Branding Section */}
          <div className="brand-section">
            <div className="brand-container">
              <img
                src={LogoWithtext}
                alt="CodeAnt AI Logo"
                className="brand-logo"
              />
              <h1>Welcome to CodeAnt AI</h1>
            </div>
            <div className="toggle-button-group">
              <button
                className={`toggle-button ${isSAAS ? "active" : ""}`}
                onClick={() => setIsSAAS(true)}
              >
                SAAS
              </button>
              <button
                className={`toggle-button ${!isSAAS ? "active" : ""}`}
                onClick={() => setIsSAAS(false)}
              >
                Self-Hosted
              </button>
            </div>
          </div>

          {/* Button Group */}
          <div className="auth-button-group">
            {isSAAS ? (
              <>
                <button className="auth-action-button" onClick={handleSignIn}>
                  <img
                    src={GithubIcon}
                    alt="GitHub logo"
                    className="auth-provider-icon"
                  />
                  Sign in with GitHub
                </button>
                <button className="auth-action-button" onClick={handleSignIn}>
                  <img
                    src={BitbucketIcon}
                    alt="Bitbucket logo"
                    className="auth-provider-icon"
                  />
                  Sign in with Bitbucket
                </button>
                <button className="auth-action-button" onClick={handleSignIn}>
                  <img
                    src={AzureIcon}
                    alt="Azure DevOps logo"
                    className="auth-provider-icon"
                  />
                  Sign in with Azure DevOps
                </button>
                <button className="auth-action-button" onClick={handleSignIn}>
                  <img
                    src={GitLabIcon}
                    alt="GitLab logo"
                    className="auth-provider-icon"
                  />
                  Sign in with GitLab
                </button>
              </>
            ) : (
              <>
                <button className="auth-action-button" onClick={handleSignIn}>
                  <img
                    src={GitLabIcon}
                    alt="GitLab logo"
                    className="auth-provider-icon"
                  />
                  Self-Hosted GitLab
                </button>
                <button className="auth-action-button" onClick={handleSignIn}>
                  <img
                    src={KeyIcon}
                    alt="SSO key logo"
                    className="auth-provider-icon"
                  />
                  Sign in with SSO
                </button>
              </>
            )}
          </div>
        </div>
        <p className="footer-text">
          By signing up, you agree to the <span>Privacy Policy</span>.
        </p>
      </section>
    </div>
  );
}

export default SignIn;
