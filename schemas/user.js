export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      description: 'The email address of the user',
    },
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      description: 'The first name of the user',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      description: 'The last name of the user',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      description: 'The phone number of the user',
    }
  ],
}
