const expect = require('chai').expect;
const treeService = require('../Trees/tree.service');

describe('Tree service', () => {
  describe('treeLength', () => {
    it('should return 3', () => {
      const tree0 = { size: 3 };
      expect(treeService.getBranchLength({ branch: tree0 })).to.equal(3);
    });
    it('should return 8,5', () => {
      const tree3 = {
        size: 2,
        a: [
          {
            size: 1,
          },
          {
            size: 2,
            b: [
              {
                size: 3,
              },
              {
                size: 0.5,
              },
            ],
          },
        ],
      };
      expect(treeService.getBranchLength({ branch: tree3 })).to.equal(8.5);
    });
    it('should return 21', () => {
      const tree2 = {
        size: 2,
        b: [
          {
            size: 2,
          },
        ],
        c: [
          {
            size: 1,
            a: [
              {
                size: 3,
              },
              {
                size: 6,
              },
            ],
          },
          {
            size: 2,
          },
          {
            size: 2,
            d: [
              {
                size: 5,
              },
            ],
          },
        ],
      };
      expect(treeService.getBranchLength({ branch: tree2, wait: true, temperature: 20 })).to.equal(21);
    });
  });
});
