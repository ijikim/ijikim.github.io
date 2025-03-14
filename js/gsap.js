$(function(){
    /* ---------- Home ---------- */
    gsap.registerPlugin(ScrollTrigger);

    var main = gsap.timeline()// 텍스트 애니메이션
    .to('.txt_bottom', {
        yPercent: -350,
    }, 'text')
    .to('.txt_right', {
        xPercent: -40,
    }, 'text');

    ScrollTrigger.create({// ScrollTrigger 설정
        animation: main,
        trigger: '#scrollEvent',
        start: 'top top',
        end: '+=4000px',
        pin: true,
        scrub: true,
        markers: false,
        onRefresh : function() {// 새로고침 시 스크롤 위치 고정
            var scrollPosition = sessionStorage.getItem('scrollPosition');
            if (scrollPosition) {
                window.scrollTo(0, scrollPosition);
            }
        },
    });

    /* ---------- profile ---------- */
    var texts = document.querySelectorAll('.text');

    texts.forEach((text, index) => {
        gsap.to(text, {
            y: '+=20',
            rotation: 0.01,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut',
            duration: 1,
            delay: index * 0.5
        });
    });

    /* ---------- Skill ---------- */
    function draw(max, classname, colorname) {
        let i = 1;
        const func1 = setInterval(function () {
            if (i < max) {
                color1(i, classname, colorname);
                i++;
            } else {
                clearInterval(func1);
            }
        }, 10);
    }

    function color1(i, classname, colorname) {
        $(classname).css({
            "background": "conic-gradient(" + colorname + " 3% " + i + "%, rgba(255, 255, 255, 0.2) " + i + "% 100%)"
        });
    }

    const skills = [
        { max: 80, classname: '.skill_photo', colorname: '#FFF' },
        { max: 80, classname: '.skill_illus', colorname: '#FFF' },
        { max: 80, classname: '.skill_xd', colorname: '#FFF' },
        { max: 80, classname: '.skill_figma', colorname: '#FFF' },
        { max: 80, classname: '.skill_html', colorname: '#FFF' },
        { max: 80, classname: '.skill_css', colorname: '#FFF' },
        { max: 60, classname: '.skill_java', colorname: '#FFF' },
        { max: 60, classname: '.skill_jquery', colorname: '#FFF' },
    ];

    ScrollTrigger.create({
        trigger: '.skill',
        start: "50% bottom",
        end: "50% bottom",
        scrub: true,
        once: true,
        onEnter: () => {
            skills.forEach(skill => {
                draw(skill.max, skill.classname, skill.colorname);
            });
        },
        onLeave: () => {
            skills.forEach(skill => {
                $(skill.classname).css("background", "conic-gradient(rgba(255, 255, 255, 0.2) 0% 100%)");
            });
        }
    });
    
    /* ---------- Project ---------- */
    var sections = gsap.utils.toArray(".parallax_item");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#parallax_cont",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: "+=7000",
            // end: document.querySelector("#parallax_cont").offsetWidth,
        }
    });

    // 새로 고침 시 스크롤 위치 저장
    $(window).on('beforeunload', function() {
        sessionStorage.setItem('scrollPosition', window.scrollY);
    });


    /* ---------- progress ---------- */
    gsap.to("progress", {
        value: 100,
        ease: "none",
        scrollTrigger: { scrub: 0.3 }
    });
});