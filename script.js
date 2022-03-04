$(".last-button").hide();
$(".questions").hide();

$(".start-button").click(function() {
    $(".message-1").text("Above are some examples of pollution. The left image appears to be Garbage Pollution and there seems to be dozens of bottles, cans, bags, etc. The right image appears to be Water Pollution and the vivid clear water is spotted with various bottles, bags, etc. Click on the left image to continue.");
    $(".secondImage").show();
    $(".thirdImage").show();
    $(".firstImage").hide();
    $(".start-button").hide();
    $(".last-button").hide();
	$(".questions").hide();
});
$(".secondImage").click(function() {
    $(".message-1").text("");
    $(".ending-img").show();
    $(".secondImage").hide();
    $(".thirdImage").hide();
    $(".last-button").show();
});
$(".last-button").click(function() {
    $(".questions").show();
    $(".ending-img").hide();
    $(".last-button").hide();
});