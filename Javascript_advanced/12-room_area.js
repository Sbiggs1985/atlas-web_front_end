/** @format */

// Create the 'roomDimensions' object
// Creating an object named 'roomDimensions' that represents the dimensions of a room.
// Two attributes: 'width' & 'length', which are set to 50 and 100 respectively.
// Also has a method 'getArea', it calculates the surface area of the room using its width and length.

const roomDimensions = {
  width: 50,
  length: 100,
  getArea: function () {
    return this.width * this.length;
  },
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

console.log(roomDimensions.getArea());
console.log(boundGetArea());
