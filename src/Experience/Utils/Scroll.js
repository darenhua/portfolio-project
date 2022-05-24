import EventEmitter from "./EventEmitter";
import Experience from "../Experience";

export default class Scroll extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scrollY = window.scrollY;
        this.currentSection = 0;
        this.trigger("changeSection");
        window.addEventListener("scroll", () => {
            this.scrollY = window.scrollY;
            const newSection = Math.round(this.scrollY / this.sizes.height);
            if (newSection != this.currentSection) {
                this.currentSection = newSection;
                this.trigger("changeSection");
            }
        });
    }
}
