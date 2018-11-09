export interface Vehicle {
  getX(): number;
  getY(): number;
  getTargetX(): number;
  getTargetY(): number;
  getSize(): number;
  render(): void;
  update(): void;
}
