import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem'

import {FrList} from './FrendList.styled'
const FriendList = ({ friends }) => {
    return (
        <FrList>
            {friends.map(({ id, avatar, name, isOnline,}) => {
                return (
                    <FriendListItem 
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline} />
                        )
                    })
                }
        </FrList>
        )
    }   
FriendList.propTypes = {
    id: PropTypes.number.isRequired,
}
export default FriendList;