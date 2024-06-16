import {useState,} from 'react'
import WeatherDetailsCard from '../WeatherDetailsCard'
import ModeContext from '../../context/ModeContext'
import './index.css'


const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
}

const WeatherForecastCard = () => {
  const [userInput, setUserInput] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [valid, setValid] = useState(true)
  
  
    const onClickSearchButton = async () => {
      const apiKey = '8219e34e20cb331159eea7305b8ca3aa'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`
      const options = {
        method: 'GET'
      }
      const response = await fetch(url, options)
      if (response.ok){
        const data = await response.json()
        const weatherDetails = {
          id: data.sys.id,
          name: data.name,
          temp: data.main.temp,
          humidity: data.main.humidity,
          speed: data.wind.speed,
          description: data.weather[0].description,
          dateTime: new Date()
        }
        setWeatherData([...weatherData, weatherDetails])
        setUserInput('')
        setApiStatus(apiStatusConstants.success)
        setValid(true)
      }else{
        setValid(false)
      }
    }
    

  const onChangeUserInput = event => setUserInput(event.target.value)

  const renderInitialView = () => (
    <p>Enter a city name</p>
  )

  const renderSuccessView = () => (
    <>
    {weatherData.map(each => <WeatherDetailsCard key={each.name} details = {each} />)}
    </>
  )

  const renderWeatherDetailsView = () => {
    switch (apiStatus) {
      case apiStatusConstants.initial:
        return renderInitialView();
      case apiStatusConstants.success:
        return renderSuccessView();
      default:
        return null;
    }
  }
   
  

  
  return(
    <ModeContext.Consumer>
      {value => {
        const {activeMode} = value 
        const searchBarClass = activeMode === "light"? 'search_bar_light' : 'search_bar_dark'
        const searchBtnClass = activeMode === 'light'? 'search_btn_light' : 'search_btn_dark'
        return(
          <div className='container'>
          <input type = 'search' className={searchBarClass} placeholder = 'Enter a City Name' value={userInput} onChange={onChangeUserInput} /><br />
          {!valid ? <p className='err_msg'>*Enter a valid city name</p> : ''}
          <button type = 'button' className={searchBtnClass} onClick = {onClickSearchButton}>Search</button>
          {renderWeatherDetailsView()}
          </div>
        )
      }}
    </ModeContext.Consumer>
    )
}

export default WeatherForecastCard