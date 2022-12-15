import PropTypes from 'prop-types';
import StatisticItem from '../StatisticItem/StatisticItem';
import css from './Statistics.module.css';

export default function Statistics({title, statistic }) {
    return (
        <>
            <h2 className={css.title}>{title}</h2>

            <ul className={css.statList}>
                {statistic.map(({label, percentage, id}) => (
                    <StatisticItem
                        key={id}
                        label={label}
                        percentage={percentage}
                    />
                ))}
            </ul>
        </>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    statistic: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired
}

