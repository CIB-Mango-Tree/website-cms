import type {Block} from 'payload'

const InstallMethodListBlock: Block = {
  slug: 'installMethodListBlock',
  labels: {
    singular: 'Add Install Method List',
    plural: 'Add Install Method Lists',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'platform',
          required: true
        },
        {
          type: 'text',
          name: 'title',
          required: true
        }
      ]
    },
    {
      type: 'array',
      name: 'commands',
      fields: [
        {
          type: 'text',
          name: 'content',
          required: true
        }
      ],
    },
    {
      type: 'text',
      name: 'footnote',
    }
  ]
}

export default InstallMethodListBlock
