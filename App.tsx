import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ChakraList from './components/ChakraList';
import ChakraDetail from './components/ChakraDetail';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-orange-100 selection:text-orange-900">
        <Header />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<ChakraList />} />
            <Route path="/chakra/:id" element={<ChakraDetail />} />
          </Routes>
        </main>
        
        <footer className="w-full py-8 text-center text-stone-400 text-xs border-t border-stone-200 mt-auto">
          <p>&copy; 2024 Chakra Harmony Guide. All rights reserved.</p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
