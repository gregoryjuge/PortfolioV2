import React, { useRef } from "react";
import emailjs from "emailjs-com";
// import emailjs from "@emailjs/browser";
import "./contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6wze9ns",
        "template_2rrv7ds",
        form.current,
        "hQj1jXABM1vocnmGh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="h-screen mt-4">
      <h2 className="mt-12 text-center text-3xl font-semibold">
        <span>
          💬 Vous souhaitez échanger avec moi ?<br />
        </span>
        <span>C'est par ici 👇🏻</span>
      </h2>
      <div className="mt-16 sm:mx-auto sm:w-full sm:max-w-md" id="contact">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div>
              <label
                // htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Nom & Prénom
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="user_name"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="user_email"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  name="message"
                  required
                  className="block w-full h-28 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                value="Envoyer"
                className="sendButton flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
