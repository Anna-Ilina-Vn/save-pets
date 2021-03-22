class Generate {
  names = []

  components = (context) => {
    const initialState = {};

    return context.keys().reduce((acc, fileName) => {
      const withRender = context(fileName);
      const name = fileName
        .replace(/^\.\//, "")
        .replace(/\.svg$/, "");

      this.names.push(name);

      return {
        ...acc,
        [`${name}-icon`]: withRender.default,
      };
    }, initialState);
  }
}

export {
  Generate,
};
