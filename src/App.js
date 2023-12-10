import './App.css';
import Auth from './Components/Auth'
import Home from './View/Home';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (

  <div className="App">
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/auth' element={<Auth/>}/>

</Routes>
    </div>
  );
}

export default App;
