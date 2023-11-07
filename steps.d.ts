/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginPagePage = typeof import('./pages/LoginPage.js');
type CustomCommands = import('./customcommands_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPagePage: loginPagePage }
  interface Methods extends TestCafe, CustomCommands {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
