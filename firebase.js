import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA5Xk1udawmtPRbPIeC2btIbCxmg3TsKoc",
	authDomain: "project3-391d2.firebaseapp.com",
	projectId: "project3-391d2",
	storageBucket: "project3-391d2.appspot.com",
	messagingSenderId: "260796860660",
	appId: "1:260796860660:web:8c46c3042c7822bb6e36a1",
	measurementId: "G-C9RJ4W2FHL"
  };
let app;

if (firebase.apps.length === 0) {
	const firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
