function akanNameCalculator() {

    event.preventDefault();

   let birthDate = parseInt(document.getElementById("birthDate").value);
   let gender = document.getElementById("gender").value;
    

   document.getElementById("results").innerHTML = gender;


}