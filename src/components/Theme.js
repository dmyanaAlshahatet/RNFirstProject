import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useColorScheme } from 'react-native-appearance';


const App = () => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  useEffect(() => {
    setIsDarkMode(colorScheme === 'dark');
  }, [colorScheme]);

  const toggleTheme = () => {
    // قم بتغيير السمة الحالية هنا (يمكنك استخدام واجهة API الخاصة بتحكم السمة في التطبيق)
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <TouchableOpacity onPress={toggleTheme}>
        <Image
          source={isDarkMode ? require('../components/images/moon.png') : require('../components/images/sun.png')}
          style={styles.themeIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  themeIcon: {
    width: 50,
    height: 50,
  },
});

export default App;