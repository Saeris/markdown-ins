import insPlugin from "markdown-it-ins";

export const activate = () => ({
  extendMarkdownIt: (md) => md.use(insPlugin),
});
