// src/components/Project.tsx
import React from "react";
import { Link } from "react-router-dom";
import mock01 from '../assets/images/cryptomator.png';
import mock02 from '../assets/images/2FAMFA.jpg';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Articles</h1>
      <div className="projects-grid">
        <div className="project">
          {/* Lien vers la page 2FAMFA */}
          <Link to="/2FAMFA">
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </Link>
          <Link to="/2FAMFA">
            <h2>Securing Access with MFA & 2FA</h2>
          </Link>
          <p>
            In this article, I explore how Multi-Factor and Two-Factor Authentication work, how to implement them, and why they're crucial for modern apps.
          </p>
        </div>
        <div className="project">
          {/* Lien vers la page Cryptomator */}
          <Link to="/cryptomator">
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </Link>
          <Link to="/cryptomator">
            <h2>Cloud Privacy with Cryptomator</h2>
          </Link>
          <p>
            A practical look at client-side encryption for cloud storage. Learn how Cryptomator protects your data without locking you into a platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
