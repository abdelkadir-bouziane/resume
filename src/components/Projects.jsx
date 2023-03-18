function Projects({ projectsInfos, itemNum }) {
  return (
    <article className="projects">
      <h2>{itemNum}. {projectsInfos.field}</h2>
      {projectsInfos.content.map((projectItem, index) => (
        <div key={index} className="project-item">
          <div className="head">
            <div className="project-title">
              <h3>
                {projectItem.link === "" ? (
                  projectItem.title
                ) : (
                  <a href={projectItem.link} target="_blanc">
                    {projectItem.title}
                  </a>
                )}
              </h3>
            </div>
            <div className="date-address">
              <span>{projectItem.date}</span>
            </div>
          </div>
          <div className="content">
            <p>{projectItem.description}</p>
            {projectItem.tools.map((tool, index) => (
              <span key={index} className="tool">
                {tool.certificateLink === "" ? (
                  <span>{tool.name}</span>
                ) : (
                  <a href={tool.certificateLink} target="_blanc">
                    {tool.name}
                  </a>
                )}
              </span>
            ))}
          </div>
        </div>
      ))}
    </article>
  );
}

export default Projects;
