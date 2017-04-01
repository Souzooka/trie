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
    let wordArr = word.split('');
    let currentNode = this.root;
    let matchFound = false;

    for (let i = 0; i < wordArr.length; i++) {
      for (var j = 0; j < currentNode.neighbors.length; j++) {
        if (currentNode.neighbors[j].value === wordArr[i]) {
          matchFound = true;
          break;
        }
        matchFound = false;
      }
      if (matchFound) {
        currentNode = currentNode.neighbors[j];
      } else {
        currentNode.neighbors.push( {
          value: wordArr[i],
          neighbors: [] });
        currentNode = currentNode.neighbors[currentNode.neighbors.length-1];
      }
      if (i === wordArr.length-1) {
        currentNode.isWord = true;
      }
    }
  }

  exists(word) {
    this.isString(word);
    let wordArr = word.split('');
    let currentNode = this.root;
    let matchFound = false;

    for (let i = 0; i < wordArr.length; i++) {
      for (var j = 0; j < currentNode.neighbors.length; j++) {
        if (currentNode.neighbors[j].value === wordArr[i]) {
          matchFound = true;
          break;
        }
        matchFound = false;
      }
      if (matchFound) {
        currentNode = currentNode.neighbors[j];
      } else {
        return false;
      }
      if (i === wordArr.length-1) {
        if (currentNode.isWord === true) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}

module.exports = Trie;