import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Mage extends Archetype {
  private static _createdArchetypeInstances = 0;
  energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdArchetypeInstances;
  }
}