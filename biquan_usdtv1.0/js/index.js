$(function() {
	var options = {
		speed: 2000,//匀速时间
		direction: 'vertical',
		autoplay: {
			delay: 0,
			stopOnLastSlide: true,
			disableOnInteraction: false,
		},
		loop: false,
		loopedSlides: 5,
		slidesPerView: 5,
		spaceBetween: 15,
		observer: true,
		observeParents: true, // 当Swiper的父元素变化时，会更新swiper
	}

	$.extend({
		"swiperOption":function(f1, f2){
			let swiper = new Swiper(f1, f2);  
			return swiper;               
		},
	});
	
	var swiper0 = $.swiperOption($('#review_box').eq(0).find('.swiper-container'), options);  // 案例一
	
	new Swiper('#famous_school_list', {
		spaceBetween: 15,
		slidesPerView: 'auto',//一行显示3个
		observer: true,
		observeParents: true, // 当Swiper的父元素变化时，会更新swiper
		paginationClickable: true,
		pagination: {
			el: '.swiper-pagination.two',
			clickable: true
		},
		on: {
			transitionEnd: function(swiper) {
				// console.log(this.snapIndex)
				let snapIndex = this.snapIndex
				if (snapIndex == 0) {
					swiper0.autoplay.start();
					swiper0.init();
					swiper0.update();
				}
			}
		}
	})
})