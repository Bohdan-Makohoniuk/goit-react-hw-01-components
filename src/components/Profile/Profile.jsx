import PropTypes from 'prop-types'; 
// styled
import {Card, Avatar, UserName, UserTeg, UserLocation, StatusList, List, LabelName } from './Profile.styled'
// =================================================================================
const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
  return <Card>
      <Avatar
      src={avatar}
      alt={username}
        />  
    <UserName>{username}</UserName>
    <UserTeg>{tag}</UserTeg>
    <UserLocation>{location}</UserLocation>

  <StatusList>
    <List>
      <LabelName>Followers</LabelName>
      <span>{followers}</span>
    </List>
    <List>
      <LabelName>Views</LabelName>
    <span>{views}</span>
    </List>
    <List>
      <LabelName>Likes</LabelName>
      <span>{likes}</span>
    </List>
      </StatusList>
    </Card>
}

// Що очікує отримати props
Profile.propTypes = {
  username:PropTypes.string,
  tag :PropTypes.string,
  location :PropTypes.string,
  avatar: PropTypes.string,
  
}
export default Profile;