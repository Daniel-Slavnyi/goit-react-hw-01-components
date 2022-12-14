import PropTypes from 'prop-types';


export default function FriendList({friends}) {
    return (
        <ul className="friend-list">
  
        </ul>
    )
}

FriendList.propTypes = {
    friends:  PropTypes.arrayOf(PropTypes.number).isRequired
}