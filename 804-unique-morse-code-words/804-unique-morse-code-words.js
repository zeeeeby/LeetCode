/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let shift = "a".charCodeAt(0)
    let alphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let set = new Set()
    for (let i in words) {
        let word = Array.prototype.map.call(words[i], (w) => alphabet[w.charCodeAt(0) - shift]).join("")
        set.add(word)
    }
    return set.size
};