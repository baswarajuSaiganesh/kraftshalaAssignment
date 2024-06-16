import ModeContext from '../../context/ModeContext'
import './index.css'

const WeatherDetailsCard = props => {
  const {details} = props
  const {name, humidity, temp, speed, dateTime, description} = details 
  return (
    <ModeContext.Consumer>
      {value => {
        const {activeMode} = value 
        const weatherDetailsCardClass = activeMode === 'light'? 'weather_details_card_light' : 'weather_details_card_dark'
        const paraClass = activeMode === 'light'? 'para_light' : 'para_dark'
        return(
          <div className={weatherDetailsCardClass}>
            <p className={paraClass}>{name}</p>
            <p className={paraClass}>Temp: {temp}</p>
            <p className={paraClass}>Weather Description: {description}</p>
            <p className={paraClass}>Humidity: {humidity}</p>
            <p className={paraClass}>Wind Speed: {speed}</p>
            <p className={paraClass}>Date Time: {dateTime.toLocaleString()}</p>
          </div>
        )
      }}
    </ModeContext.Consumer>
  )
}

export default WeatherDetailsCard