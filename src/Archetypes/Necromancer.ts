import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Necromancer extends Archetype {
  private static _createdArchetypeInstances = 0;
  energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdArchetypeInstances;
  }
}