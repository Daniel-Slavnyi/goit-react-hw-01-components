import PropTypes from 'prop-types';
import css from './StatistickItem.module.css';
import makeColor from '../../utils/makeColor';

export default function StatisticItem({ label, percentage }) {
  return (
    <li className={css.item} style={{ backgroundColor: makeColor() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
