import { useState } from 'react'

function App() {

  const [buttonText, setButtonText] = useState('Find Heroes');
  const [heroData, setHeroData] = useState(null);

  const handleClick = () => {
    setButtonText('Loading...');

    setTimeout(() => {
        setButtonText('Submit');
    }, 2000); // Reverts back to 'Submit' after 2 seconds
  };

  const changeData = () => {
    setHeroData('Loading...');
  };

  return (
    <main>
      <div>
        <p id="title">My Website</p>
      </div>
      <button onClick={() => {
                  handleClick();
                  changeData();
                }} class="button-35">{buttonText}</button>
      <p>{heroData}</p>
    </main>
  )
}

export default App
