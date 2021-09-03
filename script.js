$(document).ready(function(){
    navbar_effects();
    active();
    skills_tabs();
});

function navbar_effects() {

    var navbar = document.getElementById('header')
    var items = document.getElementsByClassName('nav-item');

    if($(document).width() < 1000) {
        navbar.style.backgroundColor ='#1f1925';
        navbar.style.padding = '0%';
        navbar.style.borderBottom = '3px solid #018786';
    }

    window.onscroll = function() {myFunction()};

    function myFunction() {
        if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            navbar.style.backgroundColor ='#1f1925';
            navbar.style.padding = '0%';
            navbar.style.borderBottom = '3px solid #018786';
            for(var i = 0; i < items.length; i++) {
                items[i].style.padding = '0%';
            }
        }else {
            if ($(document).width() > 1000) {
                navbar.style.backgroundColor = 'transparent';
                navbar.style.padding = '0.5%, 6%, 0.5%, 6%';
                navbar.style.borderBottom = 'none';
                for(var i = 0; i < items.length; i++) {
                    items[i].style.padding = '0.5% 6%';
                }
            }
        }
    }
}

function skills_tabs() {
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget)
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active')
            })

            tabs.forEach(tab => {
                tab.classList.remove('active')
            })

            tab.classList.add('active')
            target.classList.add('active')
        })
    })
}

function active() {
    $( '.navbar .navbar-nav a' ).on( 'click', function () {
        $( '.navbar .navbar-nav' ).find( 'a.active' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
    });
}