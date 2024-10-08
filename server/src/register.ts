import type { Core } from '@strapi/strapi';
// import PLUGIN_ID from '../../admin/src/pluginId';
const PLUGIN_ID = 'strapi-encryptable-field'

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  // register phase
  strapi.customFields.register({
    name: PLUGIN_ID,
    plugin: PLUGIN_ID,
    type: 'text',
  });
};

export default register;
