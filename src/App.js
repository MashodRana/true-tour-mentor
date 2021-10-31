// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import AboutUs from './pages/AboutUs';
import ConfirmTour from './pages/ConfirmTour/ConfirmTour';
import Home from './pages/Home';
import HotelBooking from './pages/HotelBooking';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import PhotoBook from './pages/PhotoBook';
import PlanDetail from './pages/PlanDetail/PlanDetail';
import AddPlan from './pages/TourPlans/AddPlan';
import ManageAllPlans from './pages/TourPlans/ManageAllPlans';
import MyPlans from './pages/TourPlans/MyPlans';

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
            <Route exact path='/plan-detail/:planId'>
             <PlanDetail></PlanDetail>
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
            <PrivateRoute exact path='/confirm-tour/:planId'>
              <ConfirmTour></ConfirmTour>
            </PrivateRoute>
            <PrivateRoute exact path='/my-plans'>
              <MyPlans></MyPlans>
            </PrivateRoute>
            <PrivateRoute exact path='/manage-all-plans'>
              <ManageAllPlans></ManageAllPlans>
            </PrivateRoute>
            <PrivateRoute exact path='/add-plan'>
              <AddPlan></AddPlan>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
