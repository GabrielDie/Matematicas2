//let variable1; variable global, puedo usarlo en cualquier lugar

//function sumar(){
    //variable1 = 0;

    //let variable2 = 0;
//variable local = puedo utilizarlo solo en un bloque
//}

//Creamos una variable constante y estamos leyendo el id del boton html
const boton1 = document.getElementById("but1");

boton1.addEventListener("click", sumar);

function sumar(){
    const varnumero1 = Number(document.getElementById("num1").value);
    const varnumero2 = Number(document.getElementById("num2").value);
    const imprimirdivresultado = document.getElementById("al");
    const varresultado = varnumero1 + varnumero2;

    //alert("La suma es: " + varresultado);
    imprimirdivresultado.innerText = varresultado;
}

const boton2 = document.getElementById("but2");

boton2.addEventListener("click", restar);

function restar(){
    const varnumero1 = Number(document.getElementById("rest1").value);
    const varnumero2 = Number(document.getElementById("rest2").value);
    const valordeldivresultado = document.getElementById("ale");
    const varresultado = varnumero1 - varnumero2;

    //alert("La resta es: " + varresultado);
    valordeldivresultado.innerText = varresultado;
}

const boton3 = document.getElementById("but3");

boton3.addEventListener("click", multiplicar);

function multiplicar(){
    const varnumero1 = Number(document.getElementById("mult1").value);
    const varnumero2 = Number(document.getElementById("mult2").value);
    const verresultados = document.getElementById("ml");
    const varresultado = varnumero1 * varnumero2;
   // alert("La multiplicacion es: " + varresultado);
   verresultados.innerText = varresultado;
}

const boton4 = document.getElementById("but4");

boton4.addEventListener("click", Divisiones);

function Divisiones(){
    const varnumero1 = Number(document.getElementById("div1").value);
    const varnumero2 = Number(document.getElementById("div2").value);
    const resultados = document.getElementById("dev");
    const varresultado = varnumero1 / varnumero2;
    //alert("La Division es: " + varresultado);
    resultados.innerText = varresultado;
}

const boton5 = document.getElementById("mostrarn");
boton5 = addEventListener("click", mostrar);

function mostrar(){
    const listas = document.getElementById("listado");
    listas.innerText = " ";
    for (let x=1;x<=100; x=x+1){
        //alert("Numero" + x)
        //console.log(x);

        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item mt-1");
        li.innerText = x;
        listas.appendChild(li);
        

    }
    
}

const boton6 = document.getElementById("but6");

boton6.addEventListener("click", compararcalificacion);

function compararcalificacion(){
    const numero = Number(document.getElementById("calificacion"));
    const resultado = document.getElementById("imprimircal");
    if(numero >= 8){
        resultado.innerText = "Aprobado";
    }
    else {
        resultado.innerText = "Reprobado";
        const audio = document.getElementById("aud");
        audio.play();
    }
       
        
}



