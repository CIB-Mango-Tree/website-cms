import type { Block } from 'payload'

const SelectorBlock: Block = {
  slug: 'selector',
  interfaceName: 'Selector',
  labels: {
    singular: 'Selector Tab',
    plural: 'Selector Tabs',
  },
  fields: [
    {
      type: 'array',
      name: 'tabs',
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'text',
              name: 'title',
              required: true,
            },
            {
              type: 'text',
              name: 'icon',
            },
          ],
        },
        {
          type: 'richText',
          name: 'content',
          required: true,
        },
      ],
    },
  ],
}

export default SelectorBlock
