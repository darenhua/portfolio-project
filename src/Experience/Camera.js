import * as THREE from "three";
import Experience from "./Experience.js";

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.time = this.experience.time;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera_target = new THREE.Vector3();
        this.target = new THREE.Vector2();
        this.orbit_const = { x: 0, y: 0 };
        this.fov = 35;
        this.tanFOV = Math.tan(((Math.PI / 180) * this.fov) / 2);
        this.initialHeight = this.sizes.height;
        this.setInstance();
    }
    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            this.fov,
            this.sizes.width / this.sizes.height,
            0.1,
            100
        );
        this.instance.setFocalLength(50);
        if (this.initialHeight <= 1080) {
            this.instance.fov =
                (360 / Math.PI) *
                Math.atan(this.tanFOV * (this.sizes.height / 1080));
        }

        this.instance.updateProjectionMatrix();

        this.scene.add(this.instance);
    }
    setScene1() {
        this.instance.position.set(6.63, 1.12, 0.84);
        this.camera_target.set(-0.82, 0.55, 0.39);
        this.orbit_const.x = 0;
        this.orbit_const.y = 0.5;
    }
    setScene2() {
        this.instance.position.set(11.23, -5.1, -1.05);
        this.camera_target.set(3.64, -6.4, -0.76);
        this.orbit_const.x = -1.3;
        this.orbit_const.y = -5.5;
    }
    setScene3() {
        this.instance.position.set(10.0, -13.23, -1.16);
        this.camera_target.set(0.83, -14.35, -0.78);
        this.orbit_const.x = -0.76;
        this.orbit_const.y = -13.83;
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height;
        if (this.initialHeight <= 1080) {
            this.instance.fov =
                (360 / Math.PI) *
                Math.atan(this.tanFOV * (this.sizes.height / 1080));
        }
        this.instance.updateProjectionMatrix();
    }

    update() {
        this.instance.lookAt(this.camera_target);
        this.target.x = 1 * 0.002;
        this.target.y = 1 * 0.002;

        this.instance.position.y +=
            0.01 *
            (this.orbit_const.y + this.target.y - this.instance.position.y);
        this.instance.position.z +=
            0.01 *
            (this.orbit_const.x + this.target.x - this.instance.position.z);
    }
}
