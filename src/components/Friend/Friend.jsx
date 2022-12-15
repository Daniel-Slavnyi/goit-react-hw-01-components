import css from './Friend.module.css';

export default function Friend({url, name}) {
    return (
        <li className={css.item}>
            <span className={css.status}></span>
            <img className="avatar" src={url} alt={`${name} avatar`} width="48" />
            <p className="name">{name}</p>
        </li>
    )
}
