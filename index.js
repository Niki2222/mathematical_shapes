/* a. diagonal = side * Math.sqrt(2); */
const sideLength = 9;
const square = sideLength * Math.sqrt(2);
console.log(square);

/* b. area = Math.sqrt(p(p-a)(p-b)(p-c)), p = (a+b+c)/2; */
const a = 5; 
const b = 6; 
const c = 7;
const p = (a + b + c)/2;
const area = Math.sqrt(p *(p -a ) * (p - b) * (p - c));
console.log(area);

/* c. circleCircumfer = 2 * PI * r; circleArea = PI * r ^ 2; */
const radius = 4;
const circleCircumfer = 2 * Math.PI * radius;
const circleArea = Math.PI * Math.pow(radius, 2);
console.log(circleCircumfer);
console.log(circleArea);
