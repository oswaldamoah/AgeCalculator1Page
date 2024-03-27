function calculateAge() {
    const fullName = document.getElementsByName("fname")[0]?.value;
    const dobString = document.getElementsByName("dateOfBirth")[0]?.value;

    // Get the current date
    const currentDate = new Date();

// Example: Date to subtract (replace with your desired date)
// the date argument is gotten from an html form
    const doB = new Date(dobString); 
    const currentMillis = currentDate.getTime();
    const doBMillis = doB.getTime();
    const age  = currentMillis - doBMillis;
    const ageInYears = Math.floor(age / (1000 * 60 * 60 * 24 * 365));


  
    // Display Name
    const nameResultElement = document.getElementById("nameResult");
    nameResultElement.textContent = fullName;

    // Display Age
    const ageResultElement = document.getElementById("ageResult");
    ageResultElement.textContent = ageInYears;

     // Unhide the response element
  const responseElement = document.getElementById("response");
  responseElement.style.display = "block"; // Show the element


}
