import { environment } from './environment';

export const AppEnv = () => ({
  externalApis: {
    pokegql: {
      hostName: environment.EXTERNAL_APIS.POKE_GQL.NAME,
      hostUrl: environment.EXTERNAL_APIS.POKE_GQL.URL
    }
  }
});
