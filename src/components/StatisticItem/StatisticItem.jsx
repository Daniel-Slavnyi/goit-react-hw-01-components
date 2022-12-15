import css from "./StatistickItem.module.css";

export default function StatisticItem({label, percentage}) {
    return (
    <li className={css.item}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
    </li> 
    )
}