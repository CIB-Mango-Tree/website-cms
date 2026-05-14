import type { Block } from 'payload'

const MediaNewsListBlock: Block = {
  slug: 'mediaNewsList',
  interfaceName: 'MediaNewsList',
  labels: {
    singular: 'Media News List',
    plural: 'Media News Lists',
  },
  fields: [
    {
      type: 'array',
      name: 'items',
      fields: [
        {
          type: 'text',
          name: 'title',
          required: true,
        },
        {
          type: 'textarea',
          name: 'description',
          required: true,
        },
        {
          type: 'text',
          name: 'link',
          required: true,
        },
        {
          type: 'text',
          name: 'image',
        },
        {
          type: 'text',
          name: 'publication',
        },
        {
          type: 'date',
          name: 'date',
        },
      ],
    },
  ],
}

export default MediaNewsListBlock
