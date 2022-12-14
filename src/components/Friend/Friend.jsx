

export default function Friend({url, name}) {
    return (
        <li className="item">
            <span className="status"></span>
            <img className="avatar" src={url} alt={`${name} avatar`} width="48" />
            <p className="name">{name}</p>
        </li>
    )
}
