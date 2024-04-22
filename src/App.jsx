import { useState } from 'react'

function App() {

  const [buttonText, setButtonText] = useState('Get Pictures');
  const [heroData, setHeroData] = useState("https://api.nasa.gov/planetary/earth/imagery?lon=-90.33&lat=30.78&date=2018-01-01&dim=0.15&api_key=sFbPQNVBu4cflCZxqlKGxC6ZWiakIWhqiMXNOatX");
  const apiKey = "sFbPQNVBu4cflCZxqlKGxC6ZWiakIWhqiMXNOatX"

  const handleClick = () => {
    setButtonText('Loading...');

    setTimeout(() => {
        setButtonText('Get Pictures');
    }, 2000); // Reverts back to 'Submit' after 2 seconds
  };

  const changeData = () => {
    const response =  fetch("https://api.nasa.gov/planetary/earth/imagery?lon=-90.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=sFbPQNVBu4cflCZxqlKGxC6ZWiakIWhqiMXNOatX");
    const movies = response.json();
    setHeroData(movies);
  };

  return (
    <main>
      <>
        <h1 id="title">Satellite Picture Generator</h1>
      </>
      <p>This webesite utilizes NASA's open Earth API. The API is powered by Google Earth Engine API and returns Landsat 8 imagery. You can configure the longitude and latitude values of the photo, as well as the date. Note that 
        the returned picture may not match the supplied date exactly. Instead, the image closest to the supplied date is returned. </p>
        <p class="center">Example Images:</p>
      <div class="wrapper">
        <img class="example-photos" src="src\assets\ex1.png" alt="Satellite Picture" height={250} width={250}></img>
        <img class="example-photos" src="src\assets\ex2.png" alt="Satellite Picture" height={250} width={250}></img>
        <img class="example-photos" src="src\assets\ex3.png" alt="Satellite Picture" height={250} width={250}></img>
        <img class="example-photos" src="src\assets\ex4.png" alt="Satellite Picture" height={250} width={250}></img>
      </div>
        <form>
          <label for="longitude">Longitude:  </label>
          <input type="text" id="longitude" name="longitude"></input>
        </form>
        <form> 
          <label for="Latitude">Latitude:  </label>
          <input type="text" id="Latitude" name="Latitude"></input>
        </form>
      <button onClick={() => {
                  handleClick();
                  changeData();
                }} class="button-35">{buttonText}</button>
      <video autoPlay muted loop id="background-video">
        <source src="src\assets\backgroundvid.mp4" type="video/mp4"></source>
      </video>
    </main>
  )
}

export default App
