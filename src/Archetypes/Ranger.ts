import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Ranger extends Archetype {
  private static _createdArchetypeInstances = 0;
  energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdArchetypeInstances;
  }
}