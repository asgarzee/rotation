# Image Rotation algorithm
The project implements a image rotation algorithm. This provides a class Rotator which can be imported to rotate an image at specific angle given in radian. rotator.js file has the source code for Rotator class in static directory. 
This algorithm has its limitation as well. The rotated image gets cropped from the sides when done on angles other than 90, 180, 270 and 360 degrees.
The project uses Jest for testing and performance API to measure performance matrices.

---
## Requirements

For development, you will need Node.js, express.js and NPM installed in your environement.

### Installation
- #### Node
Just go on [official Node.js website](https://nodejs.org/en/download/) and download the installer.


- #### Express
```
npm install express --save
```

- #### Clone repo
```
git clone git@github.com:asgarzee/rotation.git
cd rotation
```

- #### Install Dependencies
```
npm install
```

### Running 
- #### Run the App
```
node app.js
```

- #### Run tests
```
npm test
```
- ### Code Coverage
```
npm test -- --coverage
```

## References
- [Transformation Matrix](https://en.wikipedia.org/wiki/Transformation_matrix#Rotation)
- [Data Genetics](https://datagenetics.com/blog/august32013/index.html)
- [Basic Image Manipulation](https://www.codingame.com/playgrounds/2524/basic-image-manipulation/transformation)
- [Pixel manipulation with canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)