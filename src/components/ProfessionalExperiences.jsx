function ProfessionalExperiences({ experiencesInfos, itemNum }) {
  return (
    <article className="experiences">
      <h2>
        {itemNum}. {experiencesInfos.field}
      </h2>
      {experiencesInfos.content.map((experienceItem, index) => (
        <div key={index} className="experience-item">
          <div className="head">
            <div className="experience-establishment">
              <h3>{experienceItem.experience}</h3>
              <h4>
                {experienceItem.establishment.webSite ? (
                  <a
                    href={experienceItem.establishment.webSite}
                    target="_blanc"
                  >
                    {experienceItem.establishment.name}
                  </a>
                ) : (
                  <span>{experienceItem.establishment.name}</span>
                )}
              </h4>
            </div>

            <div className="date-address">
              <span>{`${experienceItem.period.from} - ${experienceItem.period.to}`}</span>
              <br />
              <span>{experienceItem.address}</span>
            </div>
          </div>

          {experienceItem.description && <p>{experienceItem.description}</p>}
        </div>
      ))}
    </article>
  );
}

export default ProfessionalExperiences;
