$(function(){
	//setup defaults for flapper
	var header_display = $('#header_display');
		header_display.flapper({
			width:7,
			chars_preset:'alpha',
			align: 'left'
		});

		//grab some templates
		 var githudDesc = _.template($("#githudDesc").text())
		 var betafyDesc = _.template($("#betafyDesc").text())
         var mobberDesc = _.template($("#mobberDesc").text())
		 var ellipsisDesc = _.template($("#ellipsisDesc").text())

		 //grab the caption div
		 var caption = $(".work-caption")


		 //set default display text for flapper and caption
		header_display.val('GITHUD').change();
		caption.append(githudDesc)


				var i = 1
			setInterval(function(){
				if(i == 1){
					header_display.val('BETAFY').change()
					caption.html('')
					caption.append(betafyDesc)
					i += 1
				}else if (i == 2){
					header_display.val('CHATAPP').change();
					caption.html('')
					caption.append(mobberDesc)
					i += 1
				}else if (i == 3) {
                    header_display.val('CHARTJS').change();
                    caption.html('')
                    caption.append(ellipsisDesc)
                    i += 1
                } else {
                    header_display.val('GITHUD').change();
                    caption.html('')
                    caption.append(githudDesc)
                    i = 1
                }

			},5000);

})
