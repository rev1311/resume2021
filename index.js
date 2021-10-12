function navTransistion() {
    const menu = document.querySelector('.nav-menu-btn');
    const nav = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    menu.addEventListener('click', function () {
        nav.classList.toggle('nav-active');

        links.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
            link.style.animation = `navAnimate 0.5s ease forwards ${index / 7 + 0.3 }s`;
            }
        });

        menu.classList.toggle('shift');
    });


}

navTransistion();