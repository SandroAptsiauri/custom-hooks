import React, { useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useWindowResize from "./hooks/useWindowResize";

const App = () => {
  const { width } = useWindowResize();
  const isDesktop = width >= 768; 
  const [theme, setTheme] = useLocalStorage("theme", "light");
  if(theme === "light"){
    
  }

  useEffect(() => {
    if (!isDesktop) {
      setTheme("light");
    }
  }, [isDesktop, setTheme]);

  const toggleTheme = () => {
    if (isDesktop) {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme: {theme}</p>
    </div>
  );
};

export default App;
