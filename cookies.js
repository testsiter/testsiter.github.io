function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  let secure = location.protocol === 'https:' ? 'Secure;' : '';
  let sameSite = 'SameSite=Lax;';
  document.cookie = `${cname}=${cvalue};${expires};path=/;${secure}${sameSite}`;
  console.log(`Setting cookie: ${cname}=${cvalue}; ${expires}; path=/; ${secure} ${sameSite}`);
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      console.log(`Getting cookie: ${cname}=${c.substring(name.length, c.length)}`);
      return c.substring(name.length, c.length);
    }
  }
  console.log(`Cookie ${cname} not found`);
  return "";
}

function checkCookie() {
  console.log("Checking cookies...");
  let user = getCookie("username");
  if (user) {
    let time = new Date(parseInt(user));
    alert("Welcome again. Your last visit was at: " + time);
    console.log("User found, updating visit time");
    let date = new Date();
    let timeTrack = date.getTime();
    setCookie("username", timeTrack.toString(), 365);
  } else {
    alert("Welcome to my homepage");
    console.log("No user found, setting new cookie");
    let date = new Date();
    let timeTrack = date.getTime();
    setCookie("username", timeTrack.toString(), 365);
  }
}

window.onload = checkCookie;