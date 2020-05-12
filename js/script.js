$(document).ready(function(){
    $(".What").click(function() {
        $(this).children(".Hide").slideToggle(2000);
        $(this).children(".show").toggle(2000);
    });

    $(".put").hover( function() {
        $(this).find(".there").fadeIn(300);
    }, function() {
        $(this).find(".there").fadeOut(100);
    });

    $("form#wet").submit(function(){
        var name = $("#name").val();
        alert(name + "  we have received your message. Thank you fro reaching out to us.")
    });
});
