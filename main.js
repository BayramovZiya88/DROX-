const firebaseConfig = {
  apiKey: "AIzaSyB7WhkcW6JbBD6rYkm0O7JmRu5vt_tGzmY",
  authDomain: "droxicheats.firebaseapp.com",
  projectId: "droxicheats",
  storageBucket: "droxicheats.appspot.com",
  messagingSenderId: "1099305011676",
  appId: "1:1099305011676:web:9e58b3d7a02d7108dea719"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  grecaptcha.ready(function () {
    grecaptcha.execute('6Lc8epYrAAAAAMoGLMKn9grng5MvjBWIf6SC_FbC', { action: 'login' }).then(function (token) {
      if (!token) {
        alert("Lütfen reCAPTCHA'yı tamamlayın.");
        return;
      }

      auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          window.location.href = "home.html";
        })
        .catch(error => {
          alert('Hata: ' + error.message);
        });
    });
  });
}


function register() {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  grecaptcha.ready(function () {
    grecaptcha.execute('6Lc8epYrAAAAAMoGLMKn9grng5MvjBWIf6SC_FbC', { action: 'register' }).then(function (token) {
      if (!token) {
        alert("Lütfen reCAPTCHA'yı tamamlayın.");
        return;
      }

      auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          window.location.href = "home.html";
        })
        .catch(error => {
          alert('Hata: ' + error.message);
        });
    });
  });
}


function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then(result => {
      window.location.href = "home.html";
    })
    .catch(error => {
      alert('Google giriş hatası: ' + error.message);
    });
}


auth.onAuthStateChanged(user => {
  if (user) {
    console.log("Giriş yapan:", user.email);
  } else {
    console.log("Çıkış yapıldı");
  }
});
