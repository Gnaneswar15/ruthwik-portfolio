import React from "react";
import mock10 from '../assets/images/mock10.jpg'; // Hate Speech Detection image
import mock09 from '../assets/images/mock09.jpg'; // COVID X-Ray image
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>

            <div className="projects-grid">

                <div className="project">
                    <img
                        src={mock10}
                        className="zoom"
                        alt="Hate Speech Detection"
                        width="100%"
                    />
                    <h2>Hate Speech Detection on Social Media</h2>
                    <p>
                        Built a machine learning model to classify social media text as hate, offensive,
                        or neutral using NLP techniques. Performed text preprocessing with tokenization,
                        lemmatization, and TF-IDF vectorization. Trained and compared Naive Bayes and SVM
                        models, achieving 88% accuracy to support automated content moderation.
                    </p>
                </div>

                <div className="project">
                    <img
                        src={mock09}
                        className="zoom"
                        alt="COVID-19 X-Ray Classification"
                        width="100%"
                    />
                    <h2>COVID-19 Chest X-Ray Classification</h2>
                    <p>
                        Developed a deep learning model to classify chest X-ray images into COVID-19,
                        normal, and pneumonia categories. Fine-tuned CNN models on 3,000+ images and
                        achieved 96% accuracy. Reduced false positives using data augmentation and lung
                        segmentation, and deployed the optimized TensorFlow Lite model on Raspberry Pi
                        for real-time inference.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;
