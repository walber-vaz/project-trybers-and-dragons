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

  public get player01(): Fighter {
    return this._player01;
  }

  public get monsters(): SimpleFighter[] {
    return this._monsters;
  }

  private playerAttackMonsters() {
    const { monsters } = this;
    const monstersAlive = monsters.filter(({ lifePoints }) => lifePoints > 0);
    this._player01.attack(monstersAlive[0]);
  }

  private monstersAttackPlayer() {
    const { player01, monsters } = this;
    monsters.forEach((monster) => {
      if (player01.lifePoints > 0) {
        monster.attack(this._player01);
      }
    });
  }

  public fight(): number {
    const { player01, monsters } = this;
    while (
      player01.lifePoints > 0
      && monsters.some(({ lifePoints }) => lifePoints > 0)
    ) {
      this.playerAttackMonsters();
      this.monstersAttackPlayer();
    }

    return super.fight();
  }
}
