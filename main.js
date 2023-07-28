

tonne.addEventListener('click', function(){
    convertType = 'tonne';
    direct.innerHTML = 'Type in a number of tonne';
})

kilograms.onclick = function(){
    convertType = 'kilograms';
    direct.innerHTML = 'Type in a number of kilogram';  
}

function myFunction(){
    convertType = 'stone';
    direct.innerHTML = 'Type in a number of stone';
}

function myFunction2(){
    convertType = 'ounces';
    direct.innerHTML = 'Type in a number of ounces';
}

    ounces.onclick = function(){
    myFunction2()
}


    form.onsubmit = function(event){
         event.preventDefault();


    var number = document.getElementById('number').value;

    if (number) {
        if (convertType == 'tonne'){
            var result = (number * 1000);
            output.innerHTML = number + 'tonnes' + ' ' + '=' + ' ' + result + 'kilograms'
            // output.innerHTML = `${number} tonnes = ${result} kilogram`;
        }
        else if (convertType == 'kilograms') {
            var result = (number * 0.001);
            output.innerHTML = `${number} kilograms = ${result} tonnes`;
        }
        else if (convertType == 'stone') {
            var result = (number * 224);
            output.innerHTML = `${number} stone = ${result} ounce`;
        }
        else if (convertType == 'ounces') {
            var result = (number * 0.00446).toFixed(2);
            output.innerHTML = `${number} ounce = ${result} stones`;
        }
    } else {
        output.innerHTML = 'Please enter a value!';
    }
}