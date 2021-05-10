import React from "react";
import { Touchable } from "react-native";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { auth } from "../firebase";

const as = sa;

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "Hesap",
		icon: "user",
		iconColor: "lightyellow",
		textColor: "lightyellow",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Bildirimler",
		icon: "notification",
		iconColor: "lightyellow",
		textColor: "lightyellow",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Hakkında",
		icon: "infocirlceo",
		iconColor: "lightyellow",
		textColor: "lightyellow",
	},
];

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Item = ({ icon, title, iconColor, textColor }) => (
	<View>
		<TouchableOpacity>
			<View
				style={{
					height: windowHeight * (1 / 12),
					borderColor: "gray",
					borderTopWidth: 0.5,
					borderBottomWidth: 0.5,
					flexDirection: "row",
				}}
			>
				<AntDesign
					name={icon}
					size={32}
					color={iconColor}
					style={{ alignSelf: "center", marginLeft: 15 }}
				/>
				<Text
					style={{
						alignSelf: "center",
						fontSize: 20,
						fontWeight: "800",
						marginLeft: 10,
						color: textColor,
					}}
				>
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	</View>
);

const SettingsScreen = ({ navigation }) => {
	const signOutUser = () => {
		auth.signOut().then(() => {
			navigation.replace("SignInScreen");
		});
	};

	const renderItem = ({ item }) => (
		<Item
			title={item.title}
			icon={item.icon}
			iconColor={item.iconColor}
			textColor={item.textColor}
		/>
	);

	return (
		<View style={{ flex: 1 }}>
			<Image
				source={{
					uri: "https://images.pexels.com/photos/132340/pexels-photo-132340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				}}
				style={StyleSheet.absoluteFillObject}
				blurRadius={5}
			/>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
			<View>
				<TouchableOpacity onPress={signOutUser}>
					<View
						style={{
							height: windowHeight * (1 / 12),
							borderColor: "gray",
							borderTopWidth: 0.5,
							borderBottomWidth: 0.5,
							flexDirection: "row",
						}}
					>
						<AntDesign
							name="logout"
							size={32}
							color="lightyellow"
							style={{ alignSelf: "center", marginLeft: 15 }}
						/>
						<Text
							style={{
								alignSelf: "center",
								fontSize: 20,
								fontWeight: "800",
								marginLeft: 10,
								color: "lightyellow",
							}}
						>
							Çıkış Yap
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SettingsScreen;
