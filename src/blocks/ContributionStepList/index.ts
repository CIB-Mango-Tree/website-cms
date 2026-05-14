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
          type: 'select',
          name: 'icon',
          options: [
            {
              label: 'Bug',
              value: 'bug'
            },
            {
              label: 'Code',
              value: 'code'
            },
            {
              label: 'Light Bulb',
              value: 'lightbulb'
            },
            {
              label: 'Book',
              value: 'book'
            },
          ]
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
      ]
    }
  ]
}

export default ContributionStepListBlock
