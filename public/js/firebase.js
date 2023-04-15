let firebaseConfig = {
    // enter your firebase credentials here.
    apiKey: "AIzaSyBD6WEs59Yjzp4ALsz_eo_sZ8ZkIbDxeyE",
    authDomain: "yhfoodblog.firebaseapp.com",
    projectId: "yhfoodblog",
    storageBucket: "yhfoodblog.appspot.com",
    messagingSenderId: "783886935680",
    appId: "1:783886935680:web:32f1f6df04108234aaa865"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}