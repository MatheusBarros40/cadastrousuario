import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  apiUrl: 'https://localhost:7281/api/Users',
  pageSize: 5,
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations()
  ]
};
