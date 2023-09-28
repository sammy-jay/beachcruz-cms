export default {
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    {
      name: 'boat',
      title: 'Boat',
      type: 'reference',
      to: [{type: 'boat'}],
      description: 'The boat that is booked',
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{type: 'user'}], // Assuming you have a 'user' schema for user information
      description: 'The user making the booking',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      description: 'The start date of the booking',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
      description: 'The end date of the booking',
    },
    {
      name: 'additionalDetails',
      title: 'Additional Details',
      type: 'text',
      description: 'Any additional details or notes about the booking',
    },
    {
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      description: 'The total price of the booking',
    },
    {
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: ['Pending', 'Paid', 'Refunded', 'Cancelled'],
      },
      description: 'The payment status of the booking',
    },
    {
      name: 'bookingStatus',
      title: 'Booking Status',
      type: 'string',
      options: {
        list: ['Confirmed', 'Pending', 'Cancelled'],
      },
      description: 'The booking status',
    },
  ],
}
