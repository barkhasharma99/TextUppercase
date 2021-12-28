import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
     
     
      <Navbar tittle='TextUtils' />
    <div className='container my-3' >
        <Textarea heading='Enter to Text to analyze '/>
    </div>
    </>
  );
}

export default App;
