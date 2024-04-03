const btn = document.getElementById('calculate-button');

function myFunction(){
    var x =document.getElementById("sex-man").value;
    document.getElementById("sex-woman").innerHTML = x;
}


btn.addEventListener('click', function(){

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height == '' || weight == ''){
        alert('Please fill out the input fields!');
        return;
    }

    // BMI = Berat Badan (kg) /  (Tinggi Badan(cm)*Tinggi Badan(cm))



    height = height / 100

    let BMI = (weight / (height * height));

    BMI = BMI.toFixed(2);

    document.querySelector('#hasil').innerHTML = BMI;

    let status = '';

    if(BMI < 18.5){
        status = "Kekurangan Berat Badan";

    }
    if(BMI >=18.5 && BMI < 25){
        status = "Normal (ideal)";
    }

    if(BMI >=25 && BMI < 30){
        status = "Kelebihan Berat Badan";
    }

    if(BMI >=30){
        status = "Kegemukan (obesitas)";
    }
    document.querySelector('.comment').innerHTML = `komentar: 
    <span id="comment">${status}</span>`;
    function myFunction(){
        var x =document.getElementById("sex-man").value;
        document.getElementById("sex-woman").innerHTML = x;
    }
    document.getElementById('#gender').innerHTML = x;
   

});
