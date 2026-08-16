import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import VisaServicesPage from './pages/VisaServicesPage';
import VisaCountryPage from './pages/VisaCountryPage';
import VisaApplicationPage from './pages/VisaApplicationPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="visa" element={<VisaServicesPage />} />
          <Route path="visa/:countryId" element={<VisaCountryPage />} />
          <Route path="visa/application" element={<VisaApplicationPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
