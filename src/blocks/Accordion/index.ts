import type { Block } from 'payload'

const AccordionBlock: Block = {
  slug: 'accordion',
  labels: {
    singular: 'Accordion',
    plural: 'Accordions',
  },
  fields: [
    {
      type: 'array',
      name: 'items',
      fields: [
        {
          type: 'text',
          name: 'title',
        },
        {
          type: 'richText',
          name: 'content',
        },
      ],
    },
  ],
}

export default AccordionBlock
