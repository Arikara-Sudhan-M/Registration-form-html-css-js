document.getElementById("registerButton").addEventListener("click", function(event) {
    event.preventDefault(); 
    
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;

    if (!fname || !lname || !email || !phone || !address || !city) {
        alert("Please fill out all the fields.");
        return;
    }
    

    alert("Thank you for registering, " + fname + " " + lname + "!");

});

