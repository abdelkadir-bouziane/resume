const Objectif = ({ objectifInfo, itemNum }) => {
  return (
    <article className="objectif">
      <h2>{itemNum}. {objectifInfo.field}</h2>
      <p>{objectifInfo.content}</p>
    </article>
  );
}

export default Objectif