import {Generate} from "./lib/generate";

const vectors = new Generate();

const requireTemplate = require.context("./", false, /^((?!\.pure\.svg$).)*\.svg$/);

const components = vectors.components(requireTemplate);
const {names} = vectors;

export {
  components,
  names,
};
