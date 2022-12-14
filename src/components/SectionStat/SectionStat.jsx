import PropTypes from 'prop-types';

export default function SectionStat({ children }) {
    return (
        <section>
            {children}
        </section>
    )
}

SectionStat.propTypes = {
    children: PropTypes.node
}