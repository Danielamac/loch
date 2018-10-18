<!-- Facebook Pixel Code -->

   !function (f, b, e, v, n, t, s) {
       if (f.fbq) return;
       n = f.fbq = function () {
           n.callMethod ?
               n.callMethod.apply(n, arguments) : n.queue.push(arguments)
       };
       if (!f._fbq) f._fbq = n;
       n.push = n;
       n.loaded = !0;
       n.version = '2.0';
       n.queue = [];
       t = b.createElement(e);
       t.async = !0;
       t.src = v;
       s = b.getElementsByTagName(e)[0];
       s.parentNode.insertBefore(t, s)
   }(window, document, 'script',
       'https://connect.facebook.net/en_US/fbevents.js');
   fbq('init', '1762478700488143');
   fbq('track', 'PageView');

//<noscript><img height="1" width="1" style="display:none"
        //      src="https://www.facebook.com/tr?id=1762478700488143&ev=PageView&noscript=1"
///></noscript>
//<!-- End Facebook Pixel Code -->




       // Inicio Código pepe

       var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   var materials = ["Plata", "Oro", "Oro Rosa"];
   var letter = 6;
   var material = 2;
   var size = "5";
   var product = "anillo";
   var price = ((1450.0*1.16) + 120).toFixed(2);
   var productos = {
       product: [],
       name: " ",
       lastName: " ",
       email: " ",
       phone: " ",
       street: " ",
       number: " ",
       zip: " ",
       city: " ",
       state: " ",
       amount: ""
   };


   function deletDropDownValues() {
       var dropdown = document.getElementById("talla");
       if (dropdown.childElementCount > 0) {
           while (dropdown.firstChild) {
               dropdown.removeChild(dropdown.firstChild);
           }
       }


   }

   function getParameterByName(name) {
       name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
       console.log("entre");
       var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
       results = regex.exec(location.search);
       return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
   }

   function addProductToCart() {
       console.log(price);
       productos['product'].push({
           "name": String(product + " " + letters[letter] + " " + materials[material] + " talla: " + size),
           "sku": String(size + " L " + letter + " M " + material),
           "price": String(price),
           "currency": "MXN",
           "quantity": String(1),

       });
       document.getElementById("cartNum").innerHTML++;
       fbq('track', 'AddToCart');
       alert("Producto agregado al carrito");
   }

   //const nodemailer = require('nodemailer');
   function changeProduct(newProduct) {
     console.log("entro cambio de producto");
       if (newProduct != product) {
           letter = 6;
           material = 2;
           product = newProduct;
           deletDropDownValues();
           var dropdown = document.getElementById("talla");
           switch (newProduct) {
               case "anillo":
                   document.getElementById("iframe1").src = "https://playcanv.as/index/CoZMLG0C";
                   dropdown.innerHTML = '<a href="#" class="dropdown-link w-dropdown-link" onclick = "updateSize(this)">4.5</a><a href="#" class="dropdown-link-2 w-dropdown-link" onclick = "updateSize(this)">5</a><a href="#" class="dropdown-link-3 w-dropdown-link" onclick = "updateSize(this)">5.5</a><a href="#" class="dropdown-link-3 w-dropdown-link" onclick = "updateSize(this)">6</a><a href="#" class="dropdown-link-3 w-dropdown-link" onclick = "updateSize(this)">6.5</a><a href="#" class="dropdown-link-3 w-dropdown-link" onclick = "updateSize(this)">7</a><a href="#" class="dropdown-link-3 w-dropdown-link" onclick = "updateSize(this)">7.5</a><a href="#" class="dropdown-link-3 w-dropdown-link" onclick = "updateSize(this)">8</a><a href="#" class="dropdown-link-3 w-dropdown-link" onclick = "updateSize(this)">8.5</a><a href="#" class="dropdown-link-3 w-dropdown-link" onclick = "updateSize(this)">9</a><a href="#" class="dropdown-link-3 w-dropdown-link" onclick = "updateSize(this)">9.5</a><a href="#" class="dropdown-link-3 w-dropdown-link" onclick = "updateSize(this)">10</a><a href="#" class="dropdown-link-3 w-dropdown-link" onclick = "updateSize(this)">10.5</a><a href="#" class="dropdown-link-3 w-dropdown-link" onclick = "updateSize(this)">11</a><a href="#" class="dropdown-link-3 w-dropdown-link" onclick = "updateSize(this)">11.5</a><a href="#" class="dropdown-link-3 w-dropdown-link" onclick = "updateSize(this)">12</a>';
                   document.getElementById("txtTalla").innerHTML = "TALLA";
                   document.getElementById("btnAnillo").style = "border: 1px solid #000;"
                   document.getElementById("btnBrazalete").style = "  border: none;"
                   document.getElementById("txtPersonaliza").innerHTML = "PERSONALIZA TU ANILLO";
                   talla = 5.0;
                   break;
               case "brazalete":
                   document.getElementById("iframe1").src = "https://playcanv.as/index/g6rUazVW";
                   dropdown.innerHTML = '<a href="#" class="dropdown-link w-dropdown-link" onclick = "updateSize(this)">CH</a><a href="#" class="dropdown-link-2 w-dropdown-link" onclick = "updateSize(this)">M</a>';
                   document.getElementById("txtTalla").innerHTML = "TALLA";
                   document.getElementById("btnAnillo").style = "border: none;"
                   document.getElementById("btnBrazalete").style = "border: 1px solid #000;"
                   document.getElementById("txtPersonaliza").innerHTML = "PERSONALIZA TU BRAZALETE";
                   talla = "CH";
                   break;
               default:
                   document.getElementById("iframe1").src = "https://playcanv.as/index/CoZMLG0C";
                   break;
           }
           changePlayCanvas();
           changePrice();
       }

   }

   function updateSize(newSize) {
       size = newSize.innerHTML;
       document.getElementById("txtTalla").innerHTML = size;
       //newSize.style = "border: 1px solid #000;"
       //alert(size);

   }

   window.onload = function() {
       numPersonasPersolizando();
       if(getParameterByName("state") == "success"){
           fbq('track', 'Purchase');
           alert("Gracias por tu compra, recibiras un mail de confirmación.");
           /*
           fetch('http://localhost:5500/api/sendEmail',
           {
               method: 'POST',
               headers: new Headers({ "Content-Type": "application/json" }),
               body: getParameterByName("jsonInfo")

           }).then(console.log("enviado"));
           */

       }else if (getParameterByName("state")=="failed"){
           alert("Error en el proceso de la compra, favor de intentar de nuevo.");
       }
       document.getElementById('lochLoading').style ="display: none;";
       document.getElementById('load').style ="display: none;";
       document.getElementById('lochWebPage').style ="display: block;";
       document.getElementById('brLoading').innerHTML = "";

   };

   function pay() {
       productos.name = document.getElementById('name').value;
       productos.lastName = document.getElementById('lastname').value;
       productos.email = document.getElementById('email').value;
       productos.phone = document.getElementById('phone_number').value;
       productos.street = document.getElementById('street').value;
       productos.number = document.getElementById('number').value;
       productos.zip = document.getElementById('zip').value;
       productos.city = document.getElementById('municipality').value;
       productos.state = document.getElementById('state').value;
       fbq('track', 'InitiateCheckout');

       console.log("precio: " + productos.product[0].price);
/*
         $.ajax({
           url: 'http://localhost:5500/api/purchase',
           type: 'post',
           dataType: 'json',
           contentType: 'application/json',
           crossDomain: true,
           success: function (data) {

           },
           data: JSON.stringify(productos)
       });
*/

       fetch('https://loch.us-east-2.elasticbeanstalk.com/api/purchase',
           {
               method: 'POST',
               headers: new Headers({ "Content-Type": "application/json" }),
               body: JSON.stringify(productos)

           }).then(response => response.json())
           .then(function (json){
               console.log(json);
               window.location.replace(json.url);
           }
        );
}



   function numPersonasPersolizando() {
       document.getElementById("txtNumPersonas").innerHTML = Math.floor((Math.random() * 14) + 1) + " PERSONAS ESTÁN PERSONALIZANDO SU<br>PIEZA</h1>";
   }



   function changeLetter(newLetter) {
       letter = newLetter;
       console.log(newLetter);
       changePlayCanvas();
   }


   function changePrice() {
       switch (product) {
           case "anillo":
               switch (material) {
                   case 0:
                       document.getElementById("txtPrice").innerHTML = "$950.00 MXN";
                       price = 950.0;
                       break;
                   case 1:
                       document.getElementById("txtPrice").innerHTML = "$1450.00 MXN";
                       price = 1450.0;
                       break;
                   case 2:
                       document.getElementById("txtPrice").innerHTML = "$1450.00 MXN";
                       price = 1450.0;
                       break;
               }
               break;

           case "brazalete":
               switch (material) {
                   case 0:
                       document.getElementById("txtPrice").innerHTML = "$2,700.00 MXN";
                       price = 2700.0;
                       break;
                   case 1:
                       document.getElementById("txtPrice").innerHTML = "$3,700.00 MXN";
                       price = 3700.0;
                       break;
                   case 2:
                       document.getElementById("txtPrice").innerHTML = "$3,700.00 MXN";
                       price = 3700.0;
                       break;
               }
               break;
               break;
       }

       price = ((price * 1.16) +  120).toFixed(2);

   }

   function openCart() {
       //alert("cartOpen");
       document.getElementById("cart").style.display = "block";
       var cartNum = document.getElementById("descripcionNum");
       //<p>1</p>
       var cartPrice = document.getElementById("descripcionPrice");
       // <p class="paragraph-13" >$950.00</p>
       var cartProduct = document.getElementById("descripcionProduct");
       //<p class="paragraph-8" >Anillo letra &quot; &quot; plata 925, Talla &quot; &quot;</p>
       var cartX = document.getElementById("descripX");
       //<a href="#" class="link-19 w-button">X</a>
       var price = 0;
       //Borrar las 3 columnas

       while (cartProduct.firstChild) {
           cartProduct.removeChild(cartProduct.firstChild);
       }

       while (cartNum.firstChild) {
           cartNum.removeChild(cartNum.firstChild);
       }

       while (cartPrice.firstChild) {
           cartPrice.removeChild(cartPrice.firstChild);
       }
       while (cartX.firstChild) {
           cartX.removeChild(cartX.firstChild);
       }
       for (var i = 0; i < productos.product.length; i++) {
           //cartProducts.innerHTML += '<p class="paragraph-8"> '+ productos.product[i].name + ' Precio: $'+ productos.product[i].price +' MXN </p>';
           price +=  parseInt(productos.product[i].price);
           cartNum.innerHTML += "<p>1</p>";
           cartProduct.innerHTML += '<p class="paragraph-8" >' + productos.product[i].name + "</p>";
           cartPrice.innerHTML += '<p>' + productos.product[i].price;
           cartX.innerHTML += '<a href="#" class="link-19 w-button" id="' + i + '" onclick = "deleteItem(' + i + ')">X</a> <br>';

       }
       productos.amount = price + .00;
       document.getElementById("descripcionTotal").innerHTML = 'Total: $' + price + '.00 MXN <br> Incluye impuestos y envio grátis. <br> Se te direccionará a Paypal' ;
       //}
   }

   function openFormulario() {
       document.getElementById("cart").style.display = "none";
       document.getElementById("formulario").style.display = "block";
   }

   function closeForumlario() {
       document.getElementById("formulario").style.display = "none";
   }

   function changeMatAndLetter(mat, let) {
       changeLetter(let);
       changeMaterial(mat);
   }

   function backToCart() {
       document.getElementById("formulario").style.display = "none";
       openCart();
   }

   function deleteItem(item) {
       productos.product.splice(item, 1);
       alert(JSON.stringify(productos));
       openCart();
       updateCartNum();
   }

   function updateCartNum() {
       document.getElementById("cartNum").innerHTML = productos.product.length;
   }

   function closeCart() {
       document.getElementById("cart").style.display = "none";
   }

   function changeMaterial(newMaterial) {
       material = newMaterial;
       console.log(newMaterial);
       changePlayCanvas();
       changePrice();
   }

   function buyProducts() {
       alert("Comprar");
   }

   function changePlayCanvas() {
       var iframe = document.getElementById("iframe1");
       iframe.contentWindow.postMessage({
           index: letter, indexMaterial: material
       }, "https://playcanv.as");
   }

  //Fin Código Pepe
