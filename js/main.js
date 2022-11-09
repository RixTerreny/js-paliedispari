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