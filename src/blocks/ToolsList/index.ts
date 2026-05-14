import type { Block } from 'payload'

const ToolsListBlock: Block = {
  slug: 'toolsList',
  interfaceName: 'ToolsList',
  labels: {
    singular: 'Add a Tools List',
    plural: 'Add Tools Lists'
  },
  fields: [
    {
      type: 'array',
      name: 'items',
      fields: [
        {
          type: 'text',
          name: 'name',
          required: true
        },
        {
          type: 'textarea',
          name: 'description'
        },
        {
          type: 'text',
          name: 'link',
          required: true
        },
        {
          type: 'text',
          name: 'color'
        }
      ]
    }
  ]
}

export default ToolsListBlock
