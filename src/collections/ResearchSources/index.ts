import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import type { CollectionConfig } from 'payload'

const ResearchSources: CollectionConfig = {
  slug: 'researchSources',
  access: {
    read: anyone,
    update: authenticated,
    delete: authenticated,
    create: authenticated
  },
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
