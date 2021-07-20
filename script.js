

$(document).ready(function()
{
    applyActive();
    navbar_effects();
});

function applyActive()
{
    var active_menu = $('nav a').click(function(){
        active_menu.removeClass('active');
        $(this).addClass('active');
    });
}

function navbar_effects() {
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById('header')
    var items = document.getElementsByClassName('list_e');

    function myFunction() {
        if(document.body.scrollTop > 870 || document.documentElement.scrollTop > 870) {
            navbar.style.padding = '0.5%';
            navbar.style.backgroundColor ='#222222';
            for(var i = 0; i < items.length; i++) {
                items[i].style.padding = '0.5%';
            }
        }else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.padding = '2%';
            for(var i = 0; i < items.length; i++) {
                items[i].style.padding = '0.5% 6%';
            }

        }
    }
}


