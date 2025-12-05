import React, { useState } from 'react';
import EmailInput from './components/EmailInput';
import './index.css';

function App() {
  const [label, setLabel] = useState('Email');
  const [value, setValue] = useState('olivia@untitledui.com');
  const [error, setError] = useState('This is an error message.');
  const [placeholder, setPlaceholder] = useState('olivia@untitledui.com');
  const [disabled, setDisabled] = useState(false);
  const [className, setClassName] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Email Input Component Playground
        </h1>
        <p className="text-gray-600 mb-8">
          Adjust the props below to see the component update in real-time
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls Panel */}
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Props Controls
            </h2>

            {/* Label Control */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Label
              </label>
              <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter label"
              />
            </div>

            {/* Value Control */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Value
              </label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter value"
              />
            </div>

            {/* Placeholder Control */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Placeholder
              </label>
              <input
                type="text"
                value={placeholder}
                onChange={(e) => setPlaceholder(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter placeholder"
              />
            </div>

            {/* Error Control */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Error Message
              </label>
              <input
                type="text"
                value={error}
                onChange={(e) => setError(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter error message (leave empty for no error)"
              />
              <button
                onClick={() => setError('')}
                className="mt-2 text-sm text-blue-600 hover:text-blue-800"
              >
                Clear Error
              </button>
            </div>

            {/* Disabled Control */}
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={disabled}
                  onChange={(e) => setDisabled(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  Disabled
                </span>
              </label>
            </div>

            {/* ClassName Control */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional className (optional)
              </label>
              <input
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., max-w-md"
              />
            </div>

            {/* Reset Button */}
            <button
              onClick={() => {
                setLabel('Email');
                setValue('olivia@untitledui.com');
                setError('This is an error message.');
                setPlaceholder('olivia@untitledui.com');
                setDisabled(false);
                setClassName('');
              }}
              className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Reset to Defaults
            </button>
          </div>

          {/* Preview Panel */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Live Preview
            </h2>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 bg-gray-50">
              <EmailInput
                label={label}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                error={error}
                placeholder={placeholder}
                disabled={disabled}
                className={className}
              />
            </div>

            {/* Code Preview */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Code Preview
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-xs overflow-x-auto">
                <code>{`<EmailInput
  label="${label}"
  value="${value}"
  onChange={(e) => setValue(e.target.value)}
  ${error ? `error="${error}"` : ''}
  ${placeholder !== 'olivia@untitledui.com' ? `placeholder="${placeholder}"` : ''}
  ${disabled ? 'disabled={true}' : ''}
  ${className ? `className="${className}"` : ''}
/>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

