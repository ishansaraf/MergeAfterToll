export interface Vehicle {
  getX(): number;
  getY(): number;
  getSize(): number;
  render(): void;
  update(): void;
}
