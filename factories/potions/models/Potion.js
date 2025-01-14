export class Potion {
    name;
    type;
    modifiers;
  
    constructor(name = '', type = '', modifiers = { 
        intelligence: 0, 
        dexterity: 0, 
        constitution: 0, 
        insanity: 0, 
        charisma: 0, 
        strength: 0 
      }) {
      this.modifiers = modifiers;
      this.name = name;
      this.type = type;
    }
  }
