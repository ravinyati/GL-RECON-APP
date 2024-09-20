import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { environment } from '../environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductionLoggerService extends LoggerService {
  
  override log(message: string, ...optionalParams: any[]): void {
    if (!environment.production) {
      super.log(message, ...optionalParams);
    }
  }

  override info(message: string, ...optionalParams: any[]): void {
    if (!environment.production) {
      super.info(message, ...optionalParams);
    }
  }

  override warn(message: string, ...optionalParams: any[]): void {
    if (!environment.production) {
      super.warn(message, ...optionalParams);
    }
  }

  override error(message: string, ...optionalParams: any[]): void {
    // Always log errors, even in production
    super.error(message, ...optionalParams);
  }
}
