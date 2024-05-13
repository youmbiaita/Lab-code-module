import {Adventurer} from "./adventurer.mjs"
import {Companion} from "./companion.mjs"
import {AdventurerFactory} from "./adventurerfactory.mjs"

const healers = new AdventurerFactory("Healer");
const robin3 = healers.generate("Robin");

const robin2 = new Adventurer("Robin", "Fighter");
robin2.inventory = ["sword", "potion", "artifact"];
robin2.companion = new Companion("Leo");
robin2.companion.type = "Cat";
robin2.companion.companion = new Companion("Frank");
robin2.companion.companion.type = "Flea";
robin2.companion.companion.inventory = ["small hat", "sunglasses"];
robin2.roll();
robin2.companion.companion.roll();
robin2.companion.roll();
robin2.scout();
robin2.getExperience(3);
robin2.getSkills("dentist");
robin2.companion.performTrick("trick");
robin2.companion.teachTrick("trick");