import PropTypes from 'prop-types'; 
import {Card} from './Profile.styled'

const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
  return (<div classname="profile">
    
    <Card classname="description">
      <div>
      <img
      src={avatar}
      alt={username}
      width="136px"
        
        />
        </div>
    <p classname="name">{username}</p>
    <p classname="tag">{tag}</p>
    <p classname="location">{location}</p>
  </Card>

  <ul classname="stats">
    <li>
      <span classname="label">Followers</span>
      <span classname="quantity">{followers}</span>
    </li>
    <li>
      <span classname="label">Views</span>
    <span classname="quantity">{views}</span>
    </li>
    <li>
      <span classname="label">Likes</span>
      <span classname="quantity">{likes}</span>
    </li>
  </ul>
    </div>)
}


Profile.propTypes = {
  username:PropTypes.string,
  tag :PropTypes.string,
  location :PropTypes.string,
  avatar: PropTypes.string,
  
}

export default Profile;
