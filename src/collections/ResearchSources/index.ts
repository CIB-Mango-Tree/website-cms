import type { CollectionConfig } from 'payload'

const ResearchSources: CollectionConfig = {
  slug: 'researchSources',
  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
    },
    {
      type: 'text',
      name: 'authors',
    },
    {
      type: 'text',
      name: 'publication',
    },
    {
      type: 'number',
      name: 'year',
    },
    {
      type: 'text',
      name: 'link',
      required: true,
    },
  ],
}

export default ResearchSources
