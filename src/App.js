import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';

function App() {
  return (
    <div style = {{backgroundColor: '#0f0f0f', minHeight: '100vh'}}>
      <Navbar />
      <Hero />
  </div>
  );
}

export default App;
