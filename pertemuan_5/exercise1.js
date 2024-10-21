function hitungBMI(berat, tinggi) {
    tinggi = tinggi / 100;

    let bmi = berat / (tinggi * tinggi);

    return bmi;
}


let berat = 70; 
let tinggi = 170;

let bmi = hitungBMI(berat, tinggi);
console.log("BMI Anda adalah: " + bmi.toFixed(2));