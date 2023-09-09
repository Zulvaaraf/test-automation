class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  calculateRectanglePerimeter(...args) {
    if (args.length !== 2) {
      throw new Error('function only have 2 parameter');
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('function only accept number parameter');
    }

    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea() {}
  calculateTrianglePerimeter() {}
  calculateTriangleArea() {}
}

module.exports = FigureCalculator;
