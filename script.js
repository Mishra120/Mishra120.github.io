document.addEventListener("DOMContentLoaded", function() {

  // Open Social Sites
  function openSite() {
    let text = document.getElementById("siteInput").value.toLowerCase().trim();
    if (text === "instagram") window.open("https://www.instagram.com/officialchandanmishra21/", "_blank");
    else if (text === "youtube") window.open("https://www.youtube.com/@chandan_bhaktivibes", "_blank");
    else if (text === "facebook") window.open("https://www.facebook.com/share/1JfNgJAEmj/", "_blank");
    else alert("Type: instagram, youtube or facebook");
  }
  window.openSite = openSite;

  // Menu toggle
  let menuTimer = null;
  window.toggleMenu = function() {
    let menu = document.getElementById("menuBox");
    if(!menu) return;
    if(menu.style.display === "block") {
      menu.style.display = "none";
      clearTimeout(menuTimer);
      return;
    }
    menu.style.display = "block";
    clearTimeout(menuTimer);
    menuTimer = setTimeout(()=>{ menu.style.display="none"; }, 2000);
  }

  // Bio toggle
  window.toggleBio = function() {
    let bio = document.getElementById("bioBox");
    if(!bio) return;
    bio.style.display = (bio.style.display==="block") ? "none" : "block";
  }

  // Dark Mode
  window.toggleDark = function() {
    document.body.classList.toggle("dark");
  }

  // Cropper
  let cropper;
  window.openCrop = function() {
    let fileInput = document.getElementById("fileInput");
    if(fileInput) fileInput.click();
  }

  let fileInput = document.getElementById("fileInput");
  if(fileInput){
    fileInput.addEventListener("change", function(e){
      let file = e.target.files[0];
      if(!file) return;
      let reader = new FileReader();
      reader.onload = function(){
        let cropBox = document.getElementById("cropBox");
        let img = document.getElementById("cropImage");
        if(cropBox && img){
          cropBox.style.display = "block";
          img.src = reader.result;
          cropper = new Cropper(img, { aspectRatio: 1, viewMode: 1 });
        }
      }
      reader.readAsDataURL(file);
    });
  }

  window.applyCrop = function(){
    if(!cropper) return;
    let canvas = cropper.getCroppedCanvas({width:200, height:200});
    let profilePic = document.getElementById("profilePic");
    let cropBox = document.getElementById("cropBox");
    if(profilePic) profilePic.src = canvas.toDataURL();
    if(cropBox) cropBox.style.display="none";
    cropper.destroy();
    cropper = null;
  }

  // Click outside to hide menu/bio
  document.addEventListener("click", function(e){
    let menu = document.getElementById("menuBox");
    let bio = document.getElementById("bioBox");
    let dots = document.getElementById("menuBtn");
    let bioBtn = document.getElementById("bioBtn");

    // Agar koi element undefined ho, ignore
    if(!menu || !bio || !dots || !bioBtn) return;

    if(!menu.contains(e.target) &&
       !bio.contains(e.target) &&
       !dots.contains(e.target) &&
       !bioBtn.contains(e.target)){
         menu.style.display="none";
         bio.style.display="none";
    }
  });

});

