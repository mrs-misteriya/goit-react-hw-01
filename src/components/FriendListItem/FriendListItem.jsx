// import clsx from 'clsx';
import css from '../FriendListItem/FriendListItem.module.css';


export default function FriendListItem({friend: { avatar,
  name, isOnline } }) {
  return (<div className={css.card}>
    <img src={avatar} alt="Avatar" width="48" />
    <p>{name}</p>
    <p className={isOnline?css.isOnline:css.isOffline}>{isOnline?'isOnline':'isOffline'}</p>
  </div>)
}