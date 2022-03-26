import { useSelector } from 'react-redux'
import Auth from './components/Auth';
import { DisplayCounter } from './components/DisplayCounter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  const isLoggedIn = useSelector((state)=> state.user.isLoggedIn)
  console.log(isLoggedIn)
// const [counter, setCounter] = useState(0)

// const HandleIncrement =()=>{
//   setCounter(counter +1)
// }
return (
  <div className="App">
      <header className="App-header">
    
  <Router>
  <Routes>
<Route path='/' exact element={!isLoggedIn ?  <Auth />  : <DisplayCounter /> }></Route>
</Routes>

</Router>
      </header>
   </div>
  
  );
}

export default App;
