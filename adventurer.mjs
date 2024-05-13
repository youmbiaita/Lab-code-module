import { Character } from "./character.mjs";

export class Adventurer extends Character {
    //part4 
    static ROLES = ["Fighter", "Healer", "Wizard"];
    constructor(name, role) {
      super(name);
      // Adventurers have specialized roles.
      if (Adventurer.ROLES.includes(role)) {
        this.role = role;
      }
  
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
      this.skills = [];
      this.experience = 0;
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  
    getExperience(amount) {
      this.experience += amount;
      console.log(`${this.name} gained ${amount} experience points.`);
    }
  
    getSkills(skill) {
      this.skills.push(skill);
      console.log(`${this.name} learned a new skill: ${skill}.`);
    }
  }