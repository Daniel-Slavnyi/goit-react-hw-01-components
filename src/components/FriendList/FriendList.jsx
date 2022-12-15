import PropTypes from 'prop-types';
import Friend from 'components/Friend/Friend';
import css from "./FriendList.module.css";


export default function FriendList({friends}) {
    return (
        <ul className={css.friendList}>
            {friends.map(({avatar, name, isOnline, id }) => (
                <Friend
                    key={id}
                    url={avatar}
                    name={name}
                    isOnline={isOnline} />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends:  PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired
}