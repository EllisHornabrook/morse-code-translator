const inputOne = document.querySelector('#input-one');
const inputTwo = document.querySelector('#input-two');
const translateButton = document.querySelector('#button')

const code = {
    a: ". _",
    b: "_ . . .",
    c: "_ . _ .",
    d: "_ . .",
    e: ".",
    f: ". . _ .",
    g: "_ _ .",
    h: ". . . .",
    i: ". .",
    j: ". _ _ _ _",
    k: "_ . _",
    l: ". _ . .",
    m: "_ _",
    n: "_ .",
    o: "_ _ _",
    p: ". _ _ .",
    q: "_ _ . _",
    r: ". _ .",
    s: ". . .",
    t: "_",
    u: ". . _",
    v: ". . . _",
    w: ". _ _",
    x: "_ . . _",
    y: "_ . _ _",
    z: "_ _ . .",
    1: ". _ _ _",
    2: ". . _ _ _",
    3: ". . . _ _",
    4: ". . . . _",
    5: ". . . . .",
    6: "_ . . . .",
    7: "_ _ . . .",
    8: "_ _ _ . .",
    9: "_ _ _ _ .",
    0: "_ _ _ _ _",
}

translateButton.addEventListener("click", (english) => {
    english = inputOne.value;
    english = english.toLowerCase();
    english = english.split("");
    for (i = 0; i < english.length; i++) {
      english[i] = code[english[i]];
    }
    english = english.join(" / ");
    inputTwo.value = english;
  });