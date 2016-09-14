$(document).ready(function() {
	$("#js-shopping-list-form").submit(function(){
		var item = $("input[type=text]").val();
		$("ul").append("<li><span class='shopping-item'>" + item + "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button> <button class='shopping-item-delete'><span class='button-label'>delete</span></button></li>");
	});
	$("#js-shopping-list-form").on("submit",function(e){
		e.preventDefault();
		return false;
	});
	$("li").on('click','.shopping-item-delete',function(event) {
		this.parentElement.parentElement.remove();
	});
	$("li").on('click','.shopping-item-toggle',function(event) {
		$(this.parentElement.previousElementSibling).toggleClass('shopping-item__checked');
	});
});