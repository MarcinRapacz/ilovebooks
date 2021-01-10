/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.md" {
  const content: {
    attributes: any;
    react: any;
  };
  export = content;
}
