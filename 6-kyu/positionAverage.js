export function posAverage(s: string): number {
    // Split the input string into an array of substrings and trim any extra spaces
    const substrings = s.split(',').map(str => str.trim());
    const n = substrings.length; // Number of substrings
    let totalPositions = 0; // Total positions to be compared
    let commonPositions = 0; // Count of common positions

    // Compare each pair of substrings
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Compare each character in the pair of substrings
            for (let k = 0; k < substrings[i].length; k++) {
                if (substrings[i][k] === substrings[j][k]) {
                    commonPositions++; // Increment if characters match
                }
                totalPositions++; // Increment total positions compared
            }
        }
    }

    // Calculate the average percentage and format to 10 decimal places
    return parseFloat((commonPositions / totalPositions * 100).toFixed(10));
}
