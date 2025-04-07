import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './portpolio/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
export default App;
 