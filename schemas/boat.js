// /schemas/boat.js

export default {
  name: 'boat',
  title: 'Boat',
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
    // Add more fields as needed, such as capacity, features, etc.
  ],
}
