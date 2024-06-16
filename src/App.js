import { useState } from 'react';
import WeatherForecastCard from './components/WeatherForecastCard'
import Header from './components/Header';
import ModeContext from './context/ModeContext';
import './App.css';

const App = () =>{
  const [activeMode, setActiveMode] = useState('light')
  const changeMode = data => {
    if (data === false){
      setActiveMode('light')
    }else{
      setActiveMode('dark')
    }
  }
  const containerClass = activeMode === 'light'? 'container_light' : 'container_dark'
  return(
    <ModeContext.Provider 
    value={{activeMode, changeMode: changeMode }}
    >
    <div className={containerClass}>
      <Header />
      <WeatherForecastCard />
    </div>
    </ModeContext.Provider>
)
}


export default App;
