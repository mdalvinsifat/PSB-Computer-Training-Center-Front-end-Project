// src/App.jsx
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";

// Components
import Home from "./Components/Home/Home";
import CreateContact from "./Components/Contact/CreateContact";
import CreateAdmission from "./Components/Admission/CreateAdmission";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import AboutPage from "./About/AboutPage";
import Course from "./Components/Course/Course";
import CourseDetails from "./Components/Course/CourseDetails";

// Admin Components
import UserDetelis from "./admin/User/UserDetelis";
import CourseAdminDashboard from "./admin/CourseAdmin/CourseAdminDashboard";
import UpdateCourseAdmin from "./admin/CourseAdmin/UpdateCourseAdmin";
import CreateAdmin from "./admin/CourseAdmin/CreateAdmin";
import GuestAdmin from "./admin/GuestAdmin/GuestAdmin";
import FetchAdminGuest from "./admin/GuestAdmin/FetchAdminGuest";
import OverView from "./admin/OverView/OverView";
import AdmissionAdmin from "./admin/Admission/AdmissionAdmin";

// Redux
import { loginSuccess } from "./Redux/authSlice";

// Protected Route
import PrivateRoute from "./Components/User/PrivateRoute";

function App() {
  const dispatch = useDispatch();

  // ✅ Keep Redux in sync with localStorage on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      dispatch(
        loginSuccess({
          user: JSON.parse(storedUser),
          token: storedToken,
        })
      );
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        {/* 🌐 Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<CreateContact />} />
        <Route path="/admission" element={<CreateAdmission />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetails />} />

        {/* 🔒 Protected Admin Routes */}
        <Route
          path="/admin/overview"
          element={
            <PrivateRoute roles={["admin"]}>
              <OverView />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/user"
          element={
            <PrivateRoute roles={["admin"]}>
              <UserDetelis />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <PrivateRoute roles={["admin"]}>
              <UserDetelis />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/courses"
          element={
            <PrivateRoute roles={["admin"]}>
              <CourseAdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/courses/create"
          element={
            <PrivateRoute roles={["admin"]}>
              <CreateAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/courses/update/:id"
          element={
            <PrivateRoute roles={["admin"]}>
              <UpdateCourseAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/guest"
          element={
            <PrivateRoute roles={["admin"]}>
              <GuestAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/create/guest"
          element={
            <PrivateRoute roles={["admin"]}>
              <FetchAdminGuest />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/admissions"
          element={
            <PrivateRoute roles={["admin"]}>
              <AdmissionAdmin />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
