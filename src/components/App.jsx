import userInfo from "../data/user.json";
import statisticData from '../data/data.json'
import friendsData from '../data/friends.json'

import Profile from './Profile/Profile';
import Statistics from "./Statistics/Statistics";
import SectionStat from "./SectionStat/SectionStat";
import FriendList from "./FriendList/FriendList";

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
      
      <SectionStat>
        <Statistics
        statistic={statisticData}
        title="Upload stats" />
      </SectionStat>

      <FriendList friends={friendsData} />
    </div>
  );
};
