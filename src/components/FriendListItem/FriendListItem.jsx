import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const statusClsx = clsx(css.status, isOnline ? css.isActive : css.isOffline);
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={statusClsx}>{isOnline ? 'Online' : 'Offline'}</p>
    </>
  );
}