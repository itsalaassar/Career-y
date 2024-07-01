// // Import your quiz images
// import CSSLogo from '/SkillsLogo/CSS.jpeg';
// import JavaScriptLogo from '/SkillsLogo/JavaScript.png';
// import ReactLogo from '/SkillsLogo/React.jpeg';
// import NetworkingLogo from '/SkillsLogo/Networking_Android.webp';
// import SecurityTestingLogo from '/SkillsLogo/Security Testing.jpg';
// import CloudSecurityLogo from '/SkillsLogo/Cloud Security.jpg';
// import CSharpLogo from '/SkillsLogo/Csharp.jpeg';
// import PHPLogo from '/SkillsLogo/PHP.png';
// import RubyLogo from '/SkillsLogo/Ruby.jpeg';
// import JavaLogo from '/SkillsLogo/Java.png';
// import PythonLogo from '/SkillsLogo/Python.png';
// import PostgreSQLLogo from '/SkillsLogo/PostgreSQL.png';
// import MySQLLogo from '/SkillsLogo/mysql.png';
// import MariaDBLogo from '/SkillsLogo/MariaDB.png';
// //mafi4 logo liha
// import MSSQLLogo from '/SkillsLogo/mysql.png';
// import OracleLogo from '/SkillsLogo/oracle.png';
// import RESTLogo from '/SkillsLogo/REST.png';
// //mafi4
// import JSONAPILogo from '/SkillsLogo/oracle.png';
// import SOAPLogo from '/SkillsLogo/SOAP.jpg';
// import GRPCLogo from '/SkillsLogo/gRPC.png';
// import GraphQLLogo from '/SkillsLogo/GraphQL.jpeg';
// import ASPNETCoreLogo from '/SkillsLogo/ASP.NET Core.png';
// import FlaskLogo from '/SkillsLogo/Flask.png';
// import HibernateLogo from '/SkillsLogo/Hibernate.png';
// import KoaJSLogo from '/SkillsLogo/Koa.js.jpeg';
// import LaravelLogo from '/SkillsLogo/laravel.png';
// import NestJSLogo from '/SkillsLogo/NestJS.png';
// import PhoenixLogo from '/SkillsLogo/Phoenix.jpeg';
// import RubyOnRailsLogo from '/SkillsLogo/Ruby on Rails.png';
// import NodeJSLogo from '/SkillsLogo/Node.js.png';
// //fih game physics
// import GameDevelopmentFCLogo from '/SkillsLogo/Node.js.png';
// import ReactNativeFCLogo from '/SkillsLogo/React.jpeg';
// import SecurityLogo from '/SkillsLogo/Security Testing.jpg';
// //testing android?
// import TestingLogo from '/SkillsLogo/Testing_Android.png';
// //Networking_Cyber Security.jpeg?
// import CyberSecurityLogo from '/SkillsLogo/Networking_Cyber Security.jpeg';
// import OperatingSystemsLogo from '/SkillsLogo/Operating Systems.jpeg';
// import MathLogo from '/SkillsLogo/Math.jpeg';
// import GamePhysicsLogo from '/SkillsLogo/Game Physics.jpeg';
// import ComputerGraphicsLogo from '/SkillsLogo/Computer Graphics.jpeg';
// import MachineLearningLogo from '/SkillsLogo/Machine Learning.jpeg';
// import AnimationLogo from '/SkillsLogo/Animation.png';
// import ExcelLogo from '/SkillsLogo/Excel.jpeg';
// import TableauLogo from '/SkillsLogo/Tableau.webp';
// import PowerBILogo from '/SkillsLogo/Power BI.jpeg';
// import SQLLogo from '/SkillsLogo/SQL.png';
// import DataCleaningLogo from '/SkillsLogo/Data Cleaning.png';
// import DataCollectionLogo from '/SkillsLogo/Data Collection.png';
// import DescriptiveAnalysisLogo from '/SkillsLogo/Descriptive Analysis.jpeg';
// import DataVisualizationLogo from '/SkillsLogo/Data Visualization.webp';
// import StatisticalAnalysisLogo from '/SkillsLogo/Statistical Analysis.png';
// import BigDataLogo from '/SkillsLogo/Big Data.webp';
// import KotlinLogo from '/SkillsLogo/Kotlin.png';
// import GitHubLogo from '/SkillsLogo/GitHub.jpeg';
// import ArchitectureAndDesignPatternsLogo from '/SkillsLogo/Architecture and Design Patterns.png';
// import GitLogo from '/SkillsLogo/Git.png';
// import MathematicsMLLogo from '/SkillsLogo/Mathematics for Machine Learning Specialization.png';
// import StatisticsMLLogo from '/SkillsLogo/statistics for Machine Learning Specialization.png';
// import EconometricsLogo from '/SkillsLogo/Econometrics.jpeg';
// import ExploratoryDataAnalysisLogo from '/SkillsLogo/exploratory data analysis.jpeg';
// import DeepLearningLogo from '/SkillsLogo/Deep learning.png';
// import MLOpsLogo from '/SkillsLogo/MLOps.png';
// //Security Testing.jpg
// import BasicsSoftwareTestingFCLogo from '/SkillsLogo/Security Testing.jpg';
// import SDLCModelsLogo from '/SkillsLogo/SDLC Models.jpeg';
// //mafi4 manual
// import ManualTestingLogo from '/SkillsLogo/SDLC Models.jpeg';
// import AutomatedTestingLogo from '/SkillsLogo/Automated Testing.png';
// import NonFunctionalTestingLogo from '/SkillsLogo/Non Functional Testing.jpeg';
// import EmailTestingLogo from '/SkillsLogo/Email Testing.jpeg';
// import HeadlessTestingLogo from '/SkillsLogo/Headless Testing.png';
// //mafi4 data science
// import DataScienceFCLogo from '/SkillsLogo/Headless Testing.png';
// import HTMLLogo from '/SkillsLogo/HTML.png';
// import VueLogo from '/SkillsLogo/vue.png';
// import AngularLogo from '/SkillsLogo/Angular.png';
// import CLogo from '/SkillsLogo/C.png';

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { httpGet } from "../axios/axiosUtils"; // Ensure the correct import path
import "../Styles/QuizPage.css";

// Import your quiz images
import CSSLogo from "../../images/SkillsLogo/CSS.jpeg";
import JavaScriptLogo from "../../images/SkillsLogo/JavaScript.png";
import ReactLogo from "../../images/SkillsLogo/React.jpeg";
import NetworkingLogo from "../../images/SkillsLogo/Networking_Android.webp";
import SecurityTestingLogo from "../../images/SkillsLogo/Security Testing.jpg";
import CloudSecurityLogo from "../../images/SkillsLogo/Cloud Security.jpg";
import CSharpLogo from "../../images/SkillsLogo/Csharp.jpeg";
import PHPLogo from "../../images/SkillsLogo/PHP.png";
import RubyLogo from "../../images/SkillsLogo/Ruby.jpeg";
import JavaLogo from "../../images/SkillsLogo/Java.png";
import PythonLogo from "../../images/SkillsLogo/Python.png";
import PostgreSQLLogo from "../../images/SkillsLogo/PostgreSQL.png";
import MySQLLogo from "../../images/SkillsLogo/mysql.png";
import MariaDBLogo from "../../images/SkillsLogo/MariaDB.png";
import MSSQLLogo from "../../images/SkillsLogo/mysql.png";
import OracleLogo from "../../images/SkillsLogo/oracle.png";
import RESTLogo from "../../images/SkillsLogo/REST.png";
import JSONAPILogo from "../../images/SkillsLogo/oracle.png";
import SOAPLogo from "../../images/SkillsLogo/SOAP.jpg";
import GRPCLogo from "../../images/SkillsLogo/gRPC.png";
import GraphQLLogo from "../../images/SkillsLogo/GraphQL.jpeg";
import ASPNETCoreLogo from "../../images/SkillsLogo/ASP.NET Core.png";
import FlaskLogo from "../../images/SkillsLogo/Flask.png";
import HibernateLogo from "../../images/SkillsLogo/Hibernate.png";
import KoaJSLogo from "../../images/SkillsLogo/Koa.js.jpeg";
import LaravelLogo from "../../images/SkillsLogo/laravel.png";
import NestJSLogo from "../../images/SkillsLogo/NestJS.png";
import PhoenixLogo from "../../images/SkillsLogo/Phoenix.jpeg";
import RubyOnRailsLogo from "../../images/SkillsLogo/Ruby on Rails.png";
import NodeJSLogo from "../../images/SkillsLogo/Node.js.png";
import GameDevelopmentFCLogo from "../../images/SkillsLogo/Node.js.png";
import ReactNativeFCLogo from "../../images/SkillsLogo/React.jpeg";
import SecurityLogo from "../../images/SkillsLogo/Security Testing.jpg";
import TestingLogo from "../../images/SkillsLogo/Testing_Android.png";
import CyberSecurityLogo from "../../images/SkillsLogo/Networking_Cyber Security.jpeg";
import OperatingSystemsLogo from "../../images/SkillsLogo/Operating Systems.jpeg";
import MathLogo from "../../images/SkillsLogo/Math.jpeg";
import GamePhysicsLogo from "../../images/SkillsLogo/Game Physics.jpeg";
import ComputerGraphicsLogo from "../../images/SkillsLogo/Computer Graphics.jpeg";
import MachineLearningLogo from "../../images/SkillsLogo/Machine Learning.jpeg";
import AnimationLogo from "../../images/SkillsLogo/Animation.png";
import ExcelLogo from "../../images/SkillsLogo/Excel.jpeg";
import TableauLogo from "../../images/SkillsLogo/Tableau.webp";
import PowerBILogo from "../../images/SkillsLogo/Power BI.jpeg";
import SQLLogo from "../../images/SkillsLogo/SQL.png";
import DataCleaningLogo from "../../images/SkillsLogo/Data Cleaning.png";
import DataCollectionLogo from "../../images/SkillsLogo/Data Collection.png";
import DescriptiveAnalysisLogo from "../../images/SkillsLogo/Descriptive Analysis.jpeg";
import DataVisualizationLogo from "../../images/SkillsLogo/Data Visualization.webp";
import StatisticalAnalysisLogo from "../../images/SkillsLogo/Statistical Analysis.png";
import BigDataLogo from "../../images/SkillsLogo/Big Data.webp";
import KotlinLogo from "../../images/SkillsLogo/Kotlin.png";
import GitHubLogo from "../../images/SkillsLogo/GitHub.jpeg";
import ArchitectureAndDesignPatternsLogo from "../../images/SkillsLogo/Architecture and Design Patterns.png";
import GitLogo from "../../images/SkillsLogo/Git.png";
import MathematicsMLLogo from "../../images/SkillsLogo/Mathematics for Machine Learning Specialization.png";
import StatisticsMLLogo from "../../images/SkillsLogo/statistics for Machine Learning Specialization.png";
import EconometricsLogo from "../../images/SkillsLogo/Econometrics.jpeg";
import ExploratoryDataAnalysisLogo from "../../images/SkillsLogo/exploratory data analysis.jpeg";
import DeepLearningLogo from "../../images/SkillsLogo/Deep learning.png";
import MLOpsLogo from "../../images/SkillsLogo/MLOps.png";
import BasicsSoftwareTestingFCLogo from "../../images/SkillsLogo/Security Testing.jpg";
import SDLCModelsLogo from "../../images/SkillsLogo/SDLC Models.jpeg";
import ManualTestingLogo from "../../images/SkillsLogo/SDLC Models.jpeg";
import AutomatedTestingLogo from "../../images/SkillsLogo/Automated Testing.png";
import NonFunctionalTestingLogo from "../../images/SkillsLogo/Non Functional Testing.jpeg";
import EmailTestingLogo from "../../images/SkillsLogo/Email Testing.jpeg";
import HeadlessTestingLogo from "../../images/SkillsLogo/Headless Testing.png";
import DataScienceFCLogo from "../../images/SkillsLogo/Headless Testing.png";
import HTMLLogo from "../../images/SkillsLogo/HTML.png";
import VueLogo from "../../images/SkillsLogo/vue.png";
import AngularLogo from "../../images/SkillsLogo/Angular.png";
import CLogo from "../../images/SkillsLogo/C.png";

// Mapping quiz names to their respective images
const quizImageMap = {
  css: CSSLogo,
  javascript: JavaScriptLogo,
  react: ReactLogo,
  networking: NetworkingLogo,
  "security testing": SecurityTestingLogo,
  "cloud security": CloudSecurityLogo,
  "c#": CSharpLogo,
  php: PHPLogo,
  ruby: RubyLogo,
  java: JavaLogo,
  python: PythonLogo,
  postgresql: PostgreSQLLogo,
  mysql: MySQLLogo,
  mariadb: MariaDBLogo,
  "ms sql": MSSQLLogo,
  oracle: OracleLogo,
  rest: RESTLogo,
  "json apis": JSONAPILogo,
  soap: SOAPLogo,
  grpc: GRPCLogo,
  graphql: GraphQLLogo,
  "asp.net core": ASPNETCoreLogo,
  flask: FlaskLogo,
  hibernate: HibernateLogo,
  "koa.js": KoaJSLogo,
  laravel: LaravelLogo,
  nestjs: NestJSLogo,
  phoenix: PhoenixLogo,
  "ruby on rails": RubyOnRailsLogo,
  nodejs: NodeJSLogo,
  "game development fc": GameDevelopmentFCLogo,
  "react native fc": ReactNativeFCLogo,
  security: SecurityLogo,
  testing: TestingLogo,
  "cyber security": CyberSecurityLogo,
  "operating systems": OperatingSystemsLogo,
  math: MathLogo,
  "game physics": GamePhysicsLogo,
  "computer graphics": ComputerGraphicsLogo,
  "machine learning": MachineLearningLogo,
  animation: AnimationLogo,
  excel: ExcelLogo,
  tableau: TableauLogo,
  "power bi": PowerBILogo,
  sql: SQLLogo,
  "data cleaning": DataCleaningLogo,
  "data collection": DataCollectionLogo,
  "descriptive analysis": DescriptiveAnalysisLogo,
  "data visualization": DataVisualizationLogo,
  "statistical analysis": StatisticalAnalysisLogo,
  "big data": BigDataLogo,
  kotlin: KotlinLogo,
  github: GitHubLogo,
  "architecture and design patterns": ArchitectureAndDesignPatternsLogo,
  git: GitLogo,
  "mathematics ml": MathematicsMLLogo,
  "statistics ml": StatisticsMLLogo,
  econometrics: EconometricsLogo,
  "exploratory data analysis": ExploratoryDataAnalysisLogo,
  "deep learning": DeepLearningLogo,
  mlops: MLOpsLogo,
  "basics software testing fc": BasicsSoftwareTestingFCLogo,
  "sdlc models": SDLCModelsLogo,
  "manual testing": ManualTestingLogo,
  "automated testing": AutomatedTestingLogo,
  "non functional testing": NonFunctionalTestingLogo,
  "email testing": EmailTestingLogo,
  "headless testing": HeadlessTestingLogo,
  "data science fc": DataScienceFCLogo,
  html: HTMLLogo,
  vue: VueLogo,
  angular: AngularLogo,
  c: CLogo,
};

const QuizPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await httpGet("Quiz/AllQuizzes");
        console.log("Quizzes fetched:", response); // Debug log
        if (response && response.Quizzes) {
          setQuizzes(response.Quizzes);
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getQuizImage = (quizName) => {
    return quizImageMap[quizName.toLowerCase()] || null; // Assuming you have a quizImageMap defined somewhere
  };

  return (
    <div className="quiz-page">
      <input
        type="text"
        placeholder="Search for quizzes..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="instruction-text">CHOOSE THE QUIZ TO START</div>
      <div className="quizzes-container">
        {filteredQuizzes.map((quiz) => (
          <Link key={quiz.id} to={`/quiz/${quiz.id}`} className="quiz-link">
            <img
              src={getQuizImage(quiz.name)}
              alt={`${quiz.name} logo`}
              className="quiz-logo"
            />
            <span>{quiz.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
