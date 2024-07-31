import './App.css';
//import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NewsContainer from './components/News/NewsContainer';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import StoreContext from './StoreContext';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

function App(props) {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <StoreContext.Provider value={store}>
        <div className='appWrapper'>
          <Header/>
          <Navbar/>
          <div className='appWrapperContent'>
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer/>} /> 
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/news" element={<NewsContainer/>}/>
          </Routes>
          </div>
        </div>
      </StoreContext.Provider>
    </Provider>
    </BrowserRouter>
    );

}
export default App;
