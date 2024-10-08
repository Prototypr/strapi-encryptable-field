/**
 * Application methods
 */
import bootstrap from './bootstrap';
import destroy from './destroy';
import register from './register';
import services from './services';

/**
 * Plugin server methods
 */
// import config from './config';
// import contentTypes from './content-types';
// import controllers from './controllers';
// import middlewares from './middlewares';
// import policies from './policies';
// import routes from './routes';

export const STRAPI_ENCRYPTABLE_FIELD = 'strapi-encryptable-field';


export default {
  register,
  bootstrap,
  destroy,
  services,
  // config,
  // controllers,
  // routes,
  // contentTypes,
  // policies,
  // middlewares,
};
