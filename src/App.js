import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="WebApp" about="about us" />
      <div className="container my-3">
        <TextForm heading="Type your text here" />
      </div>
    </>
  );
}

export default App;
