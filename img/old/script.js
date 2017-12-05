// var $black_white = $('.black_white'),
// 		img_width = $('.black_white img').width(),
// 		init_split = Math.round(img_width/2);
  
//   $black_white.width(init_split);  

// 		$('.before_after_slider').mousemove(function(e){
// 		var offX  = (e.offsetX || e.clientX - $black_white.offset().left);
// 			$black_white.width(offX);
// 		});

// 		$('.before_after_slider').mouseleave(function(e){
// 		$black_white.stop().animate({
// 		width: init_split
// 		},1000)
// 		});

function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "../img/old/1-southendgroundsOLD.jpg") 
    {
        document.getElementById("imgClickAndChange").src = "../img/new/1-southendgrounds.jpg";
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "../img/old/1-southendgroundsOLD.jpg";
    }
}
