
var maxChar = 100;


//========= Navigate on Scroll ====

$(window).scroll(function(){
    if(window.pageYOffset >= 200 && window.pageYOffset <= 1000){
        $(".navigate").css("background-color", "rgb(223, 206, 185)")
    }
    else{
        $(".navigate").css("background-color", "rgba(255, 255, 255, 0.816)")
    }
})

//======== Acccordin =========

$(".activityHead").click(function(){
    $(".activityHead").not(this).next().slideUp(400);
    $(this).next().slideToggle(400);
});

// ======== Counter ==========

let counter = setInterval(function(){
    let toDay = new Date();
    let lastDay = new Date(2023, 9, 29);
    let remainDay = lastDay - toDay;
    var days = Math.floor(remainDay / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainDay % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainDay % (1000 * 60)) / 1000);
    
    $(".counters .counter").eq(0).html(`${days} Days`);
    $(".counters .counter").eq(1).html(`${hours} Hours`);
    $(".counters .counter").eq(2).html(`${minutes} Minutes`);
    $(".counters .counter").eq(3).html(`${seconds} Seconds`);
}, 1000)

//========= Charc Remains ======

$("#txtArea").keydown(function(){
    typedChar = $(this).val().length;
    countRemain = maxChar - typedChar;
    if(countRemain < 1){
        $("#charCount").html("No charaters Remained")
    }
    else{
        $("#charCount").html(`${countRemain} Characters Remaining`);
    }
    console.log(typedChar);
});


// ========== Link Smooth Scroll =====

$("ul a").click(function(){
    uRL = $(this).attr("href");
    $("html, body").animate({scrollTop: $(uRL).offset().top}, 1000)
})