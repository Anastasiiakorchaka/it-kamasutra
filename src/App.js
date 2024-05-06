import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <Header/>
        <Navbar/>
        <div className='appWrapperContent'>
        <Routes>
          <Route path="/dialogs" element={<Dialogs dialogsData={props.dialogsData} messages={props.messages}/>} />
          <Route path="/messages" element={<Profile postData={props.postData}/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

}
export default App;
