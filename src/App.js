import HomeEN from './pages/Home/Home'
import HomeES from './pages/Home_ES/Home'
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">

        <Routes>
        <Route path="/portafolio"
          element={<Navigate to="/en" />}
        />
          <Route path='/en' element={<HomeEN/>}> </Route>
          <Route path='/es' element={<HomeES/>}> </Route>
        </Routes>

    </div>
  );
}

export default App;
