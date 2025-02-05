import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "../src/assets/styles/index.css";
// import "./assets/styles/index.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Provider } from "react-redux";
import App from "./App";
import "./assets/styles/bootstrap.custom.css";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
import reportWebVitals from "./reportWebVitals";
import store from "./store";

import MedicineScreen from "./Screens/Medicine/MedicineScreen";
import MedicineScreenDetails from "./Screens/Medicine/MedicineScreenDetails";

import DoctorScreen from "./Screens/Doctor/DoctorScreen";
import DoctorScreenDetails from "./Screens/Doctor/DoctorScreenDetails";

import BloodCreateScreen from "./Screens/Admin/BloodCreateScreen";
import RequestBloodListScreen from "./Screens/Admin/RequestBloodListScreen";
import BloodScreen from "./Screens/Blood/BloodScreen";
import BloodScreenDetails from "./Screens/Blood/BloodScreenDetails";
import RequestBlood from "./Screens/Blood/RequestBlood";
import RequestBloodScreen from "./Screens/Blood/RequestBloodScreen";

import AboutUs from "./Screens/AboutUs";
import Active from "./Screens/Active";
import ContactUS from "./Screens/ContactUS";
import Success from "./Screens/Success";

import CartScreen from "./Screens/Order And Cart/CartScreen";

import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";

import OrderScreen from "./Screens/Order And Cart/OrderScreen";
import PaymentScreen from "./Screens/Order And Cart/PaymentScreen";
import PlaceOrderScreen from "./Screens/Order And Cart/PlaceOrderScreen";
import ShippingScreen from "./Screens/Order And Cart/ShippingScreen";

import AppointmentAddress from "./Screens/Appointment/AppointmentAddress";
import AppointmentDate from "./Screens/Appointment/AppointmentDate";
import AppointmentScreen from "./Screens/Appointment/AppointmentScreen";
import PlaceAppointmentScreen from "./Screens/Appointment/PlaceAppointmentScreen";

import AdminProfile from "./Screens/Admin/AdminProfile";
import OrderListScreen from "./Screens/Admin/OrderListScreen";
import MyProfileScreen from "./Screens/MyProfileScreen";
//Medicine
import MedicineCreateScreen from "./Screens/Admin/MedicineCreateScreen";
import MedicineEditScreen from "./Screens/Admin/MedicineEditScreen";
import MedicineListScreen from "./Screens/Admin/MedicineListScreen";

import UserEditScreen from "./Screens/Admin/UserEditScreen";
import UserListScreen from "./Screens/Admin/UserListScreen";

import HomeScreen from "./Screens/HomeScreen";

import DoctorCreateScreen from "./Screens/Admin/DoctorCreateScreen";
import DoctorEditScreen from "./Screens/Admin/DoctorEditScreen";
import DoctorListScreen from "./Screens/Admin/DoctorListScreen";

import BloodEditScreen from "./Screens/Admin/BloodEditScreen";
import BloodListScreen from "./Screens/Admin/BloodListScreen";



import AppointmentListScreen from "./Screens/Admin/AppointmentListScreen";
import ForgetPassword from "./Screens/ForgetPassword";
import ResetPassword from "./Screens/ResetPassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/Medicine" element={<MedicineScreen />} />
      <Route path="/med/:id" element={<MedicineScreenDetails />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen setAuthenticated={true} />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/Doctor" element={<DoctorScreen />} />
      <Route path="/doctor/:id" element={<DoctorScreenDetails />} />
      <Route path="/Blood" element={<BloodScreen />} />
      <Route path="/Contactus" element={<ContactUS />} />
      <Route path="/Aboutus" element={<AboutUs />} />
      <Route path="/Blood/search/:keyword" element={<BloodScreen />} />
      <Route path="/blood/:id" element={<BloodScreenDetails />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/resetpassword/:id/:token" element={<ResetPassword />} />
      <Route path="/active/:token" element={<Active />} />
      //All Private Routes
      <Route path="" element={<PrivateRoute />}>
        <Route path="/success" element={<Success />} />
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/placeappointment" element={<PlaceAppointmentScreen />} />
        <Route path="/appointmentaddress" element={<AppointmentAddress />} />
        <Route path="/appointmentdate" element={<AppointmentDate />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/myprofile" element={<MyProfileScreen />} />
        <Route path="/appointment/:id" element={<AppointmentScreen />} />
        <Route path="/requestblood" element={<RequestBlood />} />
        <Route path="/request/:id" element={<RequestBloodScreen />} />
        
      </Route>
      //All Admin Routes
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orderlist" element={<OrderListScreen />} />
        <Route
          path="/admin/appointmentlist"
          element={<AppointmentListScreen />}
        />
        <Route path="/admin/requestlist" element={<RequestBloodListScreen />} />
        <Route path="/admin/medicinelist" element={<MedicineListScreen />} />
        <Route path="/admin/med/:id/edit" element={<MedicineEditScreen />} />
        <Route
          path="/admin/med/:id/create"
          element={<MedicineCreateScreen />}
        />
        <Route path="/admin/userlist" element={<UserListScreen />} />
        <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
        <Route path="/admin/doctorlist" element={<DoctorListScreen />} />
        <Route path="/admin/doctor/:id/edit" element={<DoctorEditScreen />} />
        <Route
          path="/admin/doctor/:id/create"
          element={<DoctorCreateScreen />}
        />
        <Route path="/admin/bloodlist" element={<BloodListScreen />} />
        <Route path="/admin/blood/:id/edit" element={<BloodEditScreen />} />
        <Route path="/admin/blood/:id/create" element={<BloodCreateScreen />} />
       
        <Route path="/admin/profile" element={<AdminProfile />} />
      </Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  // </React.StrictMode>
);
reportWebVitals();
