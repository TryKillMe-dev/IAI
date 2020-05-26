const mq = window.matchMedia( "(max-width: 400px)" );

if (mq.matches) {
$( 'li.submenu a[href="#"]').click(
      function(e) {
      	e.preventDefault();
        $(this).next().toggle();
        return false;
    });
}


