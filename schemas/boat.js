export default {
  name: 'boat',
  title: 'Boat Listing',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the boat',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A description of the boat',
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'The featured image for the boat',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      description: 'Additional images of the boat',
    },
    {
      name: 'rentalPrice',
      title: 'Rental Price',
      type: 'object',
      fields: [
        {
          name: 'amount',
          title: 'Amount',
          type: 'number',
          description: 'The price amount',
        },
        {
          name: 'currency',
          title: 'Currency',
          type: 'string',
          description: 'The currency for the rental price',
        },
        {
          name: 'perDay',
          title: 'Per Day',
          type: 'boolean',
          description: 'Is the rental price per day?',
        },
      ],
      description: 'The rental price for the boat',
    },
    {
      name: 'currentLocation',
      title: 'Current Location',
      type: 'string',
      description: 'The current location of the boat',
    },
    {
      name: 'berths',
      title: 'Berths',
      type: 'number',
      description: 'The number of berths (sleeping spaces) available on the boat',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'object',
      fields: [
        {
          name: 'engine',
          title: 'Engine',
          type: 'string',
          description: 'Type of engine on the boat',
        },
        {
          name: 'length',
          title: 'Length',
          type: 'number',
          description: 'Length of the boat in meters',
        },
        {
          name: 'capacity',
          title: 'Capacity',
          type: 'number',
          description: 'Maximum capacity of the boat',
        },
      ],
      description: 'Features of the boat',
    },
  ],
}
