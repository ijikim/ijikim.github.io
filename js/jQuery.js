$(function(){
    // 타이핑 효과
    var options = {
        strings: [
                "I’m Web Publisher Kim Iji.",
            ],
      typeSpeed: 50, // 한 글자당 타이핑 속도 (밀리초)
      backSpeed: 30, // 한 글자당 삭제 속도 (밀리초)
      loop: true, // 반복 여부
    };
    var typed = new Typed('#typing_text', options);
    

    // 떠오르는 효과
    var $float = $(".float");

    function handleScroll(){
        $float.each(function(){
            var $float = $(this);
            var rect = $float[0].getBoundingClientRect();
            if (rect.top < $(window).height() * 0.9) {
                $float.addClass("show");
            }
        });
    }

    $(window).on("scroll", handleScroll);
    handleScroll();

    // a태그 클릭 이벤트
    $('a').on('click', function(){            
        $('html,body').animate({scrollTop:0 + $(this.hash).offset().top});
    });
});