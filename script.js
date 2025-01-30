document.addEventListener("DOMContentLoaded", function() {
        
    window.addEventListener("scroll", function() {
        var navbar = document.getElementsByClassName('navbar')[0];
        var scrollUpBtn = document.getElementsByClassName('scroll-up-btn')[0];
        
        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
        
        if (window.scrollY > 500) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
    });

    var typingElements = document.querySelectorAll(".typing, .typing-2");
    typingElements.forEach(function(element) {
        new Typed(element, {
            strings: ["Web Developer", "Frontend Developer", "Designer", "Freelancer", "Fullstack Developer"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });
    });

    var carouselElement = document.querySelector('.carousel');
    if (carouselElement) {
        var owl = new OwlCarousel(carouselElement, {
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false
                }
            }
        });
    }
});
