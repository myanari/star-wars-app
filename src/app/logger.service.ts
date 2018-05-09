export class LoggerService {

  constructor() { }

  logChange(logText: string) {
    console.log(logText);
  }

  logError(errorText: string) {
    return errorText;
  }
}
