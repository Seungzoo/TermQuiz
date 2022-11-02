"use strict"

$(function(){
		$('.joininput').keydown(function(e){
			
			if ( e.which==13 ) {
				e.preventDefault();
				if(e.target.id == 'password'){
					let passcheck = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z].{8,20}$/;
					if(e.target.value.match(passcheck)){
						$('#submit').click();
					}else{
						e.target.value = '';
						e.target.placeholder = '패턴에 맞게 작성하세요 (숫자, 영문자 포함, 8글자 이상, 20글자 이하)';
					}
				}else{
					$('#submit').click();
				}
			}
		});
		
		$('#password2').focusout(function(){
			if($('#password').val() == $('#password2').val()){
				$('#submit').click();
			}else{
				$('#password').val('');
				$('#password2').val('');
				$('#password2').attr('placeholder','비밀번호가 다릅니다');
				$('#password').focus();
			}
		});
		
}); //ready	

function numcheck(e){
	if(e.value.length > e.maxLength){
    	e.value = e.value.slice(0, e.maxLength);
    }
	if(e.value.length == e.maxLength){
		
		if(e.id == "socialnuml"){
			if(e.value > 4 || e.value < 1){
				e.value = '';
			}
		}
	
		if(e.id == "socialnumf"){
			let month = e.value.slice(2,4)*1;
			let day = e.value.slice(4,6)*1;
			
			switch(month){
				case 1 : case 3 : case 5 : case 7 : case 8 : case 10 : case 12 :
					if(day > 31 || day < 1){
						e.value = '';
						e.placeholder = "올바른 생년월일을 입력하세요"
						console.log(31);
					}else{
						$('#socialnuml').val('').focus();
					} 
					break;
					
				case 4 : case 6 : case 9 : case 11 : 
					if(day > 30 || day < 1){
						e.value = '';
						e.placeholder = "올바른 생년월일을 입력하세요"
					}else{
						$('#socialnuml').val('').focus();
					} 
					break;
					
				case 2:
					if(day > 29 || day < 1){
						e.value = '';
						e.placeholder = "올바른 생년월일을 입력하세요"
					}else{
						$('#socialnuml').val('').focus();
					}  
					break;
					
				default :
					e.value = '';
					e.placeholder = "올바른 생년월일을 입력하세요"
					break;					
			}
			
		}
	}
}

function agreecheck(){
	if(!$('#agree-term').is(':checked')){
		$('#agreecheck').text("* 이용약관에 동의해주세요 *");
		return false;
	} else{
		$('#agreecheck').text("");
	}
}