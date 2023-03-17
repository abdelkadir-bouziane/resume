function ProfessionalExperiences({ experiencesInfos }) {
  return (
    <article className="experiences">
      <h2>3. {experiencesInfos.field}</h2>
      {experiencesInfos.content.map((experienceItem, index) => (
        <div key={index} className="experience-item">
          <div className="head">
            <div className="experience-establishment">
              <h3>{experienceItem.experience}</h3>
              <h4>
                <a href={experienceItem.establishment.webSite} target="_blanc">
                  {experienceItem.establishment.name}
                </a>
              </h4>
            </div>

            <div className="date-address">
              <span>{`${experienceItem.period.from} - ${experienceItem.period.to}`}</span>
              <br />
              <span>{experienceItem.address}</span>
            </div>
          </div>

          <p>{experienceItem.description}</p>
        </div>
      ))}
    </article>
  );
}

export default ProfessionalExperiences;
