let arr =
  [
    {
      id: 'firstName',
      placeholder: 'First name',
      required: true,
      type: 'text',
    },
    {
      id: 'lastName',
      placeholder: 'Last name',
      required: true,
      type: 'text',
    },
    {
      id: 'Email',
      required: true,
      type: 'text',
    },
    {
      id: 'address1',
      placeholder: 'Address 1',
      required: false,
      type: 'text',
    },
    {
      id: 'city',
      required: false,
      type: 'text',
    },
    {
      id: 'state',
      type: 'text',
      required: false,
    },
    {
      id: 'zip',
      type: 'text',
      required: false,
    },
    {
      id: 'phone',
      required: true,
      type: 'text',
    },
    {
      id: 'jobTitle',
      options: [
        'Engineer - lead',
        'Engineer - mid level',
        'Engineer - junion',
        'Engineer - front end focused',
        'Engineer - backend focused',
        'Engineer - full stack',
      ],
      placeholder: 'Please select job title',
      required: false,
      type: 'select',
    },
    {
      id: 'exerience',
      options: [
        'less than 1 year',
        '1 - 3 years',
        '3 - 5 years',
        'more than 5 years'
      ],
      placeholder: 'Please choose number of years you\'ve been developing',
      required: true,
      type: 'select',
    },
    {
      id: 'exerience',
      options: [
        'JavaScrip',
        'HTML',
        'CSS',
        'SASS',
        'NodeJS',
        'Java',
        'AWS - Lambda',
        'AWS - IAM',
        'AWS - DynamoDB',
        'AWS - S3',
      ],
      placeholder: ' Please select coding experience - select all that apply',
      required: true,
      multiple: true,
      type: 'selects',
    },
    {
      id: 'reason',
      placeholder: 'Describe why you are a good fit for the job you are applying for.',
      required: false,
      type: 'textarea',
    }
  ]
export default arr;