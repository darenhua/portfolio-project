import * as THREE from "three";
import Experience from "../Experience.js";

export default class Portfolio {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.screenFragmentShader = this.experience.screenFragmentShader;
        this.screenVertexShader = this.experience.screenVertexShader;

        // Resource
        this.resource = this.resources.items.portfolioScene;
        this.setVideo();
        this.setMaterial();
        this.setModel();
        // this.setAnimation();
    }
    setVideo() {
        const aves_video = document.createElement("video");
        aves_video.autoplay = true;
        aves_video.loop = true;
        aves_video.muted = true;
        aves_video.src = "textures/aves_trailer.mp4";
        aves_video.play();

        const isec_video = document.createElement("video");
        isec_video.autoplay = true;
        isec_video.loop = true;
        isec_video.muted = true;
        isec_video.src = "textures/simulation_demo.mp4";
        isec_video.play();

        // const videoTexture = textureLoader.load('matcaps/5.png');
        this.avesVideoTexture = new THREE.VideoTexture(aves_video);
        this.isecVideoTexture = new THREE.VideoTexture(isec_video);
        this.avesVideoTexture.flipY = false;
        this.isecVideoTexture.flipY = false;
    }
    setMaterial() {
        this.basicMaterial = new THREE.MeshMatcapMaterial({
            matcap: this.resources.items.matcap1,
        });
        this.haloMaterial = new THREE.MeshMatcapMaterial({
            matcap: this.resources.items.matcap2,
        });
        this.metalMaterial = new THREE.MeshMatcapMaterial({
            matcap: this.resources.items.matcap3,
        });
        this.baseMaterial = new THREE.MeshMatcapMaterial({
            matcap: this.resources.items.matcap4,
        });
        this.basicAltMaterial = new THREE.MeshMatcapMaterial({
            matcap: this.resources.items.matcap6,
            morphTargets: true,
        });
        this.neonMaterial = new THREE.MeshMatcapMaterial({
            matcap: this.resources.items.matcap7,
        });
        this.displayMaterial = new THREE.MeshMatcapMaterial({
            matcap: this.resources.items.matcap8,
        });
        this.whiteMaterial = new THREE.MeshBasicMaterial({ color: "white" });
        this.isecVideoMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uTexture: { value: this.isecVideoTexture },
                uAdjustUv: { value: new THREE.Vector2(1, 9 / 16) },
                uScale: { value: 1.6 },
            },
            vertexShader: this.screenVertexShader,
            fragmentShader: this.screenFragmentShader,
        });

        this.avesVideoMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uTexture: { value: this.avesVideoTexture },
                uAdjustUv: { value: new THREE.Vector2(1, 9 / 16) },
                uScale: { value: 1.05 },
            },
            vertexShader: this.screenVertexShader,
            fragmentShader: this.screenFragmentShader,
        });
    }
    setModel() {
        this.model = this.resource.scene;
        this.model.traverse((child) => {
            if (child.name.includes("retainer")) {
                child.material = this.metalMaterial;
            } else if (
                child.name.includes("astronaut") ||
                child.name.includes("building")
            ) {
                child.material = this.metalMaterial;
            } else if (child.name.includes("tree")) {
                child.material = this.basicAltMaterial;
            } else {
                child.material = this.neonMaterial;
            }
        });
        this.scene.add(this.model);
        const display_sceen01 = this.model.children.find(
            (child) => child.name === "Plane001"
        );
        const display_sceen02 = this.model.children.find(
            (child) => child.name === "Plane003"
        );

        const halo01 = this.model.children.find(
            (child) => child.name === "Torus001"
        );
        const halo02 = this.model.children.find(
            (child) => child.name === "Torus002"
        );
        const aves_backlight = this.model.children.find(
            (child) => child.name === "Plane006"
        );

        const hero_obj01 = this.model.children.find(
            (child) => child.name === "Cube001"
        );
        const hero_obj02 = this.model.children.find(
            (child) => child.name === "Cube002"
        );
        const hero_obj03 = this.model.children.find(
            (child) => child.name === "Car"
        );

        const hero_funnel = this.model.children.find(
            (child) => child.name === "Cylinder"
        );
        const hero_backdrop = this.model.children.find(
            (child) => child.name === "Cube"
        );

        const display_frame01 = this.model.children.find(
            (child) => child.name === "Plane"
        );
        const display_frame02 = this.model.children.find(
            (child) => child.name === "Plane002"
        );
        const display_stand01 = this.model.children.find(
            (child) => child.name === "Cylinder001"
        );
        const display_stand02 = this.model.children.find(
            (child) => child.name === "Cylinder003"
        );

        const track01 = this.model.children.find(
            (child) => child.name === "Plane004"
        );
        const track02 = this.model.children.find(
            (child) => child.name === "Plane005"
        );
        const isec_backdrop = this.model.children.find(
            (child) => child.name === "Cube003"
        );
        const aves_backdrop = this.model.children.find(
            (child) => child.name === "Cube004"
        );
        const river = this.model.children.find(
            (child) => child.name === "BezierCurve"
        );

        display_sceen01.material = this.isecVideoMaterial;
        display_sceen02.material = this.avesVideoMaterial;

        halo01.material = this.haloMaterial;
        halo02.material = this.haloMaterial;
        aves_backlight.material = this.whiteMaterial;

        hero_obj01.material = this.metalMaterial;
        hero_obj02.material = this.metalMaterial;
        hero_obj03.material = this.metalMaterial;

        hero_funnel.material = this.neonMaterial;
        hero_backdrop.material = this.basicMaterial;

        display_frame01.material = this.displayMaterial;
        display_frame02.material = this.displayMaterial;
        display_stand01.material = this.baseMaterial;
        display_stand02.material = this.baseMaterial;

        track01.material = this.basicAltMaterial;
        track02.material = this.basicAltMaterial;

        isec_backdrop.material = this.basicAltMaterial;
        aves_backdrop.material = this.basicMaterial;
        river.material = this.haloMaterial;
    }

    setAnimation() {
        this.animation = {};

        // Mixer
        this.animation.mixer = new THREE.AnimationMixer(this.model);

        // Actions
        this.animation.actions = {};

        this.animation.actions.idle = this.animation.mixer.clipAction(
            this.resource.animations[0]
        );
        this.animation.actions.walking = this.animation.mixer.clipAction(
            this.resource.animations[1]
        );
        this.animation.actions.running = this.animation.mixer.clipAction(
            this.resource.animations[2]
        );

        this.animation.actions.current = this.animation.actions.idle;
        this.animation.actions.current.play();

        // Play the action
        this.animation.play = (name) => {
            const newAction = this.animation.actions[name];
            const oldAction = this.animation.actions.current;

            newAction.reset();
            newAction.play();
            newAction.crossFadeFrom(oldAction, 1);

            this.animation.actions.current = newAction;
        };

        // Debug
        if (this.debug.active) {
            const debugObject = {
                playIdle: () => {
                    this.animation.play("idle");
                },
                playWalking: () => {
                    this.animation.play("walking");
                },
                playRunning: () => {
                    this.animation.play("running");
                },
            };
            this.debugFolder.add(debugObject, "playIdle");
            this.debugFolder.add(debugObject, "playWalking");
            this.debugFolder.add(debugObject, "playRunning");
        }
    }

    update() {
        this.animation.mixer.update(this.time.delta * 0.001);
    }
}
