import React, { useState } from 'react';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmitHandler = event => {
    event.preventDefault();
    setSuccessMessage(`Thank you for subscribing with ${email}!`);
    setEmail(''); // Clear the input field after submission
  };

  return (
    <div className="mt-10 text-center pt-20 my-10 border-t border-white px-4 sm:px-0">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-700 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      {successMessage && (
        <p className="text-green-600 mt-3">{successMessage}</p>
      )}
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-3/4 lg:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3"
      >
        <input
          className="rounded-full w-full sm:flex-1 outline-none border border-gray-300 p-2"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          aria-label="Email address"
        />
        <button
          type="submit"
          className="rounded-full bg-black text-pink-300 text-xs px-6 py-3 sm:px-10 sm:py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
