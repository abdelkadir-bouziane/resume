function Education({ educationInfos, itemNum }) {
  return (
    <article className="education">
      <h2>
        {itemNum}. {educationInfos.field}
      </h2>
      {educationInfos.content.map((educationItem, index) => (
        <div key={index} className="education-item">
          <div className="head">
            {(educationItem.diploma || educationItem.establishment) && (
              <div className="diploma-establishment">
                {educationItem.diploma && <h3>{educationItem.diploma}</h3>}
                {educationItem.establishment && (
                  <h4>
                    {educationItem.establishment.webSite ? (
                      <a
                        href={educationItem.establishment.webSite}
                        target="_blanc"
                      >
                        {educationItem.establishment.name}
                      </a>
                    ) : (
                      <span>{educationItem.establishment.name}</span>
                    )}
                  </h4>
                )}
              </div>
            )}

            {(educationItem.period || educationItem.address) && (
              <div className="date-address">
                {educationItem.period && (
                  <span>{`${educationItem.period.from} - ${educationItem.period.to}`}</span>
                )}
                <br />
                {educationItem.address && <span>{educationItem.address}</span>}
              </div>
            )}
          </div>

          <div className="content">
            {educationItem.graduationMention && (
              <div className="mension">
                <strong>{educationItem.graduationMention.field} :</strong>{" "}
                <span>{educationItem.graduationMention.content}</span>
              </div>
            )}
            {educationItem.studiedModules && (
              <div className="modules">
                <strong>{educationItem.studiedModules.field} :</strong>
                <ul>
                  {educationItem.studiedModules.content.map((module, index) => (
                    <li key={index}>{module}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </article>
  );
}

export default Education;
