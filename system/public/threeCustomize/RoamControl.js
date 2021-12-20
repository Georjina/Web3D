import * as Three from 'three';
import { Octree } from 'three/examples/jsm/math/Octree';
import { Capsule } from 'three/examples/jsm/math/Capsule';
import {manager} from "./Manager.js";

class RoamControl {
    constructor() {
        this.clock = new Three.Clock();
        this.GRAVITY = 30;

        this.STEPS_PER_FRAME = 5;

        this.worldOctree = new Octree();

        this.playerCollider = new Capsule(new Three.Vector3(100, 0.35, 0), new Three.Vector3(100, 1, 0), 0.35);

        this.playerVelocity = new Three.Vector3();
        this.playerDirection = new Three.Vector3();

        this.playerOnFloor = false;
        this.camera = new Three.PerspectiveCamera(75, manager.container.innerWidth / manager.container.innerHeight, 0.1, 1000);
    }

    playerCollitions() {

        const result = this.worldOctree.capsuleIntersect(this.playerCollider);

        this.playerOnFloor = false;

        if (result) {

            this.playerOnFloor = result.normal.y > 0;

            if (!this.playerOnFloor) {

                this.playerVelocity.addScaledVector(result.normal, -result.normal.dot(this.playerVelocity));

            }
            this.playerCollider.translate(result.normal.multiplyScalar(result.depth));
        }
    }

    updatePlayer(deltaTime) {

        if (this.playerOnFloor) {

            const damping = Math.exp(-3 * deltaTime) - 1;
            this.playerVelocity.addScaledVector(this.playerVelocity, damping);

        } else {

            this.playerVelocity.y -= this.GRAVITY * deltaTime;

        }

        const deltaPosition = this.playerVelocity.clone().multiplyScalar(deltaTime);
        this.playerCollider.translate(deltaPosition);

        this.playerCollitions();

        this.camera.position.copy(this.playerCollider.end);
    }


    getForwardVector() {
        this.camera.getWorldDirection(this.playerDirection);
        this.playerDirection.y = 0;
        this.playerDirection.normalize();

        return this.playerDirection;

        this.camera.position.copy(this.playerCollider.end);
    }

    getSideVector() {

        this.camera.getWorldDirection(this.playerDirection);
        this.playerDirection.y = 0;
        this.playerDirection.normalize();
        this.playerDirection.cross(this.camera.up);

        return this.playerDirection;

    }

    controls(deltaTime) {

        const speed = 25;

        if (this.playerOnFloor) {

            if (manager.keyStates['KeyW']) {

                this.playerVelocity.add(this.getForwardVector().multiplyScalar(speed * deltaTime));

            }

            if (manager.keyStates['KeyS']) {

                this.playerVelocity.add(this.getForwardVector().multiplyScalar(-speed * deltaTime));

            }

            if (manager.keyStates['KeyA']) {

                this.playerVelocity.add(this.getSideVector().multiplyScalar(-speed * deltaTime));

            }

            if (manager.keyStates['KeyD']) {

                this.playerVelocity.add(this.getSideVector().multiplyScalar(speed * deltaTime));

            }

            if (manager.keyStates['Space']) {

                this.playerVelocity.y = 15;
            }
        }
    }
}

export {RoamControl}
