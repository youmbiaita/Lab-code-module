import { Character } from "./character.mjs";


// Companion class

export class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type; // Type of the companion (e.g., Cat, Dog, etc.)
        this.tricks = []; // Array to store tricks the companion can perform
    }

    // Method for the companion to perform a trick
    performTrick(trick) {
        console.log(`${this.name} performs ${trick}!`);
    }

    // Method to teach the companion a new trick
    teachTrick(trick) {
        this.tricks.push(trick);
        console.log(`${this.name} learned a new trick: ${trick}.`);
    }
}