$(document).ready(function() {
$(window).scroll(function(){
    let positiontop = $(document).scrollTop();
    console.log(positiontop);

    if((positiontop>10) && (positiontop<374)){
        $("#card_one").addClass("animate__animated animate__fadeInLeft")
        $("#card_two").addClass("animate__animated animate__fadeInLeft")
        $("#card_three").addClass("animate__animated animate__fadeInLeft")
        $("#card_four").addClass("animate__animated animate__fadeInLeft")

    }
    if((positiontop>374) && (positiontop<576)){
        $("#des").addClass("animate__animated animate__backInDown animate__slow")
    }
    if((positiontop>576) && (positiontop<888)){
        $("#card1").addClass("animate__animated animate__fadeInRightBig")
        $("#card2").addClass("animate__animated animate__fadeInRightBig")
        $("#card3").addClass("animate__animated animate__fadeInRightBig")
        $("#card4").addClass("animate__animated animate__fadeInRightBig")
    }
});
});