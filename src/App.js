
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <RouterProvider router={Routes}/>
  );
}

export default App;
