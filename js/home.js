/*Navbar Color Change When Scroll*/
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 300);
});
/*Navbar Color Change When Scroll End*/


/*Register Email Check*/
function required() {
    var form = document.getElementById("modal-content");
    var email = document.getElementById("modal-email").value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(pattern)) {
        alert("Hello" + " " + email);
    }
    else {
        alert("Invalid email!!!");
    }

}
/*Register Email Check End*/