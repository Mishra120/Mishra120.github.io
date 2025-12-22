document.addEventListener("DOMContentLoaded", function () {

  function openSite() {
    let text = document.getElementById("siteInput").value.toLowerCase().trim();

    if (text === "instagram") {
      window.open("https://www.instagram.com/officialchandanmishra21/", "_blank");
    } else if (text === "youtube") {
      window.open("https://www.youtube.com/@chandan_bhaktivibes", "_blank");
    } else if (text === "facebook") {
      window.open("https://www.facebook.com/share/1JFNgJAEmj/", "_blank");
    } else {
      alert("Type: instagram, youtube or facebook");
    }
  }

  window.openSite = openSite;

  let menuTimer = null;

window.toggleMenu = function () {
  let menu = document.getElementById("menuBox");

  // Agar already open hai to close
  if (menu.style.display === "block") {
    menu.style.display = "none";
    clearTimeout(menuTimer);
    return;
  }

  // Open menu
  menu.style.display = "block";

  // Purana timer clear
  clearTimeout(menuTimer);

  // 2 second baad auto close
  menuTimer = setTimeout(() => {
    menu.style.display = "none";
  }, 2000);
};
  window.toggleBio = function () {
    let bio = document.getElementById("bioBox");
    bio.style.display = bio.style.display === "block" ? "none" : "block";
  };

  window.toggleDark = function () {
    document.body.classList.toggle("dark");
  };
  let cropper;

  window.openCrop = function () {
    document.getElementById("fileInput").click();
  };

  let fileInput = document.getElementById("fileInput");

  fileInput.addEventListener("change", function (e) {
    let file = e.target.files[0];
    if (!file) return;

    let reader = new FileReader();
    reader.onload = function () {
      document.getElementById("cropBox").style.display = "block";
      let img = document.getElementById("cropImage");
      img.src = reader.result;

      cropper = new Cropper(img, {
        aspectRatio: 1,
        viewMode: 1,
      });
    };
    reader.readAsDataURL(file);
  });

  window.applyCrop = function () {
    let canvas = cropper.getCroppedCanvas({ width: 200, height: 200 });
    document.getElementById("profilePic").src = canvas.toDataURL();
    document.getElementById("cropBox").style.display = "none";
    cropper.destroy();
  };
document.addEventListener("click", function (e) {
  let menu = document.getElementById("menuBox");
  let bio = document.getElementById("bioBox");
  let dots = document.getElementById("menuBtn"); // 3 dot button
  let bioBtn = document.getElementById("bioBtn"); // bio open button

  // Agar click menu, bio, ya buttons ke bahar hua
  if (
    !menu.contains(e.target) &&
    !bio.contains(e.target) &&
    !dots.contains(e.target) &&
    !bioBtn.contains(e.target)
  ) {
    menu.style.display = "none";
    bio.style.display = "none";
  }
});
});
