import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideApollo } from "apollo-angular"
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { AppEnv } from '@environments/app.environment';
import { routes } from './app.routes';
import { httpHandlerInterceptor } from './shared/interceptors';


const pokeGqlApiUrl = AppEnv().externalApis.pokegql.hostUrl;

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([httpHandlerInterceptor,])
    ),
    provideApollo(() => {
      const httpLink = inject(HttpLink);
      return {
        link: httpLink.create({
          uri: pokeGqlApiUrl 
        }),
        cache: new InMemoryCache()
      }
    }),
  ]
};
