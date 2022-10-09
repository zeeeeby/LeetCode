
var WordDictionary = function() {
    this.isWord = false
    this.children = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let root = this
    for (let i in word) {
        let letter = word[i]
        let children = root.children
        if (!children[letter]) {
            children[letter] = new WordDictionary()
        }
        root = children[letter]
    }
    root.isWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */

WordDictionary.prototype.search = function(word) {
    let root = this
    for (let i = 0; i < word.length; ++i) {
        let letter = word[i]
        if (letter === '.') {
            for (let p in root.children) {
                if (root.children[p].search(word.slice(i + 1))) {
                    return true
                }
            }
            return false
        }
        if (!root.children[letter]) 
            return false
        root = root.children[letter]  
    }
    return root && root.isWord
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */