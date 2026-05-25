import IconField from '@/fields/iconField'
import type { Block } from 'payload'

const ContributionStepListBlock: Block = {
  slug: 'contributionStepList',
  interfaceName: 'ContributionStepList',
  labels: {
    singular: 'Add a Contribution Step List',
    plural: 'Add Contribution Step Lists'
  },
  fields: [
    {
      type: 'array',
      name: 'steps',
      fields: [
        {
          type: 'text',
          name: 'title',
          required: true
        },
        {
          type: 'row',
          fields: [
            {
              type: 'text',
              name: 'ctaLink',
              required: true
            },
            {
              type: 'text',
              name: 'ctaName',
              required: true
            }
          ]
        },
        {
          type: 'textarea',
          name: 'description'
        },
        IconField
      ]
    }
  ]
}

export default ContributionStepListBlock
