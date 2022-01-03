import { CollectionConfig } from 'payload/types';

const Jobs: CollectionConfig = {
  slug: 'jobs',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'employmentType',
      type: 'select',
      options: [
        {
          label: 'Full-time',
          value: 'full_time',
        },
        {
          label: 'Part-time',
          value: 'part_time',
        },
        {
          label: 'Casual',
          value: 'casual',
        },
      ]
    },
    {
      name: 'salaryRange',
      type: 'select',
      options: [
        {
          label: '$50 000 - $70 000',
          value: '50_70',
        },
        {
          label: '$70 000 - $90 000',
          value: '70_90',
        },
        {
          label: '$90 000 - $110 000',
          value: '90_110',
        },
        {
          label: '$110 000 - $130 000',
          value: '110_130',
        },
        {
          label: '$130 000 - $150 000',
          value: '130_150',
        },
      ]
    }
  ],
}

export default Jobs;