import IconField from '@/fields/iconField'
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
          type: 'text',
          name: 'title',
          required: true,
        },
        {
          type: 'richText',
          name: 'content',
          required: true,
        },
        IconField
      ],
    },
  ],
}

export default SelectorBlock
