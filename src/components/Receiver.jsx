// Receiver.jsx
import React from 'react';

export default function Receiver({ activated }) {
  return (
    <div
      className={`w-6 h-6 rounded-full transition-colors duration-300 ${
        activated ? 'bg-purple-500 shadow-[0_0_15px_5px_#7e22ce]' : 'bg-gray-600'
      }`}
    ></div>
  );
}
