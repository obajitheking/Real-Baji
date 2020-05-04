function bmi() {
    let fee = document.querySelector('.feet').value;

    let weight = document.querySelector('.weight').value;

    let bmi = weight / Math.pow(fee, 2);

    if (bmi < 18.5) {
        document.querySelector('p').innerHTML = 'Your Body Mass Index (BMI) is -: ' + (Math.round(bmi * 100) / 100).toFixed(2) + '<br>' + 'Your Index Value is in Under Weight';
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        document.querySelector('p').innerHTML = 'Your Body Mass Index (BMI) is -: ' + (Math.round(bmi * 100) / 100).toFixed(2) + '<br>' + 'Your Index Value is Healthy';
    }
    else if (bmi > 25.0) {
        document.querySelector('p').innerHTML = 'Your Body Mass Index (BMI) is -: ' + (Math.round(bmi * 100) / 100).toFixed(2) + '<br>' + 'Your Index Value is in Over Weight';
    }
}

document.querySelector('.btn').addEventListener('click', bmi);

