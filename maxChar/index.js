// Return the character most commonly used in the string.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

function maxChar(str) {
  /**
   * loop through the string
   * dynamically create an object with key=char and value  = mode
   * return the char with the highest value
   */
  var counter = 0;
  var characterObject = {}; //javascript object definition
  var maxChar;

  for (let x = 0; x < str.length; x++){
    let singleCharacter = str[x]; // "Hello", str[0] = H
    characterObject[singleCharacter] = characterObject[singleCharacter] + 1 || 1; // if none {"H":1}, if exist already {"H":1+1}
    /**
     * First {"h":1} > 0 , counter = 1 changes to the value of "h"
     * Second {"e":1} not greater than 1 so the below won't run
     * third {"l":1} not greater than counter = 1
     * fourth {"l":2} > counter, counter updates to 2 and maxCHar becomes l
    */
    if (characterObject[singleCharacter] > counter) {
      maxChar = singleCharacter;
      counter = characterObject[singleCharacter];
    }
  }
  return maxChar;
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Max Character", () => {
  it("maxChar() finds the most frequently used character", () => {
    assert.equal(maxChar("a"), "a");
    assert.equal(maxChar("test"), "t");
    assert.equal(maxChar("I loveeeeee noodles"), "e");
    assert.equal(maxChar("1337"), "3");
  });
});

mocha.run();
