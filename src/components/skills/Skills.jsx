import React from "react";
import "./Skills.css";
import cssicon from "../../assets/cssicon.png";
import htmlicon from "../../assets/htmlicon.png";
import javasicon from "../../assets/javasicon.png";
import pythonicon from "../../assets/pythonicon.png";
import cppicon from "../../assets/cppicon.png";
import tableauicon from "../../assets/tableauicon.png";
import sqlicon from "../../assets/sqlicon.png";
import excelicon from "../../assets/excelicon.png";
import giticon from "../../assets/giticon.png";
import reacticon from "../../assets/reacticon.png";

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skills_h1">Skills</h1>
      <div className="skills_list">
        <div className="skills_list1">
          <img src={cssicon} alt="" />
          <img src={htmlicon} alt="" />
          <img src={javasicon} alt="" />
          <img src={pythonicon} alt="" />
          <img src={cppicon} alt="" />
        </div>
        <div className="skills_list2">
          <img src={sqlicon} alt="" />
          <img src={tableauicon} alt="" />
          <img src={excelicon} alt="" />
          <img src={reacticon} alt="" />
          <img src={giticon} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
