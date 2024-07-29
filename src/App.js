import './App.css';
//import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NewsContainer from './components/News/NewsContainer';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route, Routes} from 'react-router-dom';



function App(props) {
  console.log('App', props.store)
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <Header/>
        <Navbar/>
        <div className='appWrapperContent'>
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer store={props.store}/>} />
          <Route path="/messages" element={<Messages store={props.store} />}/>
          <Route path="/news" element={<NewsContainer store={props.store}/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

}
export default App;
