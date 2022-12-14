import PropTypes from 'prop-types';
import Transaction from 'components/Transaction/Transaction';

export default function TransactionHistory({transactions}) {
    return (
        <table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transactions.map(({id, type, amount, currency}) => (
                <Transaction
                    key={id}
                    type={type}
                    amount={amount}
                    currency={currency} />
            ))}
        </tbody>
    </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  })).isRequired
}