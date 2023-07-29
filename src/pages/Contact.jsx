import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

export const contactAction = async ({request}) => {

  const data = await request.formData()

  const datas = {
    email: data.get('email'),
    message: data.get('message')
  }
  //console.log("datas", datas);

  if(datas.message.length < 10){
    return {error: 'Your message must be at least 10 characters!'}
  }

  return redirect('/')
}

export default function Contact() {

  const data = useActionData();

  return (
    <div className='contact'>
        <h3>Contact Us</h3>
        <Form method='post' action='/help/contact'>
            <label>
                <span>Email Address</span>
                <input type='email' name='email' required />
            </label>
            <label>
                <span>Write Your Message</span>
                <textarea name='message' required></textarea>
            </label>
            <button>Send</button>
            {data && data.error && <p>{data.error}</p>}
        </Form>
    </div>
  )
}
