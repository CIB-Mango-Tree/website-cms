import IconField from '@/fields/iconField'
import type { Block } from 'payload'

const LinkButtonsBlock: Block = {
  slug: 'linkButtons',
  interfaceName: 'LinkButtons',
  labels: {
    singular: 'Link Buttons Block',
    plural: 'Link Buttons Blocks',
  },
  fields: [
    {
      type: 'array',
      name: 'items',
      fields: [
        {
          type: 'select',
          name: 'type',
          options: ['primary', 'secondary', 'gold', 'transparent', 'transparent-secondary', 'transparent-gold'],
          defaultValue: 'primary',
          required: true,
        },
        {
          type: 'text',
          name: 'name',
          required: true,
        },
        {
          type: 'text',
          name: 'link',
          required: true
        },
        {
          type: 'row',
          fields: [
            {
              type: 'checkbox',
              name: 'shine effect',
            },
            {
              type: 'checkbox',
              name: 'hover effect',
            },
          ],
        },
        IconField,
      ],
    },
  ],
}

export default LinkButtonsBlock
