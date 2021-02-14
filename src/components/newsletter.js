import React, { useState } from 'react';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function Newsletter() {
  const borderStyle = 'border-0 border-black border-solid border-b';

  const [state, setState] = useState({ email: '' });
  const { email } = state;

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    }).catch(error => console.error(error));
  };

  return (
    <div className={`flex min-h-24 ${borderStyle}`}>
      <div className="flex flex-1 flex-col justify-center items-center text-sm my-4 w-full">
        <p className="m-0 font-sans font-medium">
          加入我們的 Newsletter 一起發現更多最新故事吧！
        </p>
        <div className={`px-4 lg:w-1/3 flex`}>
          <form
            name="email"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className={`flex flex-1 m-0 ${borderStyle}`}
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="email" />
            <input
              type="email"
              name="email"
              className="flex-1 py-2 border-0 focus:outline-none font-sans"
              placeholder="Your email"
              value={email}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="border-0 bg-white cursor-pointer font-sans"
            >
              JOIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
