function Languages({ languagesInfos, itemNum }) {
  return (
    <article className="languages">
      <h2>{itemNum}. {languagesInfos.field}</h2>
      <div className="languages-content">
        {languagesInfos.content.map((language, index) => (
          <span key={index} className="language">
            {language.certificateLink === "" ? (
              <span>{language.language}</span>
            ) : (
              <a href={language.certificateLink} target="_blanc">
                {language.language}
              </a>
            )}
          </span>
        ))}
      </div>
    </article>
  );
}

export default Languages;
