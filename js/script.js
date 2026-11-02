// ACCORDION FUNCTION
function setupAccordion() {
  var acc = document.getElementsByClassName("accordion");
  console.log("Found " + acc.length + " accordion buttons"); // for debugging
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}

// LIGHTBOX
function openLightbox(src) {
  document.getElementById("bigImage").src = src;
  document.getElementById("lightbox").style.display = "block";
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// SEARCH
function searchProduct() {
  var input = document.getElementById("searchBox").value.toLowerCase();
  var items = document.getElementById("cakeList").getElementsByTagName("li");
  for (var i = 0; i < items.length; i++) {
    if (items[i].innerHTML.toLowerCase().indexOf(input) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}

// BUTTON COLOR
function orangeColor() {
  document.getElementById("orderBtn").style.backgroundColor = "orange";
}
function whiteColor() {
  document.getElementById("orderBtn").style.backgroundColor = "white";
}

// RUN WHEN PAGE LOAD
document.addEventListener("DOMContentLoaded", function() {
  setupAccordion();
});

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if(name == "" || email == "") {
    alert("Please fill in all required fields");
    return false;
  }
  alert("Thank you! We will contact you about cost & availability.");
  return true;
}
