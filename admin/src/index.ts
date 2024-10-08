import { getTranslation } from './utils/getTranslation';
import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';
import translations from './translations'; 

export default {
  register(app: any) {
    app.addMenuLink({
      to: `plugins/${PLUGIN_ID}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${PLUGIN_ID}.plugin.name`,
        defaultMessage: PLUGIN_ID,
      },
      Component: async () => {
        const { App } = await import('./pages/App');

        return App;
      },
    });

    app.customFields.register({
      pluginId: PLUGIN_ID,
      name: PLUGIN_ID,
      type: 'string',
      intlLabel: {
        id: getTranslation(`label`),
        defaultMessage: 'Encryptable',
      },
      intlDescription: {
        id: getTranslation(`description`),
        defaultMessage: 'Adds Encryptable fields',
      },
      components: {
        Input: async () => import('./components/Field'),
      },
      options: {
        base: [
          {
            intlLabel: {
              id: getTranslation(`options.advanced.regex.hint`),
              defaultMessage: 'Input hint',
            },
            name: 'options.hint',
            type: 'text',
            defaultValue: null,
            description: {
              id: getTranslation(`options.advanced.regex.hint.description`),
              defaultMessage: 'The text of the regular expression hint',
            },
          },
          {
            intlLabel: {
              id: getTranslation(`options.advanced.regex`),
              defaultMessage: 'RegExp pattern',
            },
            name: 'regex',
            type: 'text',
            defaultValue: null,
            description: {
              id: `content-type-builder.form.attributes.item.regex`,
              defaultMessage: 'The text of the regular expression',
            },
          },
        ],
        advanced: [
          {
            sectionTitle: {
              id: getTranslation('role_settings'),
              defaultMessage: 'Role Settings',
            },
            items: [
              {
                intlLabel: {
                  id: getTranslation('options.role_selector.label'),
                  defaultMessage: 'Select one or more roles',
                },
                description: {
                  id: getTranslation('options.role_selector.description'),
                  defaultMessage: 'Only for these roles the values will be decrypted',
                },
                name: 'options.roles',
                type: 'multiselect',
                options: [],
              },
            ],
          },
          {
            sectionTitle: {
              id: 'global.settings',
              defaultMessage: 'Settings',
            },
            items: [
              {
                name: 'required',
                type: 'checkbox',
                intlLabel: {
                  id: 'content-type-builder.form.attribute.item.requiredField',
                  defaultMessage: 'Required field',
                },
                description: {
                  id: 'content-type-builder.form.attribute.item.requiredField.description',
                  defaultMessage: "You won't be able to create an entry if this field is empty**",
                },
              },
              {
                name: 'private',
                type: 'checkbox',
                intlLabel: {
                  id: 'content-type-builder.form.attribute.item.privateField',
                  defaultMessage: 'Private field',
                },
                description: {
                  id: 'content-type-builder.form.attribute.item.privateField.description',
                  defaultMessage: 'This field will not show up in the API response',
                },
              },
              {
                name: 'maxLength',
                type: 'checkbox-with-number-field',
                intlLabel: {
                  id: 'content-type-builder.form.attribute.item.maximumLength',
                  defaultMessage: 'Maximum length',
                },
              },
              {
                name: 'minLength',
                type: 'checkbox-with-number-field',
                intlLabel: {
                  id: 'content-type-builder.form.attribute.item.minimumLength',
                  defaultMessage: 'Minimum length',
                },
              },
            ],
          },
        ],
      },
    });

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });
  },

  async registerTrads(app: any) {
    const { locales } = app;

    const importedTranslations = [
      {
        data: translations.en,
        locale: 'en'
      }
    ];

    return importedTranslations;
  },
};
