const boton1 = document.querySelector('.btn1');
const boton2 = document.querySelector('.btn2');
const boton3 = document.querySelector('.btn3');
const boton4 = document.querySelector('.btn4');
const boton5 = document.querySelector('.btn11');
const boton6 = document.querySelector('.btn22');
const boton7 = document.querySelector('.btn33');
const boton8 = document.querySelector('.btn44');
const contenedorhardware = document.querySelector('.hardware');
const contenedorsoftware = document.querySelector('.software');
const contenedorprogram = document.getElementById('.programa');
const contenedorredes = document.querySelector('.redes');
const contenedorsoport = document.querySelector('.cont-elements1');
const contenedorsoport2 = document.querySelector('.cont-elements2');
const contenedorsoport3 = document.querySelector('.cont-elements3');
const contenedorsoport4 = document.querySelector('.cont-elements4');
const contenedorhardwareandsoftware = document.querySelector('.content-classprinci');
const contenedorsoportprinci = document.querySelector('.content-softwareinformation');
const main = document.querySelector('.main');
const h1 = document.querySelector('.welcome');
const p = document.querySelector('.subti');
const input = document.getElementById('problem');
const input2 = document.getElementById('problem2');
const input3 = document.getElementById('problem3');
const input4 = document.getElementById('problem4');
const lista = document.getElementById('problema');
const lista2 = document.getElementById('problema2');
const lista3 = document.getElementById('problema3');
const lista4 = document.getElementById('problema4');
const lista5 = document.getElementById('list_dispositivo');
const X = document.getElementById('icon1');
const X2 = document.getElementById('icon2');
const X3 = document.getElementById('icon3');
const X4 = document.getElementById('icon4');
const X5 = document.getElementById('icon5');
const acerca = document.querySelector('.separ');
const acerca2 = document.querySelector('.separ2');
const acercainfo = document.querySelector('.acerca');
const menu = document.querySelector('.menus');
var correcto = false;
var correcto2 = false;
var correcto3 = false;
var correcto4 = false;
var correcto5 = false;


document.addEventListener('DOMContentLoaded', function(){
    contenedorsoport2.style.display = "none";
    contenedorsoport.style.display = "none";
    contenedorsoportprinci.style.display = "none";
});
boton1.addEventListener('click', function(){
    contenedorhardwareandsoftware.style.display = "none";
    p.style.display = "none";
    h1.style.display = "none";
    contenedorsoportprinci.style.display = "flex";
    contenedorsoport.style.display = "block";
    contenedorsoport2.style.display = "none";
    contenedorsoport3.style.display = "none";
    contenedorsoport4.style.display = "none";
});
boton2.addEventListener('click', function(){
    contenedorhardwareandsoftware.style.display = "none";
    p.style.display = "none";
    h1.style.display = "none";
    contenedorsoportprinci.style.display = "flex";
    contenedorsoport.style.display = "none";
    contenedorsoport2.style.display = "block";
    contenedorsoport3.style.display = "none";
    contenedorsoport4.style.display = "none";
});
boton3.addEventListener('click', function(){
    contenedorhardwareandsoftware.style.display = "none";
    p.style.display = "none";
    h1.style.display = "none";
    contenedorsoportprinci.style.display = "flex";
    contenedorsoport.style.display = "none";
    contenedorsoport2.style.display = "none";
    contenedorsoport3.style.display = "block";
    contenedorsoport4.style.display = "none";
});
boton4.addEventListener('click', function(){
    contenedorhardwareandsoftware.style.display = "none";
    p.style.display = "none";
    h1.style.display = "none";
    contenedorsoportprinci.style.display = "flex";
    contenedorsoport.style.display = "none";
    contenedorsoport2.style.display = "none";
    contenedorsoport3.style.display = "none";
    contenedorsoport4.style.display = "block";
});

lista.addEventListener("change", function(e) {
    e.preventDefault();
    var problemaSeleccionado = lista.value;

    if (problemaSeleccionado === "otro") {
        alert('Describe tu problema por favor');
        input.style.display = "block";
        input.focus();
    } else {
        input.style.display = "none";
    }

    if (problemaSeleccionado === "seleccionar") {
        correcto = false;
    } else {
        correcto = true;
    }
});

lista2.addEventListener("change", function(e) {
    var problemaSeleccionado = this.value;
    if (problemaSeleccionado === "otro") {
        alert('Describe tu problema por favor');
        input2.style.display = "block";
        input2.focus();
    } else {
        input2.style.display = "none";
    }
    if (problemaSeleccionado === "seleccionar") {
        correcto2 = false;
    } else {
        correcto2 = true;
    }
});
lista3.addEventListener("change", function(e) {
    var problemaSeleccionado = this.value;
    if (problemaSeleccionado === "otro") {
        alert('Describe tu problema por favor');
        input3.style.display = "block";
        input3.focus();
    } else {
        input3.style.display = "none";
    }
    if (problemaSeleccionado === "seleccionar") {
        correcto3 = false;
    } else {
        correcto3 = true;
    }
});
lista4.addEventListener("change", function(e) {
    var problemaSeleccionado = this.value;
    if (problemaSeleccionado === "otro") {
        alert('Describe tu problema por favor');
        input4.style.display = "block";
        input4.focus();
    } else {
        input4.style.display = "none";
    }
    if (problemaSeleccionado === "seleccionar") {
        correcto4 = false;
    } else {
        correcto4 = true;
    }
});

boton5.addEventListener('click', function(e){
    e.preventDefault();
    if(lista5.value === "seleccionar"){
        alert("Por favor selecciona tu dispositivo");
        lista5.focus();
        lista5.style.borderColor = "red";
        correcto5 = false;
    }else{
        correcto5 = true;
    }
    if (!correcto || !correcto5) {
        alert('Por favor selecciona el problema que tengas');
        lista.focus();
        lista5.focus();
        lista.style.borderColor = "red";
        lista5.style.borderColor = "red";
    }else{
        var carga = document.querySelector('.loader');
        carga.style.display = "flex";
        setTimeout(function(){
            lista.style.borderColor = "green";
            lista5.style.borderColor = "green";
            carga.style.display = "none";
        },3000);
        let mensaje = '';
        switch(lista.value) {
            case "no_arranca_cpu":
                mensaje = "SELECIONADO: HARDWARE. PROLEMA: NO ME ARRANCA EL COMPUTADOR😢. DISPOSITIVO: ";
                break;
            case "sin_imagen_monitor":
                mensaje = "SELECIONADO: HARDWARE. PROBLEMA: NO ME MUESTRA IMAGEN EL MONITOR😢. DISPOSITIVO: ";
                break;
            case "limpieza_disco_duro":
                mensaje = "SELECIONADO: HARDWARE. PROBLEMA: LIMPIEZA DE DISCO DURO. DISPOSITIVO: ";
                break;
            case "reparacion_disco_duro":
                mensaje = "SELECIONADO: HARDWARE. PROBLEMA: REPARACION DE DISCO DURO. DISPOSITIVO: ";
                break;
            case "reparacion_motherboard":
                mensaje = "SELECIONADO: HARDWARE. PROBLEMA: REPARACION DE TARJETA MADRE. DISPOSITIVO: ";
                break;
            case "otro":
                mensaje = "SELECIONADO: HARDWARE. SELECCION: OTRO. PROBLEMA:" + " " + input.value + ". DISPOSITIVO: ";
                break;
            default:
                mensaje = "";
                break;
            }

        mensaje += lista5.value === "portatil" ? "PORTÁTIL" : "CPU";

        let url = "https://api.whatsapp.com/send/?phone=573044369547&text=" + encodeURIComponent(mensaje) + "&type=phone_number&app_absent=0";

        setTimeout(function(){
            window.open(url);
        },3000);
    }
    if (lista.value === "otro" && input.value.length < 1) {
        alert('Ingresa al menos 1 caracter');
        lista.value = "";
        input.focus();
        input.style.borderColor = "red";
    }

    // Obtener el mensaje según la opción seleccionada en el menú desplegable
});


boton6.addEventListener('click', function(e){
    e.preventDefault();
    if (!correcto2) {
        alert('Por favor selecciona el problema que tengas');
        lista2.focus();
        lista2.style.borderColor = "red";
    } else if (lista2.value === "otro" && input2.value.length < 1) {
        alert('Ingresa al menos 1 caracter');
        input2.focus();
        input2.style.borderColor = "red";
    } else {
        var carga = document.querySelector('.loader');
        carga.style.display = "flex";
        setTimeout(function(){
            lista2.style.borderColor = "green";
            input2.style.borderColor = "green";
            carga.style.display = "none";
        },3000);
        let mensajewhats = '';
        switch(lista2.value) {
            case "cpu_lenta":
                mensajewhats = "SELECIONADO: SOFTWARE. PROLEMA: TENGO LA CPU LENTA.";
                break;
            case "congelamineto_cpu":
                mensajewhats = "SELECIONADO: SOFTWARE. PROBLEMA: SE CONGELA EL COMPUTADOR.";
                break;
            case "activar_windows":
                mensajewhats = "SELECIONADO: SOFTWARE. PROBLEMA: ACTIVAR WINDOWS.";
                break;
            case "formatear_cpu":
                mensajewhats = "SELECIONADO: SOFTWARE. PROBLEMA: FORMATEAR COMPUTADOR.";
                break;
            case "virus":
                mensajewhats = "SELECIONADO: SOFTWARE. PROBLEMA: TENGO VIRUS.";
                break;
            case "otro":
                mensajewhats = "SELECIONADO: SOFTWARE. SELECCION: OTRO. POROBLEMA:" + " " + input2.value;
                break;
            default:
                mensajewhats = "";
                break;
            }

        let urlwhats = "https://api.whatsapp.com/send/?phone=573044369547&text=" + encodeURIComponent(mensajewhats) + "&type=phone_number&app_absent=0";

        setTimeout(function(){
            window.open(urlwhats);
        },3000);
    }
});
boton7.addEventListener('click', function(e){
    e.preventDefault();
    if (!correcto3) {
        alert('Por favor selecciona el problema que tengas');
        lista3.focus();
        lista3.style.borderColor = "red";
    } else if (lista3.value === "otro" && input3.value.length < 1) {
        alert('Ingresa al menos 1 caracter');
        input3.focus();
        input3.style.borderColor = "red";
    } else {
        var carga = document.querySelector('.loader');
        carga.style.display = "flex";
        setTimeout(function(){
            lista3.style.borderColor = "green";
            input3.style.borderColor = "green";
            carga.style.display = "none";
        },3000);
        let mensajewhats = '';
        switch(lista3.value) {
            case "base_datos":
                mensajewhats = "SELECCION: PROGRAMACION. PROBLEMA: AYUDA EN BASE DE DATOS";
                break;
            case "crear_pagina":
                mensajewhats = "SELECCION: PROGRAMACION. PROBLEMA: CREAR UNA PAGINA WEB.";
                break;
            case "otro":
                mensajewhats = "SELECIONADO: PROGRAMACION. SELECCION: OTRO. POROBLEMA:" + " " + input3.value;
                break;
            default:
                mensajewhats = "";
                break;
            }

        let urlwhats = "https://api.whatsapp.com/send/?phone=573044369547&text=" + encodeURIComponent(mensajewhats) + "&type=phone_number&app_absent=0";

        setTimeout(function(){
            window.open(urlwhats);
        },3000);
    }
});
boton8.addEventListener('click', function(e){
    e.preventDefault();
    if (!correcto4) {
        alert('Por favor selecciona el problema que tengas');
        lista4.focus();
        lista4.style.borderColor = "red";
    } else if (lista4.value === "otro" && input4.value.length < 1) {
        alert('Ingresa al menos 1 caracter');
        input4.focus();
        input4.style.borderColor = "red";
    } else {
        var carga = document.querySelector('.loader');
        carga.style.display = "flex";
        setTimeout(function(){
            lista4.style.borderColor = "green";
            input4.style.borderColor = "green";
            carga.style.display = "none";
        },3000);
        let mensajewhats = '';
        switch(lista4.value) {
            case "cableado":
                mensajewhats = "SELECCION: REDES. PROBLEMA: INSTALACION DE CABLEADO ESTRUCTURADO";
                break;
            case "redes":
                mensajewhats = "SELECCION: REDES. MONITOREAR REDES.";
                break;
            case "otro":
                mensajewhats = "SELECIONADO: REDES. SELECCION: OTRO. POROBLEMA:" + " " + input4.value;
                break;
            default:
                mensajewhats = "";
                break;
            }

        let urlwhats = "https://api.whatsapp.com/send/?phone=573044369547&text=" + encodeURIComponent(mensajewhats) + "&type=phone_number&app_absent=0";

        setTimeout(function(){
            window.open(urlwhats);
        },3000);
    }
});


X.addEventListener('click', function(){
    p.style.display = "block";
    h1.style.display = "block";
    contenedorhardwareandsoftware.style.display = "flex";
    contenedorsoportprinci.style.display = "none";
    lista.selectedIndex = 0;
    input.style.display = "none";
    lista.style.borderColor = "";
    input.style.borderColor = "";
    list_dispositivo.style.borderColor = "";
    list_dispositivo.selectedIndex = 0;
});
X2.addEventListener('click', function(){
    p.style.display = "block";
    h1.style.display = "block";
    contenedorhardwareandsoftware.style.display = "flex";
    contenedorsoportprinci.style.display = "none";
    lista2.selectedIndex = 0;
    input2.style.display = "none";
    lista2.style.borderColor = "";
    input2.style.borderColor = "";
});
X3.addEventListener('click', function(){
    p.style.display = "block";
    h1.style.display = "block";
    contenedorhardwareandsoftware.style.display = "flex";
    contenedorsoportprinci.style.display = "none";
    lista3.selectedIndex = 0;
    input3.style.display = "none";
    lista3.style.borderColor = "";
    input3.style.borderColor = "";
});
X4.addEventListener('click', function(){
    p.style.display = "block";
    h1.style.display = "block";
    contenedorhardwareandsoftware.style.display = "flex";
    contenedorsoportprinci.style.display = "none";
    lista4.selectedIndex = 0;
    input4.style.display = "none";
    lista4.style.borderColor = "";
    input4.style.borderColor = "";
});
X5.addEventListener('click', function(){
    main.style.display = "block";
    contenedorsoportprinci.style.display = "none";
    acercainfo.style.display = "none";
});
acerca.addEventListener('click', function(){
    main.style.display = "none";
    contenedorsoportprinci.style.display = "none";
    acercainfo.style.display = "block";
    acercainfo.style.marginBottom = "100px";
    acercainfo.style.marginTop = "100px";
});
acerca2.addEventListener('click', function(){
    main.style.display = "none";
    contenedorsoportprinci.style.display = "none";
    acercainfo.style.display = "block";
    acercainfo.style.marginBottom = "100px";
    acercainfo.style.marginTop = "100px";
});