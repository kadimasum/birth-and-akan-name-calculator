function akanNameCalculator() {

    event.preventDefault();

    // Collect form input


    let inputDate = document.getElementById("birthDate").value;
    let gender = document.getElementsByName("gender");
   
        
    // Get day

    
    let date = new Date(inputDate);
    let birthDate = date.getDay();
     

    // Store Akan names in Arrays


    let maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    
    // Find male Akan from birthDate

    
    if (document.getElementById("genderMale").checked) {

        document.getElementById("results").innerHTML = maleAkan[birthDate];

        }

        
    // Find male Akan from birthDate


    else if(document.getElementById("genderFemale").checked) {

        document.getElementById("results").innerHTML = femaleAkan[birthDate];

        }


    // Warning


    else {

        document.getElementById("warning").innerHTML = 
        "*Enter your birth date and select one option from the gender field";
        
    }
  


}