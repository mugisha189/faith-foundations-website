import { JQueryStatic } from 'jquery';

declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
  }
}

declare module "*.js" {
  const value: any;
  export default value;
}
