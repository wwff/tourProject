<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> four
$(function(){
	$('.more').click(function(){
		$('.footer').toggle();
		var $li = $('<li></li>');
		$('.img-container').append($li);
		$.ajax({
			url:'http://ww.lw.com/',
			type:'post',
			data:null,
			dataType:'JSONP',
			success:function(data){
				$.each(data, function(){
					$('.img-container').find('li').each(function(){
						var $img = $("<img src="+ data.picSrc +" />");
						var $fonts = $('<p></p>').text(data.font1);
						$(this).append($img, $fonts);
					})
				});
			}
		});
	});

<<<<<<< HEAD
=======
=======
$(function() {
	$('.more').click(function () {
		//$('.footer').toggle();
		/*var $li = $('<li></li>');
		$('.img-container').append($li);*/
		var $scri = $('<script type="text/javascript" id="more" src="js/loadMore.js"></script>');
		$scri.appendTo('body');

		//debugger;
		$.ajax({
			url: 'http://www.hujhk.com/001',
			type: 'get',
			//async: true,
			//contentType: 'application/json;charset=utf-8',
			dataType: 'JSONP',
			success: function (needData) {
				alert('ok');
				/*var $scri = $('<script type="text/javascript" id="more" src="js/loadMore.js"></script>');
				$scri.appendTo('body');*/

				/* alert(data);
				 if(data && data.resultcode == '200'){
				 $.each(data, function() {
				 $('.img-container').find('li').each(function () {
				 var $img = $("<img src=" + data.picSrc + " />");
				 var $fonts = $('<p></p>').text(data.font1);
				 $(this).append($img, $fonts);
				 })
				 })}*/
			},
			error: function(){
				alert('ff');
			}
			//error: function(){
			//	alert('hhff');
			//}

		});
	});
});
>>>>>>> four
>>>>>>> four
	/*$('.more').click(function(){
		$('.footer').toggle();
		var $li = $('<li></li>');
		$('.img-container').append($li);
		$.getJSON('http://www.lw.com',
				function(data){
					/*$.each(data,function(){
						$('.img-container').find('li').each(function(){
							$(this).append("<img src="+ data.picSrc +" />");
						});*/
					/*$.each(data, function(){
						$('.img-container').find('li').each(function(){
							var $img = $("<img src="+ data.picSrc +" />");
							var $fonts = $('<p></p>').text(data.font1);
							$(this).append($img, $fonts);
						})
					});
					});
				});*/
<<<<<<< HEAD
		});
=======
<<<<<<< HEAD
		});
=======

>>>>>>> four
>>>>>>> four
