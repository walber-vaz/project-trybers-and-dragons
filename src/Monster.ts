import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  private set lifePoints(value: number) {
    if (value < 1) {
      this._lifePoints = -1;
    } else {
      this._lifePoints = value;
    }
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attckPoints: number): number {
    if (attckPoints > 0) {
      const currentLife = this.lifePoints - attckPoints;
      this.lifePoints = currentLife;
    }
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}
