import { useState } from 'react'
import { apikey } from "./apikey"

function App() {  
  const [buttonText, setButtonText] = useState('Get Picture');
  const [pictureData, setPictureData] = useState("https://apod.nasa.gov/apod/image/2401/ngc1232b_vlt_960.jpg");
  const [year, setYear] = useState("2024");
  const [month, setMonth] = useState("01");
  const [day, setDay] = useState("01");
  const [description, setDescription] = useState("Fill in a date and press the button to get a picture and description.")

  const handleClick = () => {
    setButtonText('Loading...');
    setTimeout(() => {
        setButtonText('Get Picture');
    }, 3000); // Reverts back to 'Submit' after 2 seconds
  };

  const handleYearChange = (element) => {
    setYear(element.target.value);
  };

  const handleMonthChange = (element) => {
    setMonth(element.target.value);
  };

  const handleDayChange = (element) => {
    setDay(element.target.value);
  };

  async function changeData() {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key="+apikey+"&date="+year+"-"+month+"-"+day);
    const jresponse = await response.json()
    const url = jresponse.url
    const explanation = jresponse.explanation
    setPictureData(url);
    setDescription(explanation)
    console.log(url);
  };


  return (
    <main>
      <>
        <h1 id="title">NASA Astronomy Picture of the Day Explorer</h1>
      </>
      <p>This website utilizes NASA's APOD (Astronomy Picture of the Day) API. You can configure the year, month, and day to get different photos! The photo may take a second to load and some dates may not have a corresponding photo/description.</p>
      <div class="wrapper">
        <img class="example-photos" src="FalconMoon_Madow_960.jpg" alt="Image of rocket shooting to the moon" height={250} width={250}></img>
        <img class="example-photos" src="Image964_1024.jpg" alt="Image of a galaxy" height={250} width={250}></img>
        <img class="example-photos" src="SarArcNz_McDonald_960.jpg" alt="Image of an aurora" height={250} width={250}></img>
        <img class="example-photos" src="ZetaOph_spitzer_960.jpg" alt="Image of a galaxy" height={250} width={250}></img>
      </div >
      <div class="container">
        <div>
          <br></br>
            <form>
              <label for="Year">Year:  </label>
              <input type="text" id="Year" name="Year" onChange={handleYearChange}></input>
            </form>
          <br></br>
            <form> 
              <label for="Month">Month:  </label>
              <input type="text" id="Month" name="Month" onChange={handleMonthChange}></input>
            </form>
          <br></br>
            <form> 
              <label for="Day">Day:  </label>
              <input type="text" id="Day" name="Day" onChange={handleDayChange}></input>
            </form>
          <br></br>
          <button onClick={() => {
                      handleClick();
                      changeData();
                    }} class="button-35">{buttonText}</button>
          <br></br>
        </div>
        <div>
          <img class="result-photo" alt="Astronomy Photo of the Day" src={pictureData} height={250} width={250}></img>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
      <video autoPlay muted loop id="background-video">
        <source src="backgroundvid.mp4" type="video/mp4"></source>
      </video>
    </main>
  )
}

export default App
