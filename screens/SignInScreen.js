import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";
import { TouchableOpacityBase } from "react-native";
import {
	View,
	Text,
	Image,
	StyleSheet,
	KeyboardAvoidingView,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import { auth } from "../firebase";

const BG_IMG =
	"https://images.pexels.com/photos/132340/pexels-photo-132340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const SignInScreen = ({ navigation }) => {
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			console.log(authUser);
			if (authUser) {
				navigation.replace("HomeScreen");
			}
		});
		return unsubscribe;
	}, []);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.catch((error) => alert(error));
	};

	return (
		<KeyboardAvoidingView behavior="height" enabled style={styles.container}>
			<StatusBar style="light" />
			<Image
				source={{
					uri:
						"https://images.pexels.com/photos/132340/pexels-photo-132340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				}}
				style={StyleSheet.absoluteFillObject}
			/>
			<View style={styles.inputContainer}>
				<Input
					placeholder="Email"
					type="email"
					value={email}
					onChangeText={(text) => setEmail(text)}
					inputStyle={{ color: "lightyellow" }}
				/>
				<Input
					placeholder="Password"
					secureTextEntry
					type="password"
					value={password}
					onSubmitEditing={signIn}
					onChangeText={(text) => setPassword(text)}
					inputStyle={{ color: "lightyellow" }}
				/>
				<Button
					raised
					buttonStyle={{
						backgroundColor: "black",
						borderColor: "lightyellow",
						borderWidth: 0.5,
					}}
					titleStyle={{
						color: "lightyellow",
					}}
					containerStyle={styles.button}
					onPress={signIn}
					title="Login"
				/>
				<Button
					raised
					buttonStyle={{
						backgroundColor: "lightyellow",
						borderColor: "black",
						borderWidth: 1,
					}}
					titleStyle={{
						color: "black",
					}}
					onPress={() => navigation.navigate("SignUpScreen")}
					containerStyle={styles.button}
					type="outline"
					title="Register"
				/>
			</View>
		</KeyboardAvoidingView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "white",
	},
	inputContainer: { width: 300 },
	button: { width: 200, marginTop: 10, alignSelf: "center" },
});

export default SignInScreen;
