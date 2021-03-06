import * as THREE from "three";

import Debug from "./Utils/Debug.js";
import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Scroll from "./Utils/Scroll.js";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import World from "./World/World.js";
import Resources from "./Utils/Resources.js";
import TextAnimations from "./Utils/TextAnimations.js";
import screenVertexShader from "../shaders/screen/vertex.glsl";
import screenFragmentShader from "../shaders/screen/fragment.glsl";

import sources from "./sources.js";

let instance = null;

export default class Experience {
    constructor(_canvas) {
        // Singleton
        if (instance) {
            return instance;
        }
        instance = this;
        // Options
        this.canvas = _canvas;

        // Setup
        // this.debug = new Debug();
        this.sizes = new Sizes();
        this.time = new Time();
        this.scroll = new Scroll();
        this.scene = new THREE.Scene();
        this.resources = new Resources(sources);
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.world = new World();
        this.animations = new TextAnimations();

        this.screenVertexShader = screenVertexShader;
        this.screenFragmentShader = screenFragmentShader;

        this.animations.ani1();
        this.camera.setScene1();
        // Resize event
        this.sizes.on("resize", () => {
            this.resize();
        });

        // Time tick event
        this.time.on("tick", () => {
            this.update();
        });

        this.scroll.on("changeSection", () => {
            switch (this.scroll.currentSection) {
                case 0:
                    this.animations.ani1();
                    this.animations.reset1();
                    this.camera.setScene1();
                    break;

                case 1:
                    this.animations.ani2();
                    this.animations.reset2();
                    this.camera.setScene2();

                    break;
                case 2:
                    this.animations.ani3();
                    this.animations.reset3();
                    this.camera.setScene3();

                    break;
            }
        });
    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
    }

    update() {
        this.camera.update();
        this.world.update();
        this.renderer.update();
    }

    destroy() {
        this.sizes.off("resize");
        this.time.off("tick");

        // Traverse the whole scene
        this.scene.traverse((child) => {
            // Test if it's a mesh
            if (child instanceof THREE.Mesh) {
                child.geometry.dispose();

                // Loop through the material properties
                for (const key in child.material) {
                    const value = child.material[key];

                    // Test if there is a dispose function
                    if (value && typeof value.dispose === "function") {
                        value.dispose();
                    }
                }
            }
        });

        this.camera.controls.dispose();
        this.renderer.instance.dispose();

        if (this.debug.active) this.debug.ui.destroy();
    }
}
