// Firebase config (senin verdiklerinle)
const firebaseConfig = {
  apiKey: "AIzaSyB7WhkcW6JbBD6rYkm0O7JmRu5vt_tGzmY",
  authDomain: "droxicheats.firebaseapp.com",
  projectId: "droxicheats",
  storageBucket: "droxicheats.appspot.com",
  messagingSenderId: "1099305011676",
  appId: "1:1099305011676:web:9e58b3d7a02d7108dea719"
};

// Firebase başlat
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Kayıt
function register() {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert('Kayıt başarılı: ' + userCredential.user.email);
    })
    .catch(error => {
      alert('Hata: ' + error.message);
    });
}

// Giriş
function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert('Giriş başarılı: ' + userCredential.user.email);
    })
    .catch(error => {
      alert('Hata: ' + error.message);
    });
}

// Google ile Giriş
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then(result => {
      alert('Google ile giriş başarılı: ' + result.user.email);
    })
    .catch(error => {
      alert('Google giriş hatası: ' + error.message);
    });
}

// Oturum takibi (isteğe bağlı)
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("Giriş yapan:", user.email);
  } else {
    console.log("Çıkış yapıldı");
  }
});
