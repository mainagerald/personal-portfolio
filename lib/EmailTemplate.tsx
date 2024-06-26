import React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string; // Assuming email is also a string
  message:string,
}

export const  EmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName,
  email,
  message
}) => (
  <div>
    <p>Hello Flavian,</p>
    <p>
      {firstName} has submitted the contact form on your website. Their
      email is {email}
    </p>
    <div>
      <p>Here is their message:</p>
      <p>{message}</p>
    </div>
    <p>
      Regards,
      <br />
      {firstName}
    </p>
  </div>
);
