function akanNameCalculator() {

    event.preventDefault();

    // Collect form input

    let inputDate = document.getElementById("birthDate").value;
    let male = document.getElementById("genderMale").value;
    let female = document.getElementById("genderFemale").value;
        
    // Get day

    let date = new Date(inputDate);
    let birthDate = date.getDay();

    // Store Akan names in Arrays

    let maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

   document.getElementById("results").innerHTML = birthDate;


}