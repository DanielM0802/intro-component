const datos=  {  //Objeto necesario para la validacion
    nombre: '',
    apellido: '',
    email: '',
    password: ''
}

document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp(){
    const nombre = document.querySelector('#nombre');
    const apellido = document.querySelector('#apellido');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    nombre.addEventListener('click',llenarObjeto);
    apellido.addEventListener('click',llenarObjeto);
    email.addEventListener('click',llenarObjeto);
    password.addEventListener('click',llenarObjeto);

    const formulario = document.querySelector('.formulario');
    formulario.addEventListener('submit',evento=>{
        evento.preventDefault();

        cleanAlerts();

        let valido = true;
        if(nombre.value===''){
            const input = document.querySelector('.input-nombre');
            createElements(input,'First Name cannot be empty',nombre);
            valido = false;
        }

        if(apellido.value===''){
            const input = document.querySelector('.input-apellido');
            createElements(input,'Last Name cannot be empty',apellido);
            valido = false;
        }
        if(password.value===''){
            const input = document.querySelector('.input-password');
            createElements(input,'Password cannot be empty',password);
            valido = false;
        }

        if(!email.value.includes('@') || !email.value.includes('.') ){
            const input = document.querySelector('.input-email');
            createElements(input,'Looks like this is not an email',email);
            valido = false;
        } 
        if (valido){
            location.reload();
            formulario.reset();
        }
        
    });
}

function createElements(input,mensaje,idInput){

    const alerta = document.createElement('P');
    alerta.classList.add('validacion'); 
    alerta.textContent = mensaje;
    input.appendChild(alerta);

    const format = input.classList.value.split(' ');
    const campo =  document.querySelector(`.${format[1]} .${idInput.classList.value}`);
    if(campo){
        campo.classList.add('red-alert');
    }
    if(idInput===email){
        idInput.classList.add('red-text');
    }
}

function cleanAlerts(){
    if(document.querySelectorAll('.validacion')){
        document.querySelectorAll('.validacion').forEach(elemento=>{
             elemento.remove();
        });
    }

    if(document.querySelectorAll('.red-alert')){
        document.querySelectorAll('.red-alert').forEach(elemento=>{
             elemento.classList.remove('red-alert');
        });
    }

    if(document.querySelector('.red-text')){
        document.querySelector('.red-text').classList.remove('red-text');
    }
}

function llenarObjeto(evento){
    datos[evento.target.id] = evento.target.value;
}