const firebaseConfig = {
    apiKey: "AIzaSyAeOww2dMP_ORi3D0PO-WOyJkSca8RY908",
    authDomain: "decants-a0187.firebaseapp.com",
    projectId: "decants-a0187",
    storageBucket: "decants-a0187.firebasestorage.app",
    messagingSenderId: "248112382407",
    appId: "1:248112382407:web:73023e4f02440620dfd9e2",
    measurementId: "G-HQXS2C5TRK"
  };

  firebase.initializeApp(firebaseConfig);
  console.log('Firebase inicializado');

  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // evitar reload da página
    console.log('Formulário enviado');

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log('Email:', email);
    console.log('Senha:', password);

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('Login realizado com sucesso!');
        window.location.href = "/workspaces/loja/site/dashboard.html";
      })
      .catch(error => {
        console.error('Erro ao fazer login:', error.message);
        alert("Email ou senha inválidos.");
      });
  });
