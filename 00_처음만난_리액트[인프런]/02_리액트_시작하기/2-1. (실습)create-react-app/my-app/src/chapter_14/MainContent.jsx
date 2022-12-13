import { useContext } from "react";
import ThemeContext from "./ThemeConetxt";

function MainContent(props) {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div
      style={{
        width: '105vw',
        height: '135vh',
        padding: '1.5rem',
        backgroundColor: theme == 'light' ? 'white' : 'black',
        color: theme == 'light' ? 'black' : 'white',
      }}
    >
      <p>Hi, This is theme changable website.</p>
      <button onClick={toggleTheme}>Change Theme</button>

    </div>
  )
}

export default MainContent;