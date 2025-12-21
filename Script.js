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
}
