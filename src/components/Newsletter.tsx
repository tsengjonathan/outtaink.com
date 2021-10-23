import React, { useState } from 'react';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function Newsletter() {
  const borderStyle = 'border-0 border-solid border-white';

  const [state, setState] = useState({ email: '' });
  const { email } = state;

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email.trim()) {
      const form = e.target;
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      }).catch(error => console.error(error));
    }
  };

  return (
    <div className={`flex min-h-24 ${borderStyle}`}>
      <div className="flex flex-1 flex-col justify-center text-sm w-full">
        <p className="m-0 font-mixed md:font-medium tracking-wider text-white text-lg">
          加入我們的 Newsletter List 一起發現更多最新故事吧！
        </p>
        <div className="w-full flex lg:w-4/5 my-4">
          <form
            name="email"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className={`flex flex-1 m-0 ${borderStyle} border-b`}
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="email" />
            <input
              type="email"
              name="email"
              className="flex-1 py-2 border-0 focus:outline-none font-en tracking-widest bg-transparent text-white"
              placeholder="Your email"
              value={email}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="border-0 cursor-pointer font-en tracking-widest bg-transparent text-white"
            >
              JOIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
