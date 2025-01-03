// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBb6g2Vx-hWKg6S8UD0eNmESri9ZWVSrbA",
  authDomain: "otp-auth-71783.firebaseapp.com",
  projectId: "otp-auth-71783",
  storageBucket: "otp-auth-71783.firebasestorage.app",
  messagingSenderId: "123604677815",
  appId: "1:123604677815:web:5234a565374a14bf70c932",
  measurementId: "G-B0ZG26JN82"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// if (process.env.NODE_ENV === "development") {
//   connectAuthEmulator(auth, "http://localhost:9099");
//   try {
//     auth.settings.appVerificationDisabledForTesting = true;
//   } catch (error) {
//     console.warn("Unable to set appVerificationDisabledForTesting:", error.message);
//   }
// }

export { auth }; // Use named export
