import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  
  log(message: string, ...optionalParams: any[]): void {
    console.log(message, ...optionalParams);
  }

  info(message: string, ...optionalParams: any[]): void {
    console.info(message, ...optionalParams);
  }

  warn(message: string, ...optionalParams: any[]): void {
    console.warn(message, ...optionalParams);
  }

  error(message: string, ...optionalParams: any[]): void {
    console.error(message, ...optionalParams);
  }
}
