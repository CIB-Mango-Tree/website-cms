import type { Block } from 'payload'

const LinkButtonsBlock: Block = {
  slug: 'linkButtons',
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
          options: ['primary', 'secondary', 'transparent', 'white', 'gold'],
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
          type: 'text',
          name: 'icon'
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
      ],
    },
  ],
}

export default LinkButtonsBlock
