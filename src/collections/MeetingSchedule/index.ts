import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import type { CollectionConfig } from 'payload'

const MeetingScheduleItems: CollectionConfig = {
  slug: 'meetingScheduleItems',
  disableDuplicate: true,
  access: {
    read: anyone,
    update: authenticated,
    delete: authenticated,
    create: authenticated
  },
  fields: [
    {
      type: 'select',
      name: 'type',
      options: ['virtual', 'in-person'],
      required: true,
    },
    {
      type: 'text',
      name: 'name',
      required: true,
      unique: true,
    },
    {
      type: 'text',
      name: 'day',
      required: true,
    },
    {
      type: 'text',
      name: 'time',
    },
    {
      type: 'text',
      name: 'link',
    },
  ],
}

export default MeetingScheduleItems
