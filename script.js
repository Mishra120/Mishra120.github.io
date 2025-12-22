function openSite(){
  let text = document.getElementById("siteInput").value.toLowerCase().trim();

  if(text === "instagram"){
    window.open("https://instagram.com","_blank");
  }
  else if(text === "youtube"){
    window.open("https://youtube.com","_blank");
  }
  else if(text === "facebook"){
    window.open("https://facebook.com","_blank");
  }
  else{
    alert("Instagram, YouTube ya Facebook likho");
  }
function toggleBio() {
  let bio = document.getElementById("bioBox");
  bio.style.display = bio.style.display === "block" ? "none" : "block";
}

function toggleMenu() {
  let menu = document.getElementById("menuBox");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function toggleDark() {
  document.body.classList.toggle("dark");
}
  
