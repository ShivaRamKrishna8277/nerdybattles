document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loadheader").innerHTML = `
        <div class="secClr_bg">
            <section class="container-fluid d-flex justify-content-between align-items-center p5x py-2">
                <div class="row">
                    <div class="col" id="nav-brand">
                        <section>
                            <a href="#" class="text-decoration-none d-flex align-items-center">
                                <img src="assets/images/LOGO.svg" alt="" style="height: 40px; width: auto;">
                                <h1 class="roFont m-0 ms-2 fs-4" style="color: #FB8933;">Nerdy <span style="color: #8FFF00;" class="roFont">Battles</span></h1>
                            </a>
                        </section>
                    </div>
                </div>
                <div class="row navLinks">
                    <div class="col d-none d-lg-block">
                        <ul class="d-flex gap-5 m-0">
                            <li class="navLink"><a href="about.html">About Us</a></li>
                            <li class="navLink"><a href="login.html">Login</a></li>
                        </ul>
                    </div>
                    <div class="col d-block d-lg-none">
                        <button class="btn" id="openMenu" onclick="openMenu()"><img src="assets/images/hamMenuIcon.svg" alt="" height="20"></button>
                        <div class="mobileMenuWrapper position-absolute w-100 start-0 top-0 d-flex justify-content-between align-items-start bg-black z-3 p-5">
                            <ul class="m-0 p-0 vh-100">
                                <li class="mobileMenuLinks"><a href="about.html">About Us</a></li>
                                <li class="mobileMenuLinks"><a href="login">Login</a></li>
                            </ul>
                        <button class="btn" id="closeMenu" onclick="closeMenu()"><img src="assets/images/close_menu.svg" alt="" height="20"></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>`
})