// console.log(localStorage.getItem("cookiesAccepted"));

// scroll

function prev() {
  document.getElementById("scrollContainer").scrollLeft -= 270;
}

function next() {
  document.getElementById("scrollContainer").scrollLeft += 270;
}

// Nav Bar

const toggleBtn = document.querySelector(".menu");
const toggleBtnIcon = toggleBtn.querySelector("i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList.toggle("fa-bars", !isOpen);
  toggleBtnIcon.classList.toggle("fa-xmark", isOpen);
};

// Nav Bar Ends

// Create cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Set cookie consent
function acceptCookieConsent() {
  deleteCookie("user_cookie_consent");
  setCookie("user_cookie_consent", 1, 30);
  document.getElementById("cookieNotice").style.display = "none";
}

let cookie_consent = getCookie("user_cookie_consent");
if (cookie_consent != "") {
  document.getElementById("cookieNotice").style.display = "none";
} else {
  document.getElementById("cookieNotice").style.display = "block";
}
