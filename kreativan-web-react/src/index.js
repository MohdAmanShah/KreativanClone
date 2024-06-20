export function init() {
    const navBarLinks = document.querySelectorAll('.nav-item > a');
    const navItems = document.querySelectorAll(".nav-item");
    // const faqHeader = document.querySelectorAll('.ques>header');
    const stats = document.querySelectorAll('[data-value]');
    const Toggler = document.querySelectorAll('div.toggler');
    const SidebarCloseButton = document.querySelector('.close.button');
    const SearchBarCloseButton = document.querySelector('.close.butn.search-bar');
    const SearchButton = document.querySelector('.search.butn');
    const ServicesMenuOptions = document.querySelectorAll('.services-menu>ul>li')
    const Hamburger = document.querySelector('.navtoggle');
    const MobileNavCloseButton = document.querySelector('.close.butn.mobilenavclosebutton');


    MobileNavCloseButton.addEventListener('click', () => {
        document.documentElement.style.setProperty('--mobile-menu-position', '100%')
    })

    Hamburger.addEventListener('click', () => {
        document.documentElement.style.setProperty('--mobile-menu-position', '0%')
    })


    let time = 70;
    let delay = 0;
    Array.from(ServicesMenuOptions).forEach(item => {
        item.style.transition = `opacity ${time}ms ease-in ${delay}ms`;
        delay += time;
    })

    SearchButton.addEventListener('click', () => {
        document.documentElement.style.setProperty("--searchbar-position", '0%');
    })

    SearchBarCloseButton.addEventListener('click', () => {
        document.documentElement.style.setProperty("--searchbar-position", '-100%');
    })

    Array.from(Toggler).forEach(i => {
        i.addEventListener('click', () => {
            document.documentElement.style.setProperty('--sidebar-position', '0%');
        });
    })



    SidebarCloseButton.addEventListener('click', () => {
        document.documentElement.style.setProperty('--sidebar-position', '-100%');
    })




    // window.addEventListener('scroll', event => {
    //     let Bounds = App.getBoundingClientRect();
    //     if (Math.abs(Bounds.top) > window.innerHeight * .75) {
    //         NavBar.style.top = "0";
    //     }
    //     if (Math.abs(Bounds.top) < window.innerHeight * .25) {
    //         NavBar.style.top = "-200px";
    //     }
    // })

    Array.from(navBarLinks).forEach(link => {
        link.addEventListener('click', navButtonHandler);
    })

    function navButtonHandler(event) {
        navItems.forEach(item => {
            item.classList.remove('active');
            item.ne
        })
        event.target.parentElement.classList.add('active');

    }


    // Array.from(faqHeader).forEach(header => {
    //     header.addEventListener('mousedown', faqHeaderHandler);
    // })

    // function faqHeaderHandler(event) {
    //     console.log('clicked');
    //     const tar = event.target.closest('header').nextElementSibling;
    //     tar.classList.toggle("showed");
    // }


    Array.from(stats).forEach(async stat => {
        for (let i = 0; i <= stat.dataset['value']; ++i) {
            stat.innerText = i;
            await sleep(25);
        }
    })


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


        const textBoxes = document.querySelectorAll('.text.slide-up');
        textBoxes.forEach(tb => {
            translateY(tb, tb.offsetHeight - tb.firstElementChild.offsetHeight - 40);
        })

        function translateY(element, pixels) {
            element.style.transform = "translateY(" + pixels + "px)";
        }

}