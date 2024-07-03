// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../Styles/ShowingMissingSkills.css";

// const ShowingMissingSkills = ({ careerGoalId }) => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate(`/track/${careerGoalId}/missingSkills`);
//   };

//   return (
//     <div className="showing-missing-skills">
//       <h1>Your Career Goal</h1>
//       <p>Click the button below to see the skills you are missing for your career goal.</p>
//       <button className="show-missing-skills-button" onClick={handleButtonClick}>
//         Show Missing Skills
//       </button>
//     </div>
//   );
// };

// export default ShowingMissingSkills;


import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/ShowingMissingSkills.css";

const ShowingMissingSkills = ({ careerGoalId }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/track/${careerGoalId}/missingSkills`);
  };

  return (
    <div className="showing-missing-skills">
      <h1>Your Career Goal</h1>
      <p>Click the button below to see the skills you are missing for your career goal and some recommended tracks according to your skills.</p>
      <button className="show-missing-skills-button" onClick={handleButtonClick}>
        Show Missing Skills
      </button>
    </div>
  );
};

ShowingMissingSkills.propTypes = {
  careerGoalId: PropTypes.string.isRequired,
};

export default ShowingMissingSkills;
