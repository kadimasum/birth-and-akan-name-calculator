function akanNameCalculator() {

    event.preventDefault();

   let birthDate = parseInt(document.getElementById("birthDate").value);
   let male = document.getElementById("genderMale").value;
   let female = document.getElementById("genderFemale").value;
    

   document.getElementById("results").innerHTML = male;


}