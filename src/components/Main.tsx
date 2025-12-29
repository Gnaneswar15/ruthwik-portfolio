import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://ruthwikport.s3.us-east-1.amazonaws.com/ruth.jpeg"/>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Ruthwikyaganti" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ruthwik-yaganti-77357628b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Yaganti Ruthwik</h1>
          <p>Data Science</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Ruthwikyaganti" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ruthwik-yaganti-77357628b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;