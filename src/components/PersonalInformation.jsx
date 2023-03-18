const PersonalInformation = ({ personalInformation, itemNum }) => {
  return (
    <article className="personalInformation">
      <h2>
        {itemNum}. {personalInformation.field}
      </h2>
      <ul>
        {personalInformation.content.map((item, index) => (
          <li key={index} className="skill-item">
            <b>{item.field} : </b>
            {item.value}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PersonalInformation;
