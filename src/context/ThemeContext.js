// import { Button, View, Text ,backgroundColor,} from 'react-native';

// import React, { useState } from 'react';

// const ThemedComponent = () => {
//   const [theme, setTheme] = useState(lightTheme);

//   const lightTheme = {
//     backgroundColor: 'white',
//     textColor: 'black',
//   };

//   const darkTheme = {
//     backgroundColor: 'black',
//     textColor: 'white',
//   };

//   // const ThemedComponent = () => {
//   // const [theme, setTheme] = useState(lightTheme);
//   // باقي مكونك باستخدام كائن 'theme'
//   // };

//   const toggleTheme = () => {
//     setTheme(currentTheme => (currentTheme === lightTheme ? darkTheme : lightTheme));
//   };


//   return (
//     <View style={{ backgroundColor: theme.backgroundColor }}>
//       <Text style={{ color: theme.textColor }}>محتوى بناء السمات</Text>
//       <Button title="تبديل السمة" onPress={toggleTheme} />
//     </View>
//   );
// };

// export default ThemedComponent;