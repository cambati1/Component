# Email Input Component

A reusable email input component with error state styling, built with React and Tailwind CSS.

## Features

- Email input field with mail icon
- Error state with red border and alert icon
- Customizable label and error message
- Disabled state support
- Matches Figma design specifications

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Usage

```jsx
import EmailInput from './components/EmailInput';

function MyForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  return (
    <EmailInput
      label="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={error}
      placeholder="Enter your email"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | `'Email'` | Input label text |
| `value` | string | `''` | Input value |
| `onChange` | function | - | Change handler function |
| `error` | string | `''` | Error message to display |
| `placeholder` | string | `'olivia@untitledui.com'` | Placeholder text |
| `disabled` | boolean | `false` | Disabled state |
| `className` | string | `''` | Additional CSS classes |

## Design Tokens

- **Label**: Gray/700 (#414651), Inter Medium, 14px
- **Input Text**: Gray/500 (#717680), Inter Regular, 16px
- **Error**: Error/500 (#F04438), Inter Regular, 14px
- **Border Radius**: 8px
- **Gap**: 6px between elements

