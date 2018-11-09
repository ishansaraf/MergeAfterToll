import { Tollbooth } from './tollbooth'

export class TollboothFactory {
  private world: World;
  private locktime: number;
  private rate: number;

  createTollbooth(x: number,
                  y: number,
                  targetX: number,
                  targetY: number): Tollbooth {
    return new Tollbooth(this.world, this.rate, this.locktime, x, y, targetX, targetY);
  }

  createTollboothRows(count: number, separation: number) {
    const center: number = this.world.ref.width / 2;
    const width: number = separation * number;
    const start: number = center - (width / 2);

    for(int i = 0; i < number; i++) {
      var x: number = start + (i * separation);
      this.createTollbooth(x, 350, x, 50);
    }
  }
}
