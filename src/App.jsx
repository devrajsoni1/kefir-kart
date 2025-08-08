
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const transitions = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 }
};

const Header = () => (
  <header className="flex justify-around py-4 bg-black text-white text-xl font-bold">
    <Link to="/" className="hover:text-gray-400">Home</Link>
    <Link to="/product" className="hover:text-gray-400">Kefir Grains</Link>
    <Link to="/about" className="hover:text-gray-400">About</Link>
    <Link to="/contact" className="hover:text-gray-400">Contact</Link>
  </header>
);

const Home = () => (
  <motion.div {...transitions} className="p-6 text-center">
    <h1 className="text-4xl font-bold mb-4">Welcome to KefirKart</h1>
    <p className="text-lg">Your one-stop shop for healthy kefir grains delivered to your door.</p>
  </motion.div>
);

const Product = () => {
  const navigate = useNavigate();
  return (
    <motion.div {...transitions} className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Kefir Grains - ₹299</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Kefir_grains.jpg/640px-Kefir_grains.jpg" alt="Kefir Grains" className="mx-auto w-60 h-60 object-cover rounded" />
      <p className="mt-4">Buy fresh milk kefir grains. Easy to maintain and packed with probiotics!</p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800" onClick={() => navigate('/contact')}>Order Now</button>
    </motion.div>
  );
};

const About = () => (
  <motion.div {...transitions} className="p-6 text-center">
    <h1 className="text-3xl font-bold mb-4">About Us</h1>
    <p className="text-lg">We believe in natural wellness. Our kefir grains are fresh, potent, and hand-cultured.</p>
  </motion.div>
);

const Contact = () => (
  <motion.div {...transitions} className="p-6 text-center">
    <h1 className="text-3xl font-bold mb-4">Contact</h1>
    <p className="text-lg">To place an order, contact us at:</p>
    <p className="mt-2 text-md">📧 <a href="mailto:kefirkart@example.com" className="text-blue-600">kefirkart@example.com</a></p>
    <p className="mt-1 text-md">📱 +91 98765 43210</p>
    <p className="mt-2 text-sm text-gray-600">We accept UPI payments. Details will be shared upon contact.</p>
  </motion.div>
);

const App = () => (
  <Router>
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="text-center p-4 text-sm text-gray-600">© 2025 KefirKart. All rights reserved.</footer>
    </div>
  </Router>
);

export default App;
