import MyPostsContainer from './My Posts/Post/MyPostsContainer';
import ProfileInfo from './ProfileInfo';
import StoreContext from '../../StoreContext';
import { Provider } from 'react-redux';
import store from '../../redux/redux-store';

const Messages = (props) => {
  return(
      <div>
        <ProfileInfo/>
        <MyPostsContainer/>
      </div>
  )
}
export default Messages;