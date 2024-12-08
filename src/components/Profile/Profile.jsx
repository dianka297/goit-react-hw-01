import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profileCard}>
      <div className={css.profileInfo}>
        <img src={image} alt="User avatar" className={css.userAvatarImg} />
        <p className={css.title}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.itemText}>Followers</span>
          <span className={css.textNumbers}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemText}>Views</span>
          <span className={css.textNumbers}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemText}>Likes</span>
          <span className={css.textNumbers}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}