document.getElementById("CalcAge").addEventListener("click", calculateAge);

function calculateAge() {
    var dobString = document.getElementById("DOB").value;

    // Validate the date format (DD/MM/YYYY)
    var dobParts = dobString.split('/');
    if (dobParts.length !== 3) {
        alert("Please enter the date of birth in the format: DD/MM/YYYY");
        return;
    }
    var day = parseInt(dobParts[0]);
    var month = parseInt(dobParts[1]) - 1; // Month starts from 0 in JavaScript Date object
    var year = parseInt(dobParts[2]);

    // Validate the input date
    var dob = new Date(year, month, day);
    if (isNaN(dob.getTime())) {
        alert("Invalid date of birth. Please enter a valid date.");
        return;
    }

    var today = new Date();

    var years = today.getFullYear() - dob.getFullYear();
    var months = today.getMonth() - dob.getMonth();
    var days = today.getDate() - dob.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        var prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, dob.getDate());
        days = Math.floor((today - prevMonth) / (1000 * 60 * 60 * 24));
    }

    var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dob.getDay()];

    // Handle the case where birth date is the same as current date
    if (years === 0 && months === 0 && days === 0) {
        var ageString = "You were born today!";
    } else {
        var ageString = years + " years, " + months + " months, and " + days + " days old. You were born on " + dayOfWeek + ".";
    }

    document.getElementById("displayAge").style.visibility = "visible";
    document.getElementById("age").innerText = ageString;
}