$(document).ready(function() {
	$(".mathen1").click(function() {
		$(".matcom1").toggle("slow");
		$(".matshow1").toggle("slow");
		$(".mathide1").toggle("slow");
	});
	$(".mathen2").click(function() {
		$(".matcom2").slideToggle(1000);
		$(".matshow2").slideToggle(1000);
		$(".mathide2").slideToggle(1000);
	});
	$(".mathen3").click(function() {
		$(".matcom3").slideToggle(1000);
		$(".matshow3").slideToggle(1000);
		$(".mathide3").slideToggle(1000);
	});
	$(".mathen4").click(function() {
		$(".matcom4").toggle(1000);
		$(".matshow4").toggle(1000);
		$(".mathide4").toggle(1000);
	});
	$(".mathen5").click(function() {
		$(".matcom5").slideToggle(1000);
		$(".matshow5").slideToggle(1000);
		$(".mathide5").slideToggle(1000);
	});
/*
$(".dake").click(function() {
		$(".dakecom").toggle();
		$(".dakeshow").toggle();
		$(."dakehide").toggle();
	});*/
});
