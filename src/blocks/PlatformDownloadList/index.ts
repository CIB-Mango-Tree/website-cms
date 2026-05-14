import type {Block} from 'payload'

const PlatformDownloadListBlock: Block = {
  slug: 'platformDownloadList',
  labels: {
    singular: 'Add Platform Download List',
    plural: 'Add Platform Download Lists',
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
          name: 'downloadLink',
          required: true
        },
        {
          type: 'text',
          name: 'fileName',
          required: true
        },
        {
          type: 'number',
          name: 'fileSize',
          required: true
        },
        {
          type: 'text',
          name: 'requirements'
        },
      ]
    }
  ]
}

export default PlatformDownloadListBlock
