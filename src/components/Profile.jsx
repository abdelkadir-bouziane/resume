function Profile({ profileInfo, itemNum }) {
  return (
    <article className="profile">
      <h2>{itemNum}. {profileInfo.field}</h2>
      <p>{profileInfo.content}</p>
    </article>
  );
}

export default Profile;
