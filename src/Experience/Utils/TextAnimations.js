import gsap from "gsap";

export default class TextAnimations {
    constructor() {
        this.tl1 = gsap.timeline();
        this.tl2 = gsap.timeline();
        this.tl3 = gsap.timeline();
        this.tl4 = gsap.timeline();
    }
    ani1() {
        this.tl1.addLabel("line-extend", 0);
        this.tl1.addLabel("bg-extend", 0.5);
        this.tl1.addLabel("bg-retract", 2.3);
        this.tl1.addLabel("line-retract", 3.3);

        this.tl1.to(
            ".hero-enter-line",
            { height: 250, duration: 0.5 },
            "line-extend"
        );
        this.tl1.to(
            ".hero-enter-line",
            { left: 601, duration: 1 },
            "bg-extend"
        );
        this.tl1.to(".hero-enter-bg", { width: 600, duration: 1 }, "bg-extend");
        this.tl1.to(
            ".hero-text-content.duplicate",
            {
                clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)",
                duration: 1.2,
            },
            "bg-extend"
        );
        this.tl1.to(
            ".hero-text-content.original",
            { opacity: 1, duration: 0.2 },
            "bg-retract-=.5"
        );
        this.tl1.fromTo(
            ".hero-text-content.original",
            { clipPath: "polygon(0 0, 6% 0, 0 100%, 0% 100%)" },
            {
                clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)",
                duration: 1.2,
            },
            "bg-retract"
        );

        this.tl1.to(".hero-enter-line", { left: 0, duration: 1 }, "bg-retract");
        this.tl1.to(".hero-enter-bg", { width: 0, duration: 1 }, "bg-retract");
        this.tl1.to(
            ".hero-enter-line",
            { height: 0, duration: 0.5 },
            "line-retract"
        );
        this.tl1.to(
            ".scroll-button",
            { opacity: 1, duration: 1.5 },
            "line-retract"
        );
        this.tl1.to(
            ".contact-button",
            { opacity: 1, duration: 1.5 },
            "line-retract+=.2"
        );
    }
    ani2() {
        this.tl2.addLabel("line-extend", 0);
        this.tl2.addLabel("show", 0.5);
        this.tl2.addLabel("line-retract", 2);

        this.tl2.to(
            ".isec-enter-line",
            { height: 6, duration: 0.5 },
            "line-extend"
        );
        this.tl2.to(".isec-enter-line", { top: 550, duration: 1 }, "show");
        this.tl2.to(
            ".isec-work-number",
            { opacity: 0.8, duration: 0.5 },
            "show"
        );
        this.tl2.fromTo(
            ".isec-work-number",
            { x: 10 },
            { x: -35, rotation: -10, duration: 0.8 },
            "show"
        );
        this.tl2.to(
            ".isec-work-number",
            { x: 0, rotation: 0, duration: 0.5 },
            "show+=1.2"
        );
        this.tl2.to(
            ".isec-work-number",
            { opacity: 0, duration: 0.5 },
            "show+=1.4"
        );
        this.tl2.to(
            ".isec-text-content",
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 1,
            },
            "show"
        );
        this.tl2.to(
            ".isec-enter-line",
            { width: 0, duration: 0.5 },
            "line-retract"
        );
    }
    ani3() {
        this.tl3.addLabel("line-extend", 0);
        this.tl3.addLabel("show", 0.5);
        this.tl3.addLabel("line-retract", 2);

        this.tl3.to(
            ".aves-enter-line",
            { height: 6, duration: 0.5 },
            "line-extend"
        );
        this.tl3.to(".aves-enter-line", { top: 550, duration: 1 }, "show");
        this.tl3.to(
            ".aves-work-number",
            { opacity: 0.8, duration: 0.5 },
            "show"
        );
        this.tl3.fromTo(
            ".aves-work-number",
            { x: -10 },
            { x: 35, rotation: 10, duration: 0.8 },
            "show"
        );
        this.tl3.to(
            ".aves-work-number",
            { x: 0, rotation: 0, duration: 0.5 },
            "show+=1.2"
        );
        this.tl3.to(
            ".aves-work-number",
            { opacity: 0, duration: 0.5 },
            "show+=1.4"
        );
        this.tl3.to(
            ".aves-text-content",
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 1,
            },
            "show"
        );
        this.tl3.to(
            ".aves-enter-line",
            { width: 0, duration: 0.5 },
            "line-retract"
        );
    }
    ani4() {
        this.tl4.addLabel("bg-fadein", 0);
        this.tl4.addLabel("appear", 0.5);
        document.querySelector(".cta-text").style.display = "grid";
        this.tl4.to(".cta-text", { opacity: 1, duration: 0.5 }, "bg-fadein");
        this.tl4.to(".cta-bg", { y: 0, duration: 1 }, "appear");
    }
    reset1() {
        this.tl2.kill();
        this.tl2 = gsap.timeline();
        this.tl3.kill();
        this.tl3 = gsap.timeline();
        this.tl4.kill();
        this.tl4 = gsap.timeline();
        this.clear2();
        this.clear3();
    }
    reset2() {
        this.tl1.kill();
        this.tl1 = gsap.timeline();
        this.tl3.kill();
        this.tl3 = gsap.timeline();
        this.tl4.kill();
        this.tl4 = gsap.timeline();
        this.clear1();
        this.clear3();
    }
    reset3() {
        this.tl1.kill();
        this.tl1 = gsap.timeline();
        this.tl2.kill();
        this.tl2 = gsap.timeline();
        this.tl4.kill();
        this.tl4 = gsap.timeline();
        this.clear1();
        this.clear2();
    }
    reset4() {
        this.tl1.kill();
        this.tl1 = gsap.timeline();
        this.tl2.kill();
        this.tl2 = gsap.timeline();
        this.tl3.kill();
        this.tl3 = gsap.timeline();
        this.clear1();
        this.clear2();
        this.clear3();
    }
    clear1() {
        const hero_line = document.querySelector(".hero-enter-line");
        const hero_bg = document.querySelector(".hero-enter-bg");
        //two hero texts
        const hero_text = document.querySelectorAll(".hero-text-content");
        const scroll_btn = document.querySelector(".scroll-button");
        const contact_btn = document.querySelector(".contact-button");

        hero_line.style.height = "";
        hero_line.style.left = "";
        hero_bg.style.width = "";
        scroll_btn.style.opacity = "";
        contact_btn.style.opacity = "";

        hero_text.forEach((obj) => {
            obj.style.clipPath = "";
        });
    }
    clear2() {
        const isec_line = document.querySelector(".isec-enter-line");
        const isec_text = document.querySelector(".isec-text-content");
        const isec_work_text = document.querySelector(".isec-work-number");

        isec_line.style.height = "";
        isec_line.style.width = "";
        isec_line.style.top = "";
        isec_text.style.clipPath = "";
        isec_work_text.style.opacity = "";
    }
    clear3() {
        const aves_line = document.querySelector(".aves-enter-line");
        const aves_text = document.querySelector(".aves-text-content");
        const aves_work_text = document.querySelector(".aves-work-number");

        aves_line.style.height = "";
        aves_line.style.width = "";
        aves_line.style.top = "";
        aves_text.style.clipPath = "";
        aves_work_text.style.opacity = "";
    }
    // clear4() {
    //     const cta_bg = document.querySelector(".cta-text");
    //     const cta_content = document.querySelector(".cta-bg");

    //     cta_bg.style.display = "";
    //     cta_bg.style.opacity = "";
    //     cta_content.style.transform = "";
    // }
}
