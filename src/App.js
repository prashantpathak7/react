import './App.css';
import Navbar from './components/Navbar';
//import Navbar2 from './components/Navbar2';
//import TextForm2 from './components/TextForm2';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      {/* <Navbar2 title="TextCase" />
      <TextForm2 /> */}
      <Navbar title="WebApp" about="about us" />
      <div className="container my-3">
        <TextForm heading="Type your text here" />
      </div>
    </>
  );
}

export default App;
