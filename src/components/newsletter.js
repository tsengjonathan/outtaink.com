import React, { useState } from 'react';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function Newsletter({ footer = false }) {
  const borderStyle = `border-0 border-solid ${footer ? 'border-white' : 'border-b border-black'}`;

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
    <div className={`flex min-h-24 ${footer ? null : 'lg:border-t'} ${borderStyle}`}>
      <div className={`flex flex-1 flex-col justify-center items-center text-sm w-full ${footer ? null : 'my-4'}`}>
        <p className={`m-0 font-mixed font-medium tracking-widest ${footer ? 'text-white' : null}`}>
          加入我們的 Newsletter List 一起發現更多最新故事吧！
        </p>
        <div className={`w-full flex ${footer ? 'lg:w-full my-4' : 'lg:w-1/3 px-4'}`}>
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
              className="flex-1 py-2 border-0 focus:outline-none font-en tracking-widest bg-transparent"
              placeholder="Your email"
              value={email}
              onChange={handleChange}
            />
            <button
              type="submit"
              className={`border-0 cursor-pointer font-en tracking-widest bg-transparent ${footer ? 'text-white' : null}`}
            >
              JOIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
