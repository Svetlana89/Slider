//
(function ($) {
	var viewUl = $("div.view").css("overflow", "hidden").children("ul"),
	imgs = viewUl.find("img"),
	imgW = 400,
	imgsLen = imgs.length,
	totalImgsW = imgsLen * imgW,
	current = 1;

	$("div#show").show().find("button").on("click", function () {
		var direction = $(this).attr("id"),
		position = imgW;
		direction === "next" ? current++ : current--;
		if (current === 0) {
			current = imgsLen;
			position = totalImgsW - imgW;
			direction = "next";
		} else if (current - 1 === imgsLen) {
			current = 1;
			position = 0;
		}
		doIt(viewUl, position, direction);
	});
	function doIt(container, position, direction) {
		var sign,
		duration = {};
		if (direction && position != 0) {
			sign = (direction === "next") ? "-=" : "+=";
		}
		if (position === 0 || position === imgW * (imgsLen - 1)) {
			duration = {
				duration : 0
			};
		}
		container.animate({
			"margin-left" : sign ? (sign + position) : position
		}, duration);

	}
})(jQuery);