import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Warrior extends Archetype {
  private static _createdArchetypeInstances = 0;
  energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }
}