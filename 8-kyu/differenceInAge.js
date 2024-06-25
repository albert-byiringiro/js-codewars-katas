const differenceInAges = (ages) => {
    const difference = Math.max(...ages) - Math.min(...ages);
    return [Math.min(...ages), Math.max(...ages), difference];
}

differenceInAges([82, 15, 6, 38, 35])