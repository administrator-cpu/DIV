'use server'

import axios from 'axios';

export async function sendEmail({ name, email, subject, message }) {
  const token = process.env.MAILING_API_TOKEN;
  
  try {
    const response = await axios.post(
      'https://mailing-rc5o.onrender.com/api/send-email',
      {
        fromName:"DIV",
        to: "administrator@fab5network.com",
        subject: subject || `DIV Inquiry from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    return { success: true, data: response.data };

  } catch (error) {
    console.error("Email sending failed:", error.response?.data || error.message);
    
    return { 
      success: false, 
      error: error.response?.data?.message || error.message 
    };
  }
}