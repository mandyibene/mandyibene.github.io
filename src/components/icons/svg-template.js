const comments = `
// Auto-generated file created by svgr-cli source svg-template.js
// Run npm run icons:create to update
// Do not edit
`;
const template = (variables, { tpl }) => {
  return tpl`
${comments}
${variables.imports};
${variables.interfaces};
const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
${variables.exports};
`;
};

module.exports = template;