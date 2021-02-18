class Rotator {
    #arr;
    
    /**
     * Method to rotate pixel around the center of the image
     * @param {Number} centerX - center of the width
     * @param {Number} centerY - center of the height
     * @param {Number} x - X coordinate
     * @param {Number} y - Y coordinate
     * @param {Number} angle - angle in radian at which to rotate
     */
    #rotateCoordinateAroundCenter(centerX, centerY, x, y, angle) {
        let xp = Math.round((x - centerX) * Math.cos(angle) - (y - centerY) * Math.sin(angle) + centerX);
        let yp = Math.round((x - centerX) * Math.sin(angle) + (y - centerY) * Math.cos(angle) + centerY);
        return [xp, yp];
    }

    /**
     * Method to get the position of red Component of the pixel
     * returns an Integer
     * @param {Number} x - X coordinate 
     * @param {Number} y - Y coordinate
     * @param {Number} width - width of the canvas
     */
    #getRedComponent(x, y, width) {
        let redPosition = y * (width * 4) + x * 4;
        return redPosition;
    }

    /**
     * Method to rotate an image to an arbitary angle.
     * Returns an ImageData object.
     * @param {ImageData} image - this is the ImageData buffer
     * @param {Number} angle - the angle to roate is in radian. should be less than 360 degrees(or 2 PI). +ve angle is clockwise and -ve is counter-clockwise rotation.
     */
    rotate(image, angle) {
        if (Math.abs(angle) <= Math.PI * 2) {
            let width = image.width;
            let height = image.height;

            let center_x = width / 2;
            let center_y = height / 2;

            this.#arr = new Uint8ClampedArray(width * height * 4);

            for (let i = 0; i < image.data.length; i += 4) {

                let x = (i / 4) % width;  // Get the X coordinate of the pixel
                let y = Math.floor((i / 4) / width);  // Get the Y coordinate of the pixel

                // let xp = Math.round((x - center_x) * Math.cos(angle) - (y - center_y) * Math.sin(angle) + center_x);
                // let yp = Math.round((x - center_x) * Math.sin(angle) + (y - center_y) * Math.cos(angle) + center_y);

                let coordinates = this.#rotateCoordinateAroundCenter(center_x, center_y, x, y, angle);

                let xp = coordinates[0];
                let yp = coordinates[1];

                let pos = this.#getRedComponent(xp, yp, width);

                if (0 <= xp < width && 0 <= yp < height) {
                    this.#arr[i + 0] = image.data[pos + 0];
                    this.#arr[i + 1] = image.data[pos + 1];
                    this.#arr[i + 2] = image.data[pos + 2];
                    this.#arr[i + 3] = image.data[pos + 3];
                }

            }
            return new ImageData(this.#arr, width, height);
        }
        else {
            throw new Error('Angle should be less than or equal 2 PI.');
        }

    }
}


export { Rotator };