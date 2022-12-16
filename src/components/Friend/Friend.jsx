import css from './Friend.module.css';
import PropTypes from 'prop-types';

export default function Friend({ url, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${!isOnline && css.statusOfline}`}></span>
      <img className="avatar" src={url} alt={`${name} avatar`} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

Friend.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
