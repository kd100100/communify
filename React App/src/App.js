import { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"
import Home from './Home.js'
import Login from './Login.js'
import Register from './Register.js'
import Welcome from './Welcome.js'
import Cleanliness from './Cleanliness.js';
import Transport from './Transport.js'
import Header from './Header.js'
import Canteen from './Canteen.js'
import Cart from './Cart.js'
import LostAdd from './LostAdd.js'
import FoundAdd from './FoundAdd.js'
import Found from './Found.js'
import Lost from './Lost.js'
import OrderSuccess from './OrderSuccess'
import Parking from './Parking.js'
import Library from './Library.js'
import Weather from './Weather.js'
import TransTrackR1 from './TransTrackR1.js'
import TransTrackR2 from './TransTrackR2.js'
import FoodPred from './FoodPred.js'
import TransTrackR3 from './TransTrackR3';
import Maintainence from './Maintainence';

function App() {

  const[{}, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser){
        dispatch({
            type: 'SET_USER',
            user: authUser
        })
        console.log('yes')
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
        console.log('no')
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
      <Switch>
        <Route exact path='/'>
          <Header />
          <Welcome />
        </Route>
     </Switch>
      <Switch>
        <Route exact path='/homepage'>
          <Header /> 
          <Home />
          {/* <Footer /> */}
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/login'>
          <Header />
          <Login />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/register'>
          <Header />
          <Register />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/cleanliness'>
          <Header />
          <Cleanliness />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/transport'>
          <Header />
          <Transport />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/canteen'>
          <Header />
          <Canteen />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/cart'>
          <Header />
          <Cart />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/ordersuccess'>
          <Header />
          <OrderSuccess />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/addlost'>
          <Header />
          <LostAdd />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/addfound'>
          <Header />
          <FoundAdd />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/found'>
          <Header />
          <Found />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/lost'>
          <Header />
          <Lost />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/parking'>
          <Header />
          <Parking />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/library'>
          <Header />
          <Library />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/weather'>
          <Header />
          <Weather />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/route1'>
          <Header />
          <TransTrackR1 />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/route2'>
          <Header />
          <TransTrackR2 />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/pred'>
          <Header />
          <FoodPred />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/route3'>
          <Header />
          <TransTrackR3 />
        </Route>
     </Switch>
     <Switch>
        <Route exact path='/Maintainreports'>
          <Header />
          <Maintainence />
        </Route>
     </Switch>
      </div>
    </Router>
  );
}

export default App;
