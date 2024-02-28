<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/style.css" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="stylesheet" type="text/css" href="../slick/slick.css" />
    <link rel="stylesheet" type="text/css" href="../slick/slick-theme.css" />
    <title>Veterianria S.M. | Inicio</title>
  </head>
  <body>
  <?php 
$myemails = 'diego@nerdmedia.pe, alonso@nerdmedia.pe, alexis.ndpm@gmail.com, clivetsanmarcos@gmail.com';
$tipoDoc = $_POST['doc'];
$numDoc = $_POST['numeroDoc'];
$name = $_POST['name'];
$direccion = $_POST['direccion'];
$distrito = $_POST['distrito'];
$tel = $_POST['telefono'];
$email = $_POST['email'];
$bienContratado = $_POST['bienContratado'];
$montoReclamado = $_POST['montoReclamado'];
$descripcion = $_POST['descripcion'];
$tipoSolicitud = $_POST['tipoSolicitud'];
$detalle = $_POST['detalle'];
$pedido = $_POST['pedido'];

$to = $myemails;
$email_subject = "Libro de Reclamaciones - Veterinaria San Marcos";
$email_body = "
Haz recibido un nuevo mensaje. \n Nombre: $name \n Tipo de Documento: $tipoDoc \n Numero de Documento: $numDoc \n Dirección: $direccion \n Distrito: $distrito \n Teléfono: $tel \n Email: $email \n Identificación del bien contratado: $bienContratado \n Monto Reclamado: $montoReclamado \n Descripción: $descripcion \n Tipo de Solicitud: $tipoSolicitud \n Detalle: $detalle \n Pedido: $pedido \n" ;
$headers = "From: $email";

mail($to, $email_subject, $email_body, $headers);
?>
    <main>
      <section class="contacto open thanks">
        <div class="containerThanks">
          <div class="btn-close btn-close-thanks">
            <a href="https://veterinariasanmarcos.com/" class="close"
              ><img src="icons/cruz.svg" alt=""
            /></a>
          </div>
          <div class="cont contThank">
            <div class="contacto-part1 thanks1">
              <div class="mid">
                <h1>Gracias por escribirnos</h1>
                <p>Su reclamo se envió correctamente</p>
                <a href="https://veterinariasanmarcos.com/">IR AL HOME</a>
              </div>
            </div>
            <div class="contacto-part2">
              <div class="contacto-imgs">
                <img class="img1 hvr-float" src="../img/nosotros1.png" alt="" />
                <img class="img2 hvr-float" src="../img/nosotros2.png" alt="" />
                <img class="img3 hvr-float" src="../img/nosotros3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="slider">
          <div class="scroll text1 slider-contacto">
            <div class="text">
              <div class="cont">
                <img src="../icons/icono-map.svg" alt="" /><span
                  >Av San Juan 981, San Juan de Miraflores</span
                >
              </div>
              <div class="cont">
                <img src="../icons/icono-telefono.svg" alt="telefono" /><span
                  >(+51) 276 4058 - (+51) 276 4051</span
                >
              </div>
              <div class="cont">
                <img
                  id="email"
                  src="../icons/icono-email.svg"
                  alt="telefono"
                /><span>contacto@veterinariasanmarcos.com</span>
              </div>
            </div>
            <div class="text">
              <div class="cont">
                <img src="../icons/icono-map.svg" alt="" />
                <span>Av San Juan 981, San Juan de Miraflores</span>
              </div>
              <div class="cont">
                <img src="../icons/icono-telefono.svg" alt="telefono" /><span
                  >(+51) 276 4058 - (+51) 276 4051</span
                >
              </div>
              <div class="cont">
                <img
                  id="email"
                  src="../icons/icono-email.svg"
                  alt="telefono"
                /><span>contacto@veterinariasanmarcos.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script
      type="text/javascript"
      src="//code.jquery.com/jquery-migrate-1.2.1.min.js"
    ></script>
    <script type="text/javascript" src="../slick/slick.min.js"></script>

    <script src="../js/main.js"></script>
  </body>
</html>
