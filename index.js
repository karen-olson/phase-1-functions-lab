// Code your solution in this file!

function distanceFromHqInBlocks(startingBlock) {
    /*if(startingBlock >= 42) {
        return startingBlock - 42;
    } else {
        return 42 - startingBlock;
    }
    */
    return Math.abs(startingBlock - 42);
} 

function distanceFromHqInFeet(startingBlock) {
    return distanceFromHqInBlocks(startingBlock) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    return Math.abs((startingBlock - endingBlock) * 264);
}

function calculatesFarePrice(startingBlock, endingBlock) {
    const feet = distanceTravelledInFeet(startingBlock, endingBlock);
    if (feet > 2500) {
        return 'cannot travel that far';
    } else if (feet > 2000) {
        return 25;
    } else if (feet > 400) {
        return (feet - 400) * .02;
    } else if (feet <= 400) {
        return 0;
    }
}

const price = calculatesFarePrice(50, 58);
price;