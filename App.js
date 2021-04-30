import "react-native-gesture-handler";
import * as React from "react";
import { Button, View, TouchableOpacity, navi } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";

import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator initialRouteName={SignInScreen}>
			<Stack.Screen
				name="SignInScreen"
				options={{ headerShown: false }}
				component={SignInScreen}
			/>
			<Stack.Screen
				name="SignUpScreen"
				options={{ headerShown: false }}
				component={SignUpScreen}
			/>
			<Stack.Screen
				name="HomeScreen"
				options={{ headerShown: false }}
				component={HomeScreen}
			/>
			<Stack.Screen
				name="SettingsScreen"
				options={{ headerShown: false }}
				component={SettingsScreen}
			/>
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}
