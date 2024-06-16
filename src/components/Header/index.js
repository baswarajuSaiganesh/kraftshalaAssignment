import { useState } from "react"
import ModeContext from "../../context/ModeContext"
import './index.css'

const Header = () =>{
  const  [darkMode, setDarkMode] = useState(false)
  return(
  <ModeContext.Consumer>
    {value => { 
      const {activeMode,changeMode} = value 
      const onClickButton = () => {
        setDarkMode(prevState => !prevState)
        changeMode(!darkMode)
      } 
      const text = darkMode ? "Light" : "Dark" 
      const headerClass = activeMode === 'light'? 'header_light' : 'header_dark'
      const companyNameClass = activeMode === 'light'? 'company_name_light' : 'company_name_dark'
      const headingClass = activeMode === 'light'? 'heading_light' : 'heading_dark'
      const modeBtnClass = activeMode === 'light'? 'mode_btn_light' : 'mode_btn_dark'
      return (
        <div className={headerClass}>
        <p className={companyNameClass}>Kraftshala</p>
        <h1 className={headingClass}>Weather Forecast</h1>
        <button type = 'button' className={modeBtnClass} onClick={onClickButton}>{text}</button>
        </div>
      )
    }}
  </ModeContext.Consumer>
  )
}

export default Header