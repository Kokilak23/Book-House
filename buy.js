function processPayment() {
    // Validate the form
    const cardNumber = document.getElementById('cardNumber').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const cvv = document.getElementById('cvv').value;

    if (!isValidCardNumber(cardNumber) || !isValidExpirationDate(expirationDate) || !isValidCVV(cvv)) {
        alert('  your payment succesfully .');
        return;
    }

    // Simulate payment processing (replace this with actual payment processing logic)
    console.log('Processing payment...');
    alert('Payment processed successfully!');
}

function isValidCardNumber(cardNumber) {
    // Add your card number validation logic here (e.g., regex validation)
    return /^\d{16}$/.test(cardNumber);
}

function isValidExpirationDate(expirationDate) {
    // Add your expiration date validation logic here (e.g., regex validation)
    return /^\d{2}\/\d{4}$/.test(expirationDate);
}

function isValidCVV(cvv) {
    // Add your CVV validation logic here (e.g., regex validation)
    return /^\d{3}$/.test(cvv);
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWjEcqvNxqZLUAt8ef4Xi1a4vC3VkY6Cg",
  authDomain: "bookhouse-b0c95.firebaseapp.com",
  databaseURL: "https://bookhouse-b0c95-default-rtdb.firebaseio.com",
  projectId: "bookhouse-b0c95",
  storageBucket: "bookhouse-b0c95.appspot.com",
  messagingSenderId: "16446195774",
  appId: "1:16446195774:web:ad51299590041d5393a96f",
  measurementId: "G-FMJXGT7M06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);