document.getElementById('submit').addEventListener('click',bmi);

function bmi(e){
    const weight=document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    
    const bmi= (weight/(height*height))*10000;

    console.log(bmi);
    document.getElementById('bmiResult').innerText=` Your BMI is ${bmi}`;
    
    

    e.preventDefault();

}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);
});
