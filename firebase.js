import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCAn0PNaKmx7kvEwomDqksFnhFoxMAmOd8",
	authDomain: "project1-9576e.firebaseapp.com",
	projectId: "project1-9576e",
	storageBucket: "project1-9576e.appspot.com",
	messagingSenderId: "520513136213",
	appId: "1:520513136213:web:002bee9cb28e799d34d6dc",
	measurementId: "G-KNJ93WK89Z",
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
