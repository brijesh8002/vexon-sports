// load header
fetch("./assets/include/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // after loading header, attach events
    initNavbar();
  });

// load footer
fetch("./assets/include/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

// navbar functions
function initNavbar() {
  // mobile menu
  window.toggleMenu = function () {
    document.getElementById("navLinks").classList.toggle("active");
  };

  // dropdown click (mobile)
  const tourLink = document.querySelector(".tour-link");
  // const tourIcon = document.querySelector(".tour-link i");
  if (tourLink) {
    tourLink.addEventListener("click", function () {
      document.querySelector(".tour-drop").classList.toggle("active");

    });
  }
}

// Tour Detail page
function toggleBox() {
  const elOne = document.getElementById("trip01");
  const elTwo = document.getElementById("trip02");

  if (elOne.style.display != "none") {
    elTwo.style.display = "block";
    elOne.style.display = "none";
  } else {
    elTwo.style.display = "none";
    elOne.style.display = "grid";
  }
}

// Tour Form===============================================>

function ae4Count(btn, val) {
  let span = btn.parentElement.querySelector("span");
  let count = parseInt(span.innerText);

  count += val;
  if (count < 0) count = 0;

  span.innerText = count;
}

// Time active toggle
document.querySelectorAll(".ae4-time").forEach((btn) => {
  btn.onclick = () => {
    document
      .querySelectorAll(".ae4-time")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  };
});

function activeToggle(selector) {
  document.querySelectorAll(selector).forEach((btn) => {
    btn.onclick = () => {
      document
        .querySelectorAll(selector)
        .forEach((b) => b.classList.remove("active"));

      btn.classList.add("active");
    };
  });
}

// package toggle
activeToggle(".ae4-option");

// hotel toggle
activeToggle(".hotel-choose");

// Tour Form===============================================>

// customers Review and feedback section

// Modal
function aeReviewOpen() {
  document.getElementById("aeReviewModal").style.display = "flex";
}
function aeReviewClose() {
  document.getElementById("aeReviewModal").style.display = "none";
}

// Star rating
let rating = 0;
document.querySelectorAll(".ae-review-star-input span").forEach((star) => {
  star.onclick = () => {
    rating = star.getAttribute("data-val");

    document
      .querySelectorAll(".ae-review-star-input span")
      .forEach((s) => s.classList.remove("active"));

    for (let i = 0; i < rating; i++) {
      document
        .querySelectorAll(".ae-review-star-input span")
      [i].classList.add("active");
    }
  };
});

// Image preview
document
  .querySelector(".ae-review-file")
  .addEventListener("change", function () {
    let preview = document.querySelector(".ae-review-preview");
    preview.innerHTML = "";

    Array.from(this.files).forEach((file) => {
      let img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      preview.appendChild(img);
    });
  });


// Close on outside click
document.getElementById("aeReviewModal").addEventListener("click", function (e) {
  if (e.target === this) {
    this.style.display = "none";
  }
});

// Submit
function aeReviewSubmit() {
  // alert("Review Submitted (frontend demo)");
  aeReviewClose();
}



// Wishlist 
function aeWish(btn) {
  btn.classList.toggle("active");

  let icon = btn.querySelector("i");

  if (btn.classList.contains("active")) {
    icon.classList.remove("bi-heart");
    icon.classList.add("bi-heart-fill");
    icon.style.color = 'red';
  } else {
    icon.classList.remove("bi-heart-fill");
    icon.classList.add("bi-heart");
    icon.style.color = 'black';
  }
}




// ======================Booking Detail Page

function closeAllSteps() {
  document.querySelectorAll(".step-box").forEach((step) => {
    step.classList.remove("active");
    step.classList.add("inactive");
  });
}

function nextStep(step) {
  let current = document.getElementById("step" + step);
  let next = document.getElementById("step" + (step + 1));

  // collapse current
  current.classList.remove("active");
  current.classList.add("inactive");

  // show edit button
  current.querySelector(".edit-btn").style.display = "block";

  if (next) {
    closeAllSteps();

    next.classList.remove("inactive");
    next.classList.add("active");

    next.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function editStep(step) {
  closeAllSteps();

  let current = document.getElementById("step" + step);
  current.classList.remove("inactive");
  current.classList.add("active");


  current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}


// Login/ Register Script
function showForm(type) {
  document.getElementById("login").classList.add("hidden");
  document.getElementById("signup").classList.add("hidden");
  document.getElementById("forgot").classList.add("hidden");
  document.getElementById("resetNew").classList.add("hidden");

  document.getElementById(type).classList.remove("hidden");
}


// User Dropdown
function toggleUserMenu(e) {
  e.preventDefault();

  const dropdown = document.getElementById("userDropdown");
  const button = e.currentTarget;

  dropdown.classList.toggle("active");
  button.classList.toggle("active");
}

// scroll pe remove
window.addEventListener("scroll", () => {
  const dropdown = document.getElementById("userDropdown");
  const button = document.querySelector(".contact-btn");

  dropdown.classList.remove("active");
  button.classList.remove("active");
});




// Tour Detail Page Itenary section

function toggleStops(){

    const more = document.querySelector(".ae-more");
    const btn = document.getElementById("aeBtn");

    more.classList.toggle("ae-hidden");

    btn.classList.toggle("active");

    if(more.classList.contains("ae-hidden")){

        btn.querySelector("span").innerText = "Show 3 more stops";

    }else{

        btn.querySelector("span").innerText = "Show fewer stops";
    }
}


