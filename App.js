const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Filter from "./screens/Filter";
import Home from "./screens/Home";
import DetailMuseum2 from "./screens/DetailMuseum2";
import AllMuseum from "./screens/AllMuseum";
import SelectMuseumImage from "./components/SelectMuseumImage";
import DetailMuseum from "./screens/DetailMuseum";
import Notification1 from "./screens/Notification1";
import Test from "./screens/Test";
import EditMuseum from "./screens/EditMuseum";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import AddUser from "./screens/AddUser";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Filter"
              component={Filter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailMuseum2"
              component={DetailMuseum2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AllMuseum"
              component={AllMuseum}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailMuseum"
              component={DetailMuseum}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Test"
              component={Test}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddUser"
              component={AddUser}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="EditMuseum"
              component={EditMuseum}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
