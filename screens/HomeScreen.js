import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	FlatList,
	Dimensions,
	Alert,
	Modal,
	ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Input } from "react-native-elements/dist/input/Input";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";

import { auth } from "../firebase";

const DATA = [
	{
		key: "1",
		ipucu: "İpucu 1",
		ipucuTitle: "İpucu 1 açıklama",
	},
	{
		key: "2",
		ipucu: "İpucu 2",
		ipucuTitle: "İpucu 2 açıklama",
	},
	{
		key: "3",
		ipucu: "İpucu 3",
		ipucuTitle: "İpucu 3 açıklama",
	},
	{
		key: "4",
		ipucu: "İpucu 4",
		ipucuTitle: "İpucu 4 açıklama",
	},
	{
		key: "5",
		ipucu: "İpucu 5",
		ipucuTitle: "İpucu 5 açıklama",
	},
];

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Item = ({ ipucu, ipucuTitle }) => (
	<TouchableOpacity
		onPress={() => Alert.alert(`${ipucu}`, `${ipucuTitle}`)}
		style={{ alignSelf: "flex-start", padding: 10 }}
	>
		<View style={{ flexDirection: "row" }}>
			<EvilIcons name="search" size={24} color="lightyellow" />
			<Text style={{ color: "white", fontSize: 16, color: "lightyellow" }}>
				{ipucu}
			</Text>
		</View>
	</TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
	var cevap = "Cevap";
	const [currentDate, setCurrentDate] = useState("");

	const [inputCevap, setInputCevap] = useState("");

	const [countModal, setCountModal] = useState(false);

	const onPressSubmit = () => {
		inputCevap.toLowerCase() == `${cevap}`.toLowerCase()
			? setCountModal(true)
			: Alert.alert("", "Cevap Yanlış Tekrar deneyin");
	};

	useEffect(() => {
		var date = new Date().getDate();
		var month = new Date().getMonth() + 1;
		var year = new Date().getFullYear();
		var hours = new Date().getHours();
		var min = new Date().getMinutes();
		var sec = new Date().getSeconds();
		setCurrentDate(
			date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec
		);
	}, []);

	const renderItem = ({ item }) => (
		<Item ipucu={item.ipucu} ipucuTitle={item.ipucuTitle} />
	);
	return (
		<View style={{ flex: 1 }}>
			<Image
				source={{
					uri:
						"https://images.pexels.com/photos/132340/pexels-photo-132340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				}}
				style={StyleSheet.absoluteFillObject}
				blurRadius={5}
			/>
			<View style={{}}>
				<TouchableOpacity
					style={{ alignSelf: "flex-end", position: "absolute" }}
					onPress={() => navigation.navigate("SettingsScreen")}
				>
					<AntDesign name="setting" size={30} color="lightyellow" />
				</TouchableOpacity>
			</View>

			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.key}
				style={{ maxHeight: 500, maxWidth: 200 }}
			/>
			<View style={{ width: "70%", alignSelf: "center" }}>
				<Input
					placeholder={"Cevap"}
					textAlign={"center"}
					style={{
						backgroundColor: "white",
						alignSelf: "center",
						borderRadius: 5,
					}}
					onChangeText={(text) => setInputCevap(text)}
				/>
			</View>
			<View style={{ width: 100, alignSelf: "center" }}>
				<Button
					onPress={onPressSubmit}
					raised
					buttonStyle={{
						backgroundColor: "black",
						borderColor: "lightyellow",
						borderWidth: 0.5,
					}}
					titleStyle={{
						color: "lightyellow",
					}}
					title={"Gönder"}
				/>
			</View>
			<Modal transparent={true} visible={countModal}>
				<ScrollView style={{ flex: 1, backgroundColor: "#000000BB" }}>
					<View
						style={{
							width: windowWidth * (8 / 10),
							backgroundColor: "lightyellow",
							height: windowHeight * (8 / 10),
							alignSelf: "center",
							borderRadius: 50,
							marginTop: windowHeight * (0.7 / 10),
							flexDirection: "column",
						}}
					>
						<TouchableOpacity
							onPress={setCountModal}
							style={{ alignSelf: "flex-start", padding: 30 }}
						>
							<Ionicons name="arrow-back-outline" size={32} color="black" />
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								alignSelf: "center",
								backgroundColor: "lightyellow",
								borderRadius: 50,
								borderWidth: 5,
								borderColor: "#1c1414",
								marginTop: 50,
							}}
						>
							<MaterialIcons
								name="done"
								size={64}
								color="black"
								style={{ alignSelf: "center" }}
							/>
						</TouchableOpacity>
						<Text
							style={{
								padding: 15,
								fontSize: 16,
								fontStyle: "italic",
								fontWeight: "bold",
								alignSelf: "center",
								borderBottomColor: "black",
								borderBottomWidth: 2,
							}}
						>
							Cevap
						</Text>
						<Text
							style={{
								padding: 15,
								fontSize: 16,
								fontStyle: "italic",
								fontWeight: "bold",
								alignSelf: "center",
							}}
						>
							{cevap}
						</Text>
						<Text
							style={{
								padding: 15,
								fontSize: 16,
								marginTop: 20,
								fontStyle: "italic",
								fontWeight: "bold",
							}}
						>
							İlk hafta sorusu {currentDate} tarihinde{" "}
							{auth?.currentUser?.displayName} tarafından çözülmüştür!
						</Text>
						<Text
							style={{
								padding: 15,
								fontSize: 16,
								marginTop: 20,
								fontStyle: "italic",
								fontWeight: "bold",
							}}
						>
							Herkese katılımları için teşekkürler . Diğer soru için takipte
							kalın
						</Text>
					</View>
				</ScrollView>
			</Modal>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
