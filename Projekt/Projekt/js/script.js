const mq = window.matchMedia("(max-width: 400px)");

if (mq.matches) {
    $('li.submenu a[href="#"]').click(
        function (e) {
            e.preventDefault();
            $(this).next().toggle();
            return false;
        });



    



    function myFunction() {
        var x = document.getElementById("tpmenu");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }




    $('#big-slider').slick({
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        adaptiveHeight: true

    });

    $('#small-slider').slick({

        slidesToShow: 2,
        slidesToScroll: 1
    });


    $('#seo-slider').slick();

    $('.mid-slider').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 1,
        slidesToScroll: 1,

    });


    $('#slider_p').slick();

    
    
    
    // Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var rozmiar = document.getElementById("rozmiar");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 

    window.onload = function(){
    btn.onclick = function (event) {
    if (event.target == myBtn && rozmiar.value == "" || event.target == myBtn && rozmiar.value == "off") {


        modal.style.display = "flex";
    } else if (event.target == myBtn && rozmiar.value == "on") {
        modal2.style.display = "flex";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
   
}
span2.onclick = function () {
   
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target == modal2 ) {
        modal.style.display = "none";
        modal2.style.display = "none";
    }
}
    }
    
    
    
    $(document).ready(function(){
    // HTML markup implementation, cover mode
    $( '#menu' ).multilevelpushmenu({
        containersToPush: [$( '#pushobj' )],
        mode: 'cover',
        collapsed: true,
        
        
    });
});
    

}


    



$('.slider_prod').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider_nav'
});

$('.slider_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider_prod',
    arrows: true,
    vertical: true,
    focusOnSelect: true,
    verticalSwiping: true,
});



$('#big-slider').slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    adaptiveHeight: true

});

$('#small-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
});


$('#seo-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});

$('.mid-slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }

    }]

});



$('li.subtopmenu a[href="#"]').click(
    function (e) {
        e.preventDefault();
        $(this).next().toggle();
        return false;
    });




// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var rozmiar = document.getElementById("rozmiar");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn.onclick = function (event) {
    if (event.target == myBtn && rozmiar.value == "" || event.target == myBtn && rozmiar.value == "off") {


        modal.style.display = "flex";
    } else if (event.target == myBtn && rozmiar.value == "on") {
        modal2.style.display = "flex";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
   
}
span2.onclick = function () {
   
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target == modal2 ) {
        modal.style.display = "none";
        modal2.style.display = "none";
    }
}