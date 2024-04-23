import React, { useState } from "react";
import "./LanguagesPage.css";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const languages = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "PHP",
];

const LanguagesPage = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const navigate = useNavigate();
  const handleLanguageSelect = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(
        selectedLanguages.filter((lang) => lang !== language)
      );
      // console.log(selectedLanguages);
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const handleSelectAll = () => {
    setSelectedLanguages(languages);
    console.log(languages);
  };
  const onsubmitHandler = () => {
    navigate("/user-dashboard1");
    console.log(selectedLanguages);
  };

  return (
    <div className="language-page">
      <Navbar />
      <h2 className="heading2">Select Your preferred Languages...</h2>
      <div className="languages-container-cover">
        <div className="languages-container">
          {languages.map((language) => (
            <div
              key={language}
              className={`language-card ${
                selectedLanguages.includes(language) ? "selected" : ""
              }`}
              onClick={() => handleLanguageSelect(language)}
            >
              {language}
            </div>
          ))}
          <div
            className={`language-card ${
              selectedLanguages.length === languages.length ? "selected" : ""
            }`}
            onClick={handleSelectAll}
          >
            All
          </div>
        </div>
        <button className="continue-button" onClick={onsubmitHandler}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default LanguagesPage;
