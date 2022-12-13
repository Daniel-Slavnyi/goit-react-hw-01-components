import userInfo from "../user-info/user.json";
import Profile from './Profile/Profile';

export const App = () => {
  return (
    <div>
      <Profile
        key={userInfo.tag}
        name={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats} />
    </div>
  );
};
