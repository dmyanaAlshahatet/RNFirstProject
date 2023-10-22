import React, { useState } from "react";
import RNFirstProjectContext from "./RNFirstProjectContext";
const RNFirstProjectProvider = (props) => {

    const [scree1_c, setScreen1_c] = useState(0)
    const [scree2_c, setScreen2_c] = useState(0)
    const [theme, setTheme] = useState('light'); // new 

    const providerValue = {
        scree1_c,
        setScreen1_c,
        scree2_c,
        setScreen2_c
    }

    useEffect(() => {
        // Load saved theme from storage
        const getTheme = async () => {
          try {
            const savedTheme = await AsyncStorage.getItem('theme');
            if (savedTheme) {
              setTheme(savedTheme);
            }
          } catch (error) {
            console.log('Error loading theme:', error);
          }
        };
        getTheme();
      }, []);
    
      const toggleTheme = newTheme => {
        setTheme(newTheme);
        AsyncStorage.setItem('theme', newTheme)
      };




    return (
        <RNFirstProjectContext.Provider value={providerValue}>
            {props.children}
        </RNFirstProjectContext.Provider>
    )

}

export default RNFirstProjectProvider;
