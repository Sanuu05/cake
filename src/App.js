import React from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import Admin from './components/Admin'
import TopProduct from './components/Admin/TopProduct'
import Query from './components/Admin/Query'
import Login from './components/Adminlogin/Login'
import Signup from './components/Adminlogin/Signup'
import Home from './components/Home'
import Cart from './components/Cart'
import Razopay from './components/Razopay'
import Track from './components/Track'
import Orderpage from './components/Orderpage'
import Order from './components/Admin/Order'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home/>
        </Route>
        <Route exact path="/admin">
          <Admin/>
        </Route>
        <Route exact path="/top">
          <TopProduct/>
        </Route>
        <Route exact path="/query">
          <Query/>
        </Route>
        <Route path="/signup">
          <Navbar />
          <Signup />
          {/* <Footer/> */}
        </Route>
        <Route exact path="/login">
          <Navbar />
          <Login />
          {/* <Footer/> */}
        </Route>
        <Route exact path="/cart">
          <Navbar />
          <Cart />
          {/* <Footer/> */}
        </Route>
        <Route exact path="/razo">
          <Navbar />
          <Razopay/>
          {/* <Footer/> */}
        </Route>
        <Route exact path="/track/:id">
          <Navbar />
          <Track/>
          {/* <Footer/> */}
        </Route>
        <Route exact path="/myorder">
          <Navbar />
          <Orderpage/>
          {/* <Footer/> */}
        </Route>
        <Route exact path="/admin/order">
          <Navbar />
          <Order/>
          {/* <Footer/> */}
        </Route>
      </Switch>

    </div>
  );
}

export default App;
