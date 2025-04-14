# Movie Landing Page

A modern movie landing page built with Next.js and Material-UI.

## Theme System

This project uses a custom theme system built on top of Material-UI's theming capabilities. The theme provides consistent styling across the entire application, with special attention to heading colors and typography.

### Theme Structure

The theme is defined in `src/app/theme.js` and includes:

- **Colors**: Primary, secondary, background, text, and heading colors
- **Typography**: Consistent font sizes, weights, and line heights for all text elements
- **Components**: Custom styling for common components like buttons and cards

### Using the Theme

The theme is applied globally through the `ThemeProvider` component in `src/app/layout.js`. All components have access to the theme through the `useTheme` hook:

```jsx
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <div style={{ color: theme.palette.primary.main }}>
      This text uses the primary color from the theme
    </div>
  );
}
```

### Section Headings

For consistent section headings across the application, use the `SectionHeading` component:

```jsx
import SectionHeading from '../common/SectionHeading';

function MySection() {
  return (
    <section>
      <SectionHeading 
        title="Section Title" 
        subtitle="Optional subtitle text"
      />
      {/* Section content */}
    </section>
  );
}
```

### CSS Variables

The theme also defines CSS variables that can be used in CSS files:

- `--heading-primary`: Primary heading color
- `--heading-secondary`: Secondary heading color
- `--text-primary`: Primary text color
- `--text-secondary`: Secondary text color
- `--background-color`: Background color

Example usage in CSS:

```css
.my-heading {
  color: var(--heading-primary, #1a237e);
}
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `src/app/theme.js`: Theme configuration
- `src/app/components/ThemeProvider.js`: Theme provider component
- `src/app/components/common/SectionHeading.js`: Reusable section heading component
- `src/app/components/`: All application components
