/**
 * Create a Class Trie
 * that can work with a trie data structure
 *
 * Instance Methods
 *
 * add( word )
 * @param word  string
 * @returns void
 *
 * exists( word )
 * @param word  string
 * @returns boolean
 *          true if the word exists in the trie, else false
 */

class Trie {
  constructor() {
    this.root = {
      neighbors: []
    };
  }

  isString(word) {
    if (typeof word !== 'string') {
      throw new TypeError('even though this is all 0s and 1s the interpreter says this isn\'t a string');
    }
  }

  add(word) {
    this.isString(word);

  }



}

module.exports = Trie;