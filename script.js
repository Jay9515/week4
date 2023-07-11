function isSimilar(obj1, obj2) {
  function isElementSimilar(elem1, elem2) {
    if (typeof elem1 !== typeof elem2) {
      return false;
    }

    if (Array.isArray(elem1) && Array.isArray(elem2)) {
      if (elem1.length !== elem2.length) {
        return false;
      }
      for (let i = 0; i < elem1.length; i++) {
        if (!isElementSimilar(elem1[i], elem2[i])) {
          return false;
        }
      }
      return true;
    }

    if (
      typeof elem1 === "object" &&
      typeof elem2 === "object" &&
      elem1 !== null &&
      elem2 !== null
    ) {
      let keys1 = Object.keys(elem1);
      let keys2 = Object.keys(elem2);

      if (
        keys1.length !== keys2.length ||
        !isElementSimilar(keys1.sort(), keys2.sort())
      ) {
        return false;
      }

      for (const key of keys1) {
        if (!isElementSimilar(elem1[key], elem2[key])) {
          return false;
        }
      }

      return true;
    }

    return elem1 === elem2;
  }

  return isElementSimilar(obj1, obj2);
}

console.log(
  isSimilar(
    ["cars", "trains", ["roads", ["railway"]]],
    ["cars", "trains", ["roads", ["railways"]]]
  )
);

console.log(
  isSimilar(
    {
      pairs: [
        [3, 5],
        [1, 7],
        [2, 6],
        [0, 8],
      ],
    },
    {
      pairs: [
        [3, 5],
        [1, 1],
        [2, 6],
        [0, 8],
      ],
    }
  )
);

console.log(
  isSimilar(
    { Sam: 4, Elliot: 4, equality: true },
    { Sam: 4, Elliot: 5, equality: false }
  )
);

console.log(
  isSimilar(
    [{ D: [0, 3] }, { X: [1, 3] }, { D: [3, 7] }],
    [{ D: [0, 3] }, { X: [1, 3] }, { D: [3, 7] }]
  )
);

console.log(
  isSimilar(
    ["jay", "cmr", ["narayana", ["saikiran"]]],
    ["jay", "cmr", ["narayana", ["saikiran"]]]
  )
);

console.log(
  isSimilar(
    ["jay", "cmr", ["narayana", ["saikiran"]]],
    ["jayprakash", "cmr", ["narayana", ["saikiran"]]]
  )
);
