import React from "react";

const ModeContext = React.createContext({
  activeMode: 'light',
  changeMode: () => {}
})

export default ModeContext