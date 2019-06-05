AOS.init()

let entertain = document.getElementById('entertain')
let special = document.getElementById("special")

entertain.addEventListener("click", displayToggle)

function displayToggle() {
    if (special.style.display == "none") {
      special.style.display = "block";
    } else {
      special.style.display = "none";
    }
    console.log('clicked')
  }

