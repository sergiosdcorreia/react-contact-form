import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form/Form';

/**
 * @config preparing config prop.
 * api: url for the server endpoint
 * title: form title
 * successMessage: message will show in the UI when mail is successfully sent.
 * errorMessage: message will show in the UI when mail is not sent.
 * fieldsConfig = data for each input/textarea field that is mapped into the Form component. Add or remove the Form fields here.
 */
const config = {
  api: `${process.env.REACT_APP_API}`,
  title: 'Contact Form',
  successMessage: 'Thank you for contacting.',
  errorMessage: 'Sorry we have some problems...',

  fieldsConfig:  [
   { id: 1, label: 'Name', fieldName: 'Name', type: 'text',placeholder:'Your name', isRequired: true , className:'name-field'},
   { id: 2, label: 'Email Address', fieldName: 'email', type: 'email', placeholder: ' Your Email', isRequired: true , className:'email-field'},
   { id: 3, label: 'Telephone Number', fieldName: 'telephone', type: 'text', placeholder: 'Your telephone number', isRequired: true , className:'telephone-field'},
   { id: 4, label: 'Message', fieldName: 'msg', type: 'textarea',placeholder:'Write something.....', isRequired: true , className:'message-field'}
  ]
}

/**
* To use the Form component include the config object as a prop like this:
* <Form config={config} />
*/

ReactDOM.render(<Form config={config} />, document.getElementById('root'));
