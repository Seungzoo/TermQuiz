
function bcommentsList() {
	$('.bcommentsList').toggleClass('commentOn');

} //bcommentsList1


$(document).ready(function() {
	commentListOn();
});

function commentListOn() {
	const url = new URL(window.location.href);
	const check = url.searchParams;
	const bno = check.get("bno");
	$.ajax({
		type: 'Get',
		url: 'commentlist',
		data: {
			bno: bno
		},
		success: function(resultPage) {
			$('.bcommentsList').html("");
			$('.bcommentsList').html(resultPage);
			commentLoad = 1;
		},
		error: function() {
			$('#resultArea2').html('~~ 서버 오류 !! 잠시후 다시 하세요 ~~');
		}
	}); //ajax
}


$(function(){
	$('.commentAjax').click(function(){
		let form = $(this).parents('form');
		let formUrl = $(form).attr("action");
		let formData = $(form).serialize();
		let textArea = $(this).prevAll("textarea");
		$(textArea).val($(textArea).val().trim());
		
		if($(textArea).val()!=""){
			$.ajax({
	            cache : false,
	            url : formUrl, // 요기에
	            type : 'POST', 
	            data : formData, 
	            success : function() {
					$(textArea).val("");
	                commentListOn();
					$(".boardCommentP").text("");
	            }
	        });
			
		}
	});
});

//	