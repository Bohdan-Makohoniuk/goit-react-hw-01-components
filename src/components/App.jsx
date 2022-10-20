import  Profile from './Profile/Profile'
import  Statistics from './Statistics/Statistics'
import user from './data/user.json'
import data from './data/data.json'

export function App () {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      stats={user.stats}
      followers={user.stats.followers}
      views={user.stats.followers}
        likes={user.stats.likes} />
      
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      </div>
      ); 
}



 
      


