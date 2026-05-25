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
          type: 'row',
          fields: [
            {
              type: 'date',
              name: 'date',
            },
            {
              type: 'text',
              name: 'publication',
            },
          ]
        },
        {
          type: 'text',
          name: 'link',
          required: true,
        },
        {
          type: 'textarea',
          name: 'description',
          required: true,
        },
        {
          type: 'upload',
          name: 'image',
          relationTo: 'media'
        },
      ],
    },
  ],
}

export default MediaNewsListBlock
