const express = require('express');
const { getTemperature } = require('./Temperature/temperature.service');
const { getBranchLength } = require('./Trees/tree.service');

const router = express.Router();

router.post('/length', async (req, res) => {
  const temperature = await getTemperature();
  const treeLength = getBranchLength({ branch: req.body.tree, wait: req.body.wait, temperature: temperature });
  res.json(treeLength);
});

module.exports = { router };
