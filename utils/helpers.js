export function shuffleArray(array) {
    // Create a copy of the array to avoid modifying the original
    const copy = [...array];

    // Shuffle the array using a Fisher-Yates algorithm
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}