import doge from './doge.png';

function App() {
  return (
    <div id="app">
      <div id="qr">
        <img id="doge" src={doge} alt="doge" />
      </div>
      <input className="text-input" type="text" />
    </div>
  );
}

export default App;
