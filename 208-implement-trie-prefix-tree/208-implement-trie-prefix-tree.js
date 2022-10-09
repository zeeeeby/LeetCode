

var Trie = function() {
    this.strings = 0
    this.children = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let root = this
    for (let i in word) {
        let letter = word[i]
        let children = root.children
        if (!children[letter]) {
            children[letter] = new Trie()
        }
        root = children[letter]
    }
    root.strings++
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const result = findPrefix(this, word)
    return Boolean(result && result.strings > 0)
};

Trie.prototype.getAllWordsWithPrefix = function (prefix) {
    const root = findPrefix(this, prefix)
    if (!root) return []
    let ans = []
    word = prefix
    __getAllWords(root, ans)
    word = ""
    return ans
}

let word = ""
const __getAllWords = function(root, store) {
    for (let i = 0; i < root.strings; ++i) {
        store.push(word)
    }
    for (let letter in root.children) {
        word = word.concat(letter)
        __getAllWords(root.children[letter], store)
        word = word.slice(0, word.length - 1)
    }
}
Trie.prototype.getAllWords = function () {
    return this.getAllWordsWithPrefix("")
}


/** 
 * @param {string} prefix
 * @return {boolean}
 */

const findPrefix = (root, word) => {
    let ptr = root
    for (let letter of word) {
        if (!ptr.children[letter]) return null
        ptr = ptr.children[letter]
    }
    return ptr
}
Trie.prototype.startsWith = function(prefix) {
    return Boolean(findPrefix(this, prefix))
};



