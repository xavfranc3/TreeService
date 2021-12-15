function getBranchLength({ branch, wait, temperature }) {
  const { size, ...junctions } = branch;
  return Object.keys(junctions).reduce(
    (totalSize, key) => totalSize + sumJunction[key]({ junction: branch[key], wait, temperature }),
    size
  );

  // return (
  //   branch.size +

  // sumJunctionA({ junction: branch.a }) +
  // sumJunctionB({ junction: branch.b, wait }) +
  // sumJunctionC({ junction: branch.c, wait }) +
  // sumJunctionD({ junction: branch.d, wait, temperature })
}

const sumJunction = {
  a: sumJunctionA,
  b: sumJunctionB,
  c: sumJunctionC,
  d: sumJunctionD,
};

function sumJunctionA({ junction, wait, temperature }) {
  if (!junction) return 0;
  return junction.reduce((size, branch) => {
    return size + getBranchLength({ branch, wait, temperature });
  }, 0);
}

function sumJunctionB({ junction, wait, temperature }) {
  if (!junction) return 0;
  if (wait && junction.length % 2 !== 0) return 0;
  return junction.reduce((size, branch) => size + getBranchLength({ branch, wait, temperature }), 0);
}

function sumJunctionC({ junction, wait, temperature }) {
  if (!junction) return 0;
  if (wait && junction.length % 2 === 0) return 0;
  return junction.reduce((size, branch) => {
    return size + getBranchLength({ branch, wait, temperature });
  }, 0);
}

function sumJunctionD({ junction, wait, temperature }) {
  if (!junction) return 0;
  if (wait && temperature < 15) return 0;
  return junction.reduce((size, branch) => {
    return size + getBranchLength({ branch, wait, temperature });
  }, 0);
}

module.exports = { getBranchLength };
