// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import HotelBooking from './pages/HotelBooking';
import Login from './pages/Login/Login';
import PhotoBook from './pages/PhotoBook';
import TourPlan from './pages/TourPlan/TourPlan';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/tour-plan'>
              <TourPlan></TourPlan>
            </Route>
            <PrivateRoute exact path='/hotel-booking'>
              <HotelBooking></HotelBooking>
            </PrivateRoute>
            <Route exact path='/photo-book'>
              <PhotoBook></PhotoBook>
            </Route>
            <Route exact path='/about-us'>
              <AboutUs></AboutUs>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
