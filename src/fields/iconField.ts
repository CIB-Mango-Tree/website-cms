import type { Field } from 'payload';

const IconField: Field = {
  name: 'icon',
  type: 'text',
  admin: {
    components: {
      Field: '@/fields/IconPickerField#IconPickerField',
    },
  },
};

export default IconField
