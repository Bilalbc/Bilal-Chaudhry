

$(document).ready(function(){
    navbar_effects();
    active();
    skills_tabs();
});



function navbar_effects() {
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById('header')
    var items = document.getElementsByClassName('nav-item');

    function myFunction() {
        if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            navbar.style.backgroundColor ='#1f1925';
            navbar.style.padding = '0%';
            navbar.style.borderBottom = '3px solid #018786';
            for(var i = 0; i < items.length; i++) {
                items[i].style.padding = '0%';
            }
        }else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.padding = '0.5%, 6%, 0.5%, 6%';
            navbar.style.borderBottom = 'none';
            for(var i = 0; i < items.length; i++) {
                items[i].style.padding = '0.5% 6%';
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

// function active_section() {
//     // Cache selectors
//     var lastId,
//     topMenu = $(".navbar"),
//     topMenuHeight = topMenu.outerHeight()+1,
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function(){
//         var item = $($(this).attr("href"));
//         if (item.length) { return item; }
//     });

//     button = $(".button");

//     // Bind click handler to menu items
//     // so we can get a fancy scroll animation
//     menuItems.click(function(e){
//         var href = $(this).attr("href"),
//             offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//         $('html, body').stop().animate({
//             scrollTop: offsetTop
//         }, 850);
//         e.preventDefault();
//     });

//     button.click(function(e){
//         var href = $(this).attr("href"),
//             offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//         $('html, body').stop().animate({
//             scrollTop: offsetTop
//         }, 850);
//         e.preventDefault();
//     });

//     // Bind to scroll
//     $(window).scroll(function(){
//         // Get container scroll position
//         var fromTop = $(this).scrollTop()+topMenuHeight;

//         // Get id of current scroll item
//         var cur = scrollItems.map(function(){
//             if ($(this).offset().top < fromTop)
//             return this;
//         });
//         // Get the id of the current element
//         cur = cur[cur.length-1];
//         var id = cur && cur.length ? cur[0].id : "";

//         if (lastId !== id) {
//             lastId = id;
//             // Set/remove active class
//             menuItems
//                 .parent().removeClass("active")
//                 .end().filter("[href=#"+id+"]").parent().addClass("active");
//         }
//     });
// }



