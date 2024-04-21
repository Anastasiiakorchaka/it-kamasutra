import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <Header/>
        <Navbar/>
        <div className='appWrapperContent'>
        <Routes>
          <Route path="/profile" element={<Dialogs/>} />
          <Route path="/messages" element={<Profile/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

}
export default App;
