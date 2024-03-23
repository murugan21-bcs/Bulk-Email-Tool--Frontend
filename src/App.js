import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'; // Import your CSS file

// Import additional components here (e.g., Compose, Emailverify, etc.)
import Compose from "./Components/Compose/Compose";
import Emailverify from "./Components/Emailverify/Emailverify";
import GraphComp from "./Components/Graph/GraphComp";
import Home from "./Components/Home/Home";
import Info from "./Components/Log/Info/Info";
import Log from "./Components/Log/log";
import Login from "./Components/Login/Login";
import NavComp from "./Components/Navbar/Navbar";
import PasswordRes from "./Components/Password-Reset/PasswordRes";
import ProtectedRoute from "./Components/ProtectedRoute";
import ResetPassComp from "./Components/ResetPassComp/ResetPassComp";
import Settings from "./Components/Settings/Settings";
import Signup from "./Components/Signup/Signup";

function App() {
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);
 const [isLoading, setIsLoading] = useState(false);

 const navigate = useNavigate();

 useEffect(() => {
 if (localStorage.getItem("x-Auth-token")) {
 navigate("/");
 }
 }, []);

 useEffect(() => {
 const fetchData = async () => {
 setIsLoading(true);
 setError(null); // Clear any previous errors

 try {
 const response = await fetch('https://api.example.com/data');
 if (!response.ok) {
 throw new Error('Failed to fetch data');
 }
 const fetchedData = await response.json();
 setData(fetchedData);
 } catch (error) {
 setError(error);
 } finally {
 setIsLoading(false);
 }
 };

 fetchData();
 }, []); // Run once on component mount

 // ... rest of your component code

 return (
 <div className="App">
 <NavComp />
 <Routes>
 <Route path="/" element={<ProtectedRoute><Home data={data} isLoading={isLoading} error={error} /></ProtectedRoute>} />
 <Route path="/compose" element={<ProtectedRoute><Compose /></ProtectedRoute>} />
 <Route path="/graph" element={<ProtectedRoute><GraphComp /></ProtectedRoute>} />
 <Route path="/log/*" element={<ProtectedRoute><Log /></ProtectedRoute>} />
 <Route path="/login/info" element={<ProtectedRoute><Info /></ProtectedRoute>} />
 <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
 <Route path="/login" element={<Login />} />
 <Route path="/password-reset" element={<PasswordRes />} />
 <Route path="/signup" element={<Signup />} />
 <Route
 path="/pas-reset-completion/:string"
 element={<ResetPassComp />}
 />
 <Route path="/emailverify/:string" element={<Emailverify />} />
 </Routes>
 </div>
 );
}

export default App;
