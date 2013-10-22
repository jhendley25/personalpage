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
          interval: 8000,
          swap: true
        },
        pagination: {
	      active: false
		}
	})
	$("#work-slides").slidesjs({
		width: 400,
		height: 400,
		navigation: {
			active: false,
			effect: "fade"
		},
		effect: {
	      fade: {
	        speed: 700
	      }
	    },
		play: {
          active: false,
          auto: true,
          interval: 5000,
          swap: true,
          effect: "fade"
        },
        pagination: {
	      active: false,
	      effect: "fade"
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

