import Navbar from "./component/Navbar";
import AllRoutes from "./router/AllRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;