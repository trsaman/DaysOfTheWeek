var theDay = prompt("Enter the day of the week: ");
var nameDay = theDay.toUpperCase();

switch (nameDay) {
  case "MONDAY":
    document.write("The day that Garfield hates.");
    break;
  case "TUESDAY":
    document.write("Mitch Albom visits his professor.");
    break;
  case "WEDNESDAY":
    document.write("Pugsley's older sister.");
    break;
  case "THURSDAY":
    document.write("Short-lived throwback day fad.");
    break;
  case "FRIDAY":
    document.write("Unlucky 13th days.");
    break;
  case "SATURDAY":
    document.write("In honor of Saturn.");
    break;
  case "SUNDAY":
    document.write("The day before the day Garfield hates.");
    break;
  default:
    document.write("NOT A VALID DAY. GO BACK TO SCHOOL.");
    break;
}
