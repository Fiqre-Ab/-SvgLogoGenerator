const { Triangle, Square, Circle } = require("../shape");

describe("Triangle", () => {
  test("make sure the triangle size text color has no error", () => {
    const triangle = new Triangle("blue", "red", "FFF");
    const svg =triangle.render();

const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
     <polygon points="100, 15 200, 200 0, 200"  fill="red" />
     <text x="100" y="185" font-size="70" text-anchor="middle" fill="blue">FFF</text>
    </svg>`

      
    if (svg == expectedSvg) {
      console.error('\x1b[31m', 'Error: SVG does not match expected result.');
      console.error('\x1b[0m', 'expected:', expectedSvg);
      console.error('\x1b[0m', 'Actual:', svg);
    }

    console.log('Actual:', svg);
    console.log('Expected:', expectedSvg);
    expect(svg).toEqual(expectedSvg);
  });
});




describe("Square", () => {
  test("make sure the square size text color has no error", () => {
    const square = new Square("black", "green", "dow");
    const svg=square.render();
    const expectedSvg=  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="100" fill="green" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">dow</text>

</svg>`
      
    if (svg !== expectedSvg) {
      console.error('\x1b[31m', 'Error: SVG does not match expected result.');
      console.error('\x1b[0m', 'expected:', expectedSvg);
      console.error('\x1b[0m', 'Actual:', svg);
    }

    console.log('Actual:', svg);
    console.log('Expected:', expectedSvg);
    expect(svg).toEqual(expectedSvg);
  });
});

describe("Circle", () => {
  test("make sure the circle size text color has no error", () => {
    const circle = new Circle("pink", "yellow", "mny");
    const svg=circle.render();
    const expectedSvg=  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="yellow" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">mny</text>

</svg>`
        
    if (svg !== expectedSvg) {
      console.error('\x1b[31m', 'Error: SVG does not match expected result.');
      console.error('\x1b[0m', 'expected:', expectedSvg);
      console.error('\x1b[0m', 'Actual:', svg);
    }

    console.log('Actual:', svg);
    console.log('Expected:', expectedSvg);
    expect(svg).toEqual(expectedSvg);
  });
});
