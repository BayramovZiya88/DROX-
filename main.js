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

function isCaptchaValid() {
  const response = grecaptcha.getResponse(); 
  return response && response.length > 0;    
}

function register() {
  if (!isCaptchaValid()) {
    alert("Lütfen reCAPTCHA'yı doğrulayın.");
    return;
  }

  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      window.location.href = "home.html";
    })
    .catch(error => {
      alert('Hata: ' + error.message);
    });
}


function login() {
  if (!isCaptchaValid()) {
    alert("Lütfen reCAPTCHA'yı doğrulayın.");
    return;
  }

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      window.location.href = "home.html";
    })
    .catch(error => {
      alert('Hata: ' + error.message);
    });
}


function googleLogin() {
  if (!isCaptchaValid()) {
    alert("Lütfen reCAPTCHA'yı doğrulayın.");
    return;
  }

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
