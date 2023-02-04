import './App.css';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar'
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#fafafa",
    color: "#000000",
    minHeight: "100vh",
  },
}));


function App() {
  const classes = useStyles()

  return (
    <BrowserRouter>
    <div className={classes.App}>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>} exact/>
      <Route path='/coins/:id' element={<CoinPage/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
