import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player01: Fighter;
  private _monsters: SimpleFighter[];

  constructor(player01: Fighter, monsters: SimpleFighter[]) {
    super(player01);
    this._player01 = player01;
    this._monsters = monsters;
  }

  get player01(): Fighter {
    return this._player01;
  }

  get monsters(): SimpleFighter[] {
    return this._monsters;
  }

  private playerAttackMonsters(monstersAlive: SimpleFighter[]): void {
    this.player01.attack(monstersAlive[0]);
  }

  private monstersAttackPlayer(monstersAlive: SimpleFighter[]): void {
    monstersAlive.forEach((monster) => {
      if (this.player01.lifePoints > 0) {
        monster.attack(this._player01); 
      }
    });
  }

  fight(): number {
    const { player01, monsters } = this;
    let monstersAlive = this.monsters;

    while (
      player01.lifePoints > 0
      && monsters.some(({ lifePoints }) => lifePoints > 0)
    ) {
      this.playerAttackMonsters(monstersAlive);
      this.monstersAttackPlayer(monstersAlive);
      monstersAlive = monsters.filter(({ lifePoints }) => lifePoints > 0);
    }

    return super.fight();
  }
}