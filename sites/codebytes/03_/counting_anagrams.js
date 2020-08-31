const Solutions = (S) => {
    let solution = 0;
    const hashmap = {};
    const uniqueWordList = [...new Set(S.split(/\s+/))]

    // Iterate over unique word list
    for (const word of uniqueWordList) {
        // sort word
        let sortedWord = word.split('').sort().join('');
        if (sortedWord in hashmap) {
            solution += 1;
        }
        else {
            hashmap[sortedWord] = 1;
        }
    }
    return solution;
};

console.log(Solutions("a c b c run urn urn"));