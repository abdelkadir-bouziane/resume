import React from "react";
import Name from "../Name";
import Contact from "../Contact";
import Objectif from "../Objectif";
import Education from "../Education";
import ProfessionalExperiences from "../ProfessionalExperiences";
import Skills from "../Skills";
import PersonalInformation from "../PersonalInformation";
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

        <Objectif objectifInfo={props.informations.objectif} itemNum="1" />
        <Education educationInfos={props.informations.education} itemNum="2" />
        <ProfessionalExperiences
          experiencesInfos={props.informations.professionalExperiences}
          itemNum="3"
        />
        <Skills skillsInfos={props.informations.skills} itemNum="4" />
        <Languages languagesInfos={props.informations.languages} itemNum="5" />
        <PersonalInformation
          personalInformation={props.informations.personalInformation}
          itemNum="6"
        />
      </div>
    </main>
  );
});
