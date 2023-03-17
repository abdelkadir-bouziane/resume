function Name({ firstName, familyName, photo }) {
  return (
    <article className="name">
      <img src={photo} alt="my_photo" />
      <h1>{`${firstName} ${familyName}`}</h1>
    </article>
  );
}

export default Name;
