import {useState} from "react";

import './App.css';

const App = () => {

  const [images, setImages] = useState(null)
  const [value, setValue] = useState(null)
  const surpriseOpt = [
    'a space monkey', 'a sea bat'
  ]

  const getImages = async() => {
    try {
      const options = {
        method : "POST",
        body: JSON.stringify({
            message : "Plop" 
          }),
        mode : 'cors',
        headers: {
          "Content-type" : "application/json"
        } 
      }
      const response = await fetch('http://localhost:8000/images', options)
      const data = await response.json()
      console.log(data)
      setImages(data)

    } catch (error) {
      console.error(error)
    }
  }
  console.log(value)
  return (
    <div className="app">
      <section className="search-section">
          <div className="container mx-auto">
            <div className="px-8 flex flex-col items-center pt-12">
              <p>Start with a detailed description <span className="text-green-800">Surprise me</span></p>
              <div className="input-container py-3">
                
                <input className="w-96 h-10 py-2 px-3 rounded-2xl mr-2 border focus-visible:outline-none focus-visible:border-green-600 focus-visible:border-opacity-70 outline-1 placeholder:font-light placeholder:tracking-wide placeholder:text-sm bg-gray-50" 
                       value={value}
                       onChange={e => setValue(e.target.value)}
                       type="text" 
                       placeholder="A velocirraptor astronaut..." 
                />

                <button className="generate-btn uppercase text-xs tracking-wide text-green-950" onClick={getImages} >Generate</button>
              </div>
            </div>
          </div>
      </section>

      <section className="image-results w-full flex flex-wrap justify-between">
            {images?.map((image, _index) => (
              <img  className="m-1 min-w-[250px] max-w-[32%] grow"
                    key={_index} src={image.url} alt={`Generated image of ${value}`}/>
            ))}
      </section>
    </div>
  );
}

export default App;
