// components/TextAreaField.tsx
import React from 'react';

interface TextAreaFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ id, label, value, onChange }) => {
  return (
    <div className="w-full mb-4">
      <label className="block text-center text-gray-300 text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
        rows={20}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextAreaField;
