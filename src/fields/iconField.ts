import type { Field } from 'payload';

const IconField: Field = {
  name: 'icon',
  type: 'text',
  label: {
    singular: 'Add a Icon',
    plural: 'Add Icons'
  },
  admin: {
    components: {
      Field: '@/fields/IconPickerField#IconPickerField',
    },
  },
};

export default IconField
