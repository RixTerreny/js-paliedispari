const btn = document.getElementById("btn");

function palindromo (){
    let pal = document.getElementById("parola");
    console.log(pal.value);
    const parolaCapovolta = pal.value.split("").reverse().join("");
    console.log(parolaCapovolta);
    if(pal.value == parolaCapovolta){
        console.log("si " +pal.value+ " è una parola palindroma");
        console.log("");
    }else{
        console.log("no " +pal.value+ " non è una parola palindroma");
        console.log("");
    }
}

btn.addEventListener("click", function(){
    palindromo();
});


//second part
const btnPari = document.getElementById("btn-pari");

function pariDispari(){
    let numFinale = parseInt(num.value) + Math.floor(Math.random() * 10)
    console.log(numFinale);
    
    let pari
    if(numFinale % 2 == 0){
        pari=true;
    }
    else{
        pari=false;
    }

    if(pari == true && scelta.value == "pari"){
        console.log("hai vinto");
    }
    else if(pari == false && scelta.value == "dispari"){
        console.log("hai vinto");
    }
    else{
        console.log("hai perso");
    }   
}

btnPari.addEventListener("click", function(){
    const num = document.getElementById("num");
    const scelta = document.getElementById("scelta");
    pariDispari();
    console.log("");
});