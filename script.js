

function sum (){
    let x = document.getElementById('number1').value; //"4000"
    let y = document.getElementById('number2').value; //"10"

    // console.log(x);
    // console.log(y);

    // let x = 80;
    // let y =90;
    
    let result = parseFloat(x) + parseFloat(y); //webdevelopment
    // return result;
    document.getElementById('result').innerHTML = 'The result is =' + result;

}