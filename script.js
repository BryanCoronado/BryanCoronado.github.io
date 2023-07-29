let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//enviar correo


function enviarCorreo() {
    gapi.load('client', iniciar);

    function iniciar() {
      gapi.client.init({
        apiKey: 'TU_API_KEY',
        clientId: 'TU_CLIENT_ID',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
        scope: 'https://www.googleapis.com/auth/gmail.send'
      }).then(function () {
        var nombre = document.getElementById('nombre').value;
        var correo = document.getElementById('correo').value;
        var tema = document.getElementById('tema').value;
        var mensaje = document.getElementById('mensaje').value;

        var email = "To: destinatario@gmail.com\r\n" +
          "Subject: " + tema + "\r\n" +
          "From: " + nombre + " <" + correo + ">\r\n" +
          "\r\n" +
          mensaje;

        var base64EncodedEmail = btoa(email).replace(/\+/g, '-').replace(/\//g, '_');

        var request = gapi.client.gmail.users.messages.send({
          'userId': 'me',
          'resource': {
            'raw': base64EncodedEmail
          }
        });

        request.execute(function (response) {
          console.log(response);
        });
      });
    }
  }