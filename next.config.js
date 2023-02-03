// next.config.js
module.exports = {
  excludeFile: (str) => /\*.{spec,test,ui-jest.spec,unit.spec}.[tj]s?(x)/.test(str),
  pageExtensions: ["!.ui-jest.spec.ts(x)", "!.unit.spec.ts(x)"],
};
