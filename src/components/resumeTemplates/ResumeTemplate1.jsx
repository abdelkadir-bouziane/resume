import React from "react";
import Name from "../Name";
import Contact from "../Contact";
import Profile from "../Profile";
import Education from "../Education";
import ProfessionalExperiences from "../ProfessionalExperiences";
import Certificates from "../Certificates";
import Skills from "../Skills";
import Projects from "../Projects";
import Languages from "../Languages";

const getPageMargins = () => {
  return `@page { margin: 2rem 0 !important; }`;
};

export const ResumeTemplate1 = React.forwardRef((props, ref) => {
  return (
    <main>
      <div ref={ref} className="main-content">
        <style>{getPageMargins()}</style>
        <Name
          firstName={props.informations.firstName}
          familyName={props.informations.familyName}
          photo={props.photo}
        />
        <Contact contactInfos={props.informations.contact} />
        <Profile profileInfo={props.informations.profile} />
        <Education educationInfos={props.informations.education} />
        <ProfessionalExperiences
          experiencesInfos={props.informations.professionalExperiences}
        />
        <Certificates certificatesInfos={props.informations.certificates} />
        <Skills skillsInfos={props.informations.skills} />
        <Projects projectsInfos={props.informations.projects} />
        <Languages languagesInfos={props.informations.languages} />
      </div>
    </main>
  );
});
