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
                <input className="w-96 h-10 p-2 rounded-md mr-2 border focus-visible:border-gray-500 focus-visible:border-none" type="text" placeholder="a multicolor butterfly..." /> 
                <button className="generate-btn uppercase text-xs">Generate</button>
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
