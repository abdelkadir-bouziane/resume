function Profile({ profileInfo }) {
  return (
    <article className="profile">
      <h2>1. {profileInfo.field}</h2>
      <p>{profileInfo.content}</p>
    </article>
  );
}

export default Profile;
