function Certificates({ certificatesInfos, itemNum }) {
  return (
    <article className="certificates">
      <h2>{itemNum}. {certificatesInfos.field}</h2>
      {certificatesInfos.content.map((certificateItem, index) => (
        <div key={index} className="certificate-item">
          <div className="head">
            <div className="certificate-offeredBy">
              <h3>
                <a href={certificateItem.certificateLink} target="_blanc">
                  {certificateItem.title}
                </a>
              </h3>
              <h4>
                <a href={certificateItem.offeredBy.webSite} target="_blanc">
                  {certificateItem.offeredBy.name}
                </a>
              </h4>
            </div>

            <div className="date-address">
              <span>{certificateItem.date}</span>
            </div>
          </div>

          <p>{certificateItem.description}</p>
        </div>
      ))}
    </article>
  );
}

export default Certificates;
