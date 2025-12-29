import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsDataScience = [
    "Python",
    "Pandas",
    "NumPy",
    "Jupyter Notebook",
    "SQL",
    "Data Cleaning",
    "EDA",
    "Git & GitHub"
];

const labelsDataAnalysis = [
    "Power BI",
    "DAX Basics",
    "Data Modeling",
    "Advanced Excel",
    "Pivot Tables",
    "VLOOKUP / XLOOKUP",
    "Google Looker Studio",
    "KPI Reporting"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>

                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>Data Science</h3>
                        <p>
                            Strong foundation in data handling, preprocessing, and exploratory data analysis
                            using Python. Experienced in cleaning, transforming, and validating data to
                            extract meaningful insights.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsDataScience.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Data Analysis & Visualization</h3>
                        <p>
                            Skilled in analyzing business data and presenting insights through dashboards
                            and reports. Focused on KPI definition, trend analysis, and clear data storytelling
                            for decision making.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsDataAnalysis.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
