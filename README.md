### `npm install`

please go to the root fo the project and run npm install to install all the necessary npm modules.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000] to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Build this project for production.


### Using the component

You can use the form component like this  `<Form config={config} />`

### Component configuration

Change the component configuration in the ./index.js file and follow the instructions in the comments.

### .env

Make sure change api url in .env file

    $ REACT_APP_API = http://localhost/react-contact-form/api/contact/index.php

change this : http://localhost/react-contact-form/api/contact/index.php
to your server url.

### PHP Settings

Please go to ./api/config.php

and change adminEmail to your email. You will get email to this.
    $adminEmail =  "sergiosdcorreia@gmail.com"; 
