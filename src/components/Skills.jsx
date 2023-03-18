function Skills({ skillsInfos, itemNum }) {
  return (
    <article className="skills">
      <h2>{itemNum}. {skillsInfos.field}</h2>
      <ul>
        {skillsInfos.content.map((skillsItem, index) => (
          <li key={index} className="skill-item">
            {skillsItem.title}
            {skillsItem.details.length !== 0 ? (
              <>
                {" : "}
                {skillsItem.details.map((skill, index) => (
                  <span key={index} className="skill">
                    {skill.certificateLink === "" ? (
                      <span>{skill.name}</span>
                    ) : (
                      <a href={skill.certificateLink} target="_blanc">
                        {skill.name}
                      </a>
                    )}
                  </span>
                ))}
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Skills;
