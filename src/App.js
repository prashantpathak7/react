import './App.css';
let name = 'User';
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}!</h1>
        <p> Basic setup and Project Initialization</p>
      </div>
    </>
  );
}

export default App;
