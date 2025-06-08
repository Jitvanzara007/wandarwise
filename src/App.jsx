import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import PlacePage from './pages/PlacePage';
import TripPlannerPage from './pages/TripPlannerPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotFound from './pages/NotFound';
import CountriesPage from './pages/CountriesPage';
import CostCalculatorPage from './pages/CostCalculatorPage';
import VisaCheckerPage from './pages/VisaCheckerPage';
import TripDetailsPage from './pages/TripDetailsPage';
import './App.css';
import { countries } from './data/countries.jsx';
import { auth } from './config/firebase';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProfilePage from './pages/ProfilePage';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  // Run validation
  useEffect(() => {
    // Check for duplicate IDs
    const ids = countries.map(country => country.id);
    const uniqueIds = new Set(ids);
    
    if (ids.length !== uniqueIds.size) {
      console.error("WARNING: Duplicate country IDs detected!");
      
      // Find the duplicates
      const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
      console.error("Duplicate IDs:", duplicates);
      
      // Log countries with duplicate IDs
      duplicates.forEach(dupId => {
        const dups = countries.filter(c => c.id === dupId);
        console.error(`Countries with ID ${dupId}:`, dups.map(d => d.name));
      });
    }
    
    // Validate that all IDs are unique and properly formatted
    countries.forEach(country => {
      console.log(`Country: ${country.name}, ID: ${country.id}, Type: ${typeof country.id}`);
    });
  }, []);
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col w-full">
        <Navbar />
        <main className="flex-grow pt-16 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/explore" element={<CountriesPage />} />
            <Route
              path="/trip-planner"
              element={
                <ProtectedRoute>
                  <TripPlannerPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="/countries" element={<CountriesPage />} />
            <Route path="/country/:id" element={<CountryPage />} />
            <Route path="/countries/:id" element={<CountryPage />} />
            <Route path="/place/:id" element={<PlacePage />} />
            <Route path="/cost" element={<CostCalculatorPage />} />
            <Route path="/visa" element={<VisaCheckerPage />} />
            <Route path="/trip-details" element={<TripDetailsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
