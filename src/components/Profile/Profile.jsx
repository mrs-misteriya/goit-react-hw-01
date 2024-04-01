import css from "../Profile/Profile.module.css";


export default function Profile({ name, tag, location, image, stats }) {
    return (
  <div className={css.container}>
  <div className={css.card}>
    <img className={css.icon}
      src={image}
      alt="User avatar"
      width="200"
    />
    <p className={css.name}>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.list}>
      <span>Followers</span>
      <span className={css.amount}>{stats.followers}</span>
    </li>
    <li className={css.list}>
      <span>Views</span>
      <span className={css.amount}>{stats.views}</span>
    </li>
    <li className={css.list}>
      <span>Likes</span>
      <span className={css.amount}>{stats.likes}</span>
    </li>
  </ul>
  </div>
)}
