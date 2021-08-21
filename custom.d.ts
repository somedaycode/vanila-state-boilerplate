// svg 사용을 위한 TS 조건
declare module "*.svg" {
  const content: any;
  export default content;
}
