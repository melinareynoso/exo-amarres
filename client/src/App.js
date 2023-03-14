import './App.css';
import { Route, Routes} from 'react-router-dom';
import ExoContainer from './Components/ExoContainer/ExoContainer.js';
import LoginForm from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Panel from './Components/Panel/Panel';

import { useEffect} from "react";
import { useDispatch} from 'react-redux'
import { getNumbers } from '../src/redux/actions';


function App() {

  const dispatch = useDispatch()  

  useEffect(() => {
    dispatch(getNumbers())},
     [dispatch]
  );
  
  return (
    <div className='App' >    
      <Routes>
        <Route path="/" element={<ExoContainer />} />
        <Route
            path="/panel"
            element={
           <PrivateRoute>
              <Panel />
          </PrivateRoute>}
          />
        <Route  exact path='/login' element={<LoginForm />} />
        <Route path="*" element={<ExoContainer />} />
      </Routes>
    </div>

  );
}

export default App;
