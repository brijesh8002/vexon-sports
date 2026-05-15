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



/* =========================
   MOBILE FILTER TOGGLE
========================= */

function vxToggleFilter() {

  const sidebar = document.getElementById("vxPremiumFilter");

  sidebar.classList.toggle("active");

}


/* =========================
   FILTER DROPDOWN
========================= */

function vxFilterDropdown(element) {

  const parent = element.parentElement;

  parent.classList.toggle("active");

}


/* =========================
   CLOSE FILTER ON OUTSIDE CLICK
========================= */

document.addEventListener("click", function(e){

  const sidebar = document.getElementById("vxPremiumFilter");

  const filterBtn = document.querySelector(".vx-mobile-filter-btn");

  if(
    !sidebar.contains(e.target) &&
    !filterBtn.contains(e.target)
  ){
    sidebar.classList.remove("active");
  }

});




document
            .querySelectorAll(
                '.vxd-thumb img'
            )

            .forEach(

                img => {

                    img.onclick = () => {

                        document
                            .getElementById(
                                'mainImg'
                            )
                            .src =
                            img.src;

                    }

                }

            )