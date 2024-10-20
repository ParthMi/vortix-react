import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Products from './pages/products/Products';
import CoalActivatedCarbon from './pages/products/CoalActivatedCarbon';
import CoconutShellActivatedCarbon from './pages/products/CoconutShellActivatedCarbon';
import CoconutShellPelletsActivatedCarbon from './pages/products/CoconutShellPelletsActivatedCarbon';
import WoodActivatedCarbon from './pages/products/WoodActivatedCarbon';
import SubTypes from './pages/products/subtypes/SubTypes';
import Application from './pages/applications/Application';
import SingleApplication from './pages/applications/SingleApplication';
import Quality from './pages/quality/Quality';
import MainBlog from './pages/blog/MainBlog';
import BlogDetails from './pages/blog/BlogDetails';
import Contact from './pages/contact/Contact';
import ScrollToTop from './components/common/ScrollToTop';
import ScrollUp from './pages/home/ScrollUp';
import "./index.css";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useEffect } from 'react';
import TOS from './pages/tos/TOS';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';

function App() {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Duration of the animation in milliseconds
        once: true,     // Whether animation should happen only once
    });
}, []);
  return (
    <BrowserRouter>
      <ScrollUp />
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/Coal-Activated-Carbon" element={<CoalActivatedCarbon />} />
          <Route path="/products/Coconut-Shell-Activated-Carbon" element={<CoconutShellActivatedCarbon />} />
          <Route path="/products/Coconut-Shell-Pellets-Activated-Carbon" element={<CoconutShellPelletsActivatedCarbon />} />
          <Route path="/products/Wood-Activated-Carbon" element={<WoodActivatedCarbon />} />
          <Route path="/products/subtypes/:title" element={<SubTypes />} />
          <Route path="/applications" element={<Application />} />
          <Route path="/applications/:title" element={<SingleApplication />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/blog" element={<MainBlog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-of-service" element={<TOS />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;