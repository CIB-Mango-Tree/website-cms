import type { Block } from 'payload'

const BadgeListBlock: Block = {
  slug: 'badgeList',
  labels: {
    singular: 'Add Badge List',
    plural: 'Add Badge Lists',
  },
  fields: [
    {
      type: 'array',
      name: 'items',
      fields: [
        {
          type: 'text',
          name: 'content',
          required: true,
        },
      ],
    },
  ],
}

export default BadgeListBlock
