import React from 'react';
import MailIcon from './icons/MailIcon';
import AlertCircleIcon from './icons/AlertCircleIcon';

const EmailInput = ({
  label = 'Email',
  value = '',
  onChange,
  error = '',
  placeholder = 'olivia@untitledui.com',
  disabled = false,
  className = '',
}) => {
  const hasError = Boolean(error);

  return (
    <div className={`flex flex-col gap-[6px] items-start w-full ${className}`}>
      {/* Label */}
      <label className="font-medium leading-[20px] text-gray-700 text-[14px]">
        {label}
      </label>

      {/* Input Container */}
      <div
        className={`bg-white border border-solid relative rounded-[8px] w-full ${
          hasError ? 'border-[#fda29b]' : 'border-gray-300'
        }`}
      >
        <div className="box-border flex gap-[8px] items-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit] w-full">
          {/* Content with icon and input */}
          <div className="flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px shrink-0">
            {/* Mail Icon */}
            <div className="shrink-0 size-[20px]">
              <MailIcon />
            </div>

            {/* Input Field */}
            <input
              type="email"
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              disabled={disabled}
              className="flex-[1_0_0] font-normal leading-[24px] min-h-px min-w-px shrink-0 text-gray-500 text-[16px] outline-none bg-transparent placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Error Icon */}
          {hasError && (
            <div className="shrink-0 size-[16px]">
              <AlertCircleIcon />
            </div>
          )}
        </div>
      </div>

      {/* Error Message */}
      {hasError && (
        <p className="font-normal leading-[20px] shrink-0 text-error-500 text-[14px] w-full">
          {error}
        </p>
      )}
    </div>
  );
};

export default EmailInput;

