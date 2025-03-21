$(function(){
    // 로딩 화면
    $(document).ready(function () {
        $('#overlay, #waitingModal').remove(); // 로딩 화면 제거
        $('#content').show(); // 콘텐츠 표시
    });

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
    
    // 타이핑 효과
    var options = {
        strings: [
                "Hello,",
                "I’m Web Publisher Kim Iji.",
            ],
      typeSpeed: 40, // 타이핑 속도 (밀리초)
      backSpeed: 30, // 삭제 속도 (밀리초)
      loop: true, // 반복
    };
    var typed = new Typed('#typing_text', options);
    
    // Header a태그(Nav) 클릭 이벤트
    $("header a").on('click', function(event){
        event.preventDefault(); // 기본 이벤트 제거
        var target = $(this).attr("href"); // 클릭한 a 태그의 href 값 가져오기
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 0); 
    });
    
    $("header a").on("click", function(e) {
        e.preventDefault();
        var hash = this.hash;
        if (hash !== "") {
            $(hash).focus(); // hash가 유효한 경우만 실행
        }
    });

    // copy 효과 (전역 함수로 선언)
    window.copyText = function(selector) {
        var text = $(selector).text().trim(); // 선택한 요소의 텍스트 가져오기

        navigator.clipboard.writeText(text).then(() => {
            alert(text+" (이)가 복사 완료되었습니다."); // 복사 성공 시 알림
        }).catch(err => {
            console.error("복사 실패:", err); // 복사 실패 시 콘솔 출력
        });
    };
});