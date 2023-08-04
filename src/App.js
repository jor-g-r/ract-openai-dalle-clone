import './App.css';

const App = () => {
  const surpriseOpt = [
    'a space monkey', 'a sea bat'
  ];
  return (
    <div className="app">
      <section className="search-section">
          <div className="container">
            <div className="">
              <p>Start with a detailed description <span className="text-green-800">Surprise me</span></p>
              <div className="input-container">
                <input type="text" placeholder="a multicolor butterfly..." /> 
                <button>Generate</button>
              </div>
            </div>
          </div>
      </section>

      <section className="image-results">

      </section>
    </div>
  );
}

export default App;
