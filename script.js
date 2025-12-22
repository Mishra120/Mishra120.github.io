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

  window.toggleMenu = function () {
    let menu = document.getElementById("menuBox");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
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
  window.addEventListener("load", function () {
  if (!localStorage.getItem("popupAccepted")) {
    document.getElementById("welcomePopup").style.display = "flex";
  }
});

function acceptPopup() {
  localStorage.setItem("popupAccepted", "yes");
  document.getElementById("welcomePopup").style.display = "none";
}

function closePopup() {
  document.getElementById("welcomePopup").style.display = "none";
}
});
});
