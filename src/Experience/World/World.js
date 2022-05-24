import Experience from "../Experience.js";
import Portfolio from "./Portfolio.js";
export default class World {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        // Wait for resources
        this.resources.on("ready", () => {
            // Setup
            this.portfolio = new Portfolio();

            // this.floor = new Floor();
            // this.fox = new Fox()
            // this.environment = new Environment()
        });
    }

    update() {
        if (this.fox) this.fox.update();
    }
}
