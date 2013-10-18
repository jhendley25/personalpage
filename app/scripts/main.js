$(function(){
	$("#slides").slidesjs({
		width: 400,
		height: 200,
		navigation: {
			active: false
		},
		play: {
          active: false,
          auto: true,
          interval: 3000,
          swap: true
        },
        pagination: {
	      active: false
		}
	})

	$("#about").hover( 
		function(){
			$(".about-me").fadeIn()
			
		}, function(){
			$(".about-me").fadeOut()
		}
	)
})

