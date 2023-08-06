import './App.css';

const App = () => {
  const surpriseOpt = [
    'a space monkey', 'a sea bat'
  ];
  return (
    <div className="app">
      <section className="search-section">
          <div className="container mx-auto">
            <div className="px-8 flex flex-col items-center pt-12">
              <p>Start with a detailed description <span className="text-green-800">Surprise me</span></p>
              <div className="input-container py-3">
                <input className="w-96 h-10 py-2 px-3 rounded-2xl mr-2 border focus-visible:outline-none focus-visible:border-green-600 focus-visible:border-opacity-70 outline-1 placeholder:font-light placeholder:tracking-wide placeholder:text-sm bg-gray-50" type="text" placeholder="A multicolor butterfly..." /> 
                <button className="generate-btn uppercase text-xs tracking-wide text-green-950">Generate</button>
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
