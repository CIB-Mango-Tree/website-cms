import type { Block } from 'payload'

const DatasetListBlock: Block = {
  slug: 'datasetList',
  interfaceName: 'DatasetList',
  labels: {
    singular: 'Add a Dataset List',
    plural: 'Add Dataset Lists'
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
          type: 'text',
          name: 'description'
        },
        {
          type: 'text',
          name: 'link',
          required: true
        },
        {
          type: 'select',
          name: 'access',
          options: [
            {
              label: 'Free',
              value: 'free'
            },
            {
              label: 'API Required',
              value: 'api-required'
            },
            {
              label: 'Application Required',
              value: 'application-required'
            },
          ]
        },
        {
          type: 'text',
          name: 'color'
        },
      ]
    }
  ]
}

export default DatasetListBlock
