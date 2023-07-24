// Color and theme style overrides apply to outer app container
const themer = document.querySelector("#app-container");

function changeTheme(event) {
  //create a theme object that can be assigned a value
  var theme = event.value;
  // choose to apply the event to the app container's element
  themer.className = // change the app container's class name to the theme selected
    theme;
}


// Size overrides apply to assessment wrapper
const ageThemer = document.querySelector("#gm-learnosity-assessment-wrapper");

function changeAgeTheme(event) {
  //create a theme object that can be assigned a value
  var theme = event.value;
  // choose to apply the event to the app container's element
  ageThemer.className = // change the app container's class name to the theme selected
    theme;
}
