 
import { RouterProvider } from 'react-router-dom';
import './App.css'; 
import routers from './Routes/routers';
 
 

function App() {
  return (
    <div className='m-auto'>
<RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
