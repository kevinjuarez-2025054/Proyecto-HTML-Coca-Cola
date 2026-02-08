document.addEventListener("DOMContentLoaded",()=>{
    const boton = document.getElementById("btnIngresar");
    boton.addEventListener("click",()=>{
        let usuario = document.getElementById("usuario").value;
        let password = document.getElementById("password").value;

        if(usuario === "admin" && password === "1234"){
            alert("Login Exitoso");
            window.location.href = "Productos.html";
        }else{
            alert("Usuarios o contraseña incorrectos");
        }
    });
});