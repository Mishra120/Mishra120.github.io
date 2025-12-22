function openSite() {
  let text = document.getElementById("siteInput").value.toLowerCase().trim();

  if (text === "instagram") {
    window.open(
      "https://www.instagram.com/officialchandanmishra21",
      "_blank"
    );
  } 
  else if (text === "youtube") {
    window.open(
      "https://www.youtube.com/@chandan_bhaktivibes",
      "_blank"
    );
  } 
  else if (text === "facebook") {
    window.open(
      "https://www.facebook.com/share/1JfNGJaEmj/",
      "_blank"
    );
  } 
  else {
    alert("Just type: instagram, youtube or facebook 👍");
  }
}
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
let cropper{
  
function openCrop(){
  document.getElementById("fileInput").click();
}

document.getElementById("fileInput").addEventListener("change", function(e){
  let file = e.target.files[0];
  let reader = new FileReader();

  reader.onload = function(){
    document.getElementById("cropBox").style.display = "block";
    let img = document.getElementById("cropImage");
    img.src = reader.result;

    cropper = new Cropper(img, {
      aspectRatio: 1,
      viewMode: 1
    });
  };
  reader.readAsDataURL(file);
});

function applyCrop(){
  let canvas = cropper.getCroppedCanvas({
    width: 200,
    height: 200
  });

  document.getElementById("profilePic").src = canvas.toDataURL();
  document.getElementById("cropBox").style.display = "none";
  cropper.destroy();
}
}
