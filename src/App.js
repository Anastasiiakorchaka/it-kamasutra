import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route, Routes} from 'react-router-dom';



function App(props) {
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <Header/>
        <Navbar/>
        <div className='appWrapperContent'>
        <Routes>
          <Route path="/dialogs" element={<Dialogs dispatch={props.dispatch} dialogsData={props.state.profile} />} />
          <Route path="/messages" element={<Messages dispatch={props.dispatch}  postData={props.state.messagesPage}  />}/>
          <Route path="/news" element={<News dispatch={props.dispatch} newData={props.state.newPage}/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

}
export default App;
