# AET Design Tokens System

> **Foundational design pillars for the AET website redesign**  
> Creating genuine, reliable, warm, welcoming, and experienced digital experiences

## 🎯 Overview

This design tokens system serves as the single source of truth for all design decisions in the AET website redesign. Built specifically for a one-man taxi service transferring clients from airports to ski resorts in the French Alps, these tokens embody the brand attributes of being genuine, reliable, warm, welcoming, and experienced.

## 📁 Files Structure

```
├── tokens.json          # Master design tokens file
├── tokens.schema.json   # JSON schema for validation
└── README.md           # This documentation
```

## 🏗️ Token Categories

### Grid System
**Responsive breakpoints with column-based layout**
- **Mobile**: ≤380px, 4 columns, 24px margins, 16px gaps
- **Tablet**: 381-768px, 8 columns, 56px margins, 20px gaps
- **Desktop**: 769-1440px+, 12 columns, 84px margins, 24px gaps

### Spacing Scale
**4px base unit system for consistent vertical rhythm**
- Base unit: `4px`
- Scale: `2px` to `118px` following systematic progression
- Usage: margins, padding, component spacing

### Color Palette
**Brand-aligned colors with semantic roles**
- **Brand**: Primary slate (`#4F5B62`) with hover/active states
- **Background**: Light gray (`#F5F5F5`) and white variations
- **Text**: Dark slate primary with secondary and helper variants
- **States**: Hover, focus, error, disabled, and selected states

### Typography System
**Premium font pairing for alpine luxury**
- **Headings**: GT Walsheim Trial (distinctive, premium)
- **Body**: Geist (clean, readable)
- **Scale**: 12px to 48px with appropriate line-heights
- **Weights**: 400 (normal), 500 (medium), 700 (bold)

### Border Radius
**Consistent corner treatments**
- Small (4px): Inputs, subtle elements
- Medium (8px): Buttons, cards
- Large (12px+): Prominent elements
- Full (50%): Circular elements (progress dots)

## 🎨 Component Mapping

Each component references specific tokens, ensuring consistency:

```json
{
  "button": {
    "primary": {
      "consumes": [
        "color.brand.primary",
        "color.text.inverse", 
        "spacing.3xl",
        "borderRadius.md"
      ]
    }
  }
}
```

## 🛠️ Implementation Guide

### 1. Tailwind CSS Integration

Convert tokens to Tailwind configuration:

```javascript
// tailwind.config.js
const tokens = require('./tokens.json');

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: tokens.tokens.color.brand.primary.value,
          'primary-hover': tokens.tokens.color.brand['primary-hover'].value,
        },
        background: {
          primary: tokens.tokens.color.background.primary.value,
          secondary: tokens.tokens.color.background.secondary.value,
        }
      },
      spacing: {
        xs: tokens.tokens.spacing.xs.value,
        sm: tokens.tokens.spacing.sm.value,
        // ... continue for all spacing tokens
      },
      fontFamily: {
        heading: tokens.tokens.typography.fontFamily.heading.value.split(','),
        body: tokens.tokens.typography.fontFamily.body.value.split(','),
      }
    }
  }
};
```

### 2. CSS Custom Properties

Generate CSS variables for browser support:

```css
:root {
  /* Colors */
  --color-brand-primary: #4F5B62;
  --color-brand-primary-hover: #3D474D;
  --color-background-primary: #F5F5F5;
  
  /* Spacing */
  --spacing-xs: 2px;
  --spacing-sm: 4px;
  --spacing-md: 8px;
  
  /* Typography */
  --font-heading: 'GT Walsheim Trial', sans-serif;
  --font-body: 'Geist', sans-serif;
}
```

### 3. React/Next.js Usage

```tsx
// components/Button.tsx
const Button = ({ variant = 'primary', children, ...props }) => {
  const baseClasses = `
    h-12 px-6 rounded-md font-medium 
    transition-all duration-200 ease-in-out
  `;
  
  const variantClasses = {
    primary: 'bg-brand-primary hover:bg-brand-primary-hover text-white',
    secondary: 'bg-white border border-brand-primary text-brand-primary hover:bg-gray-50'
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

## ✅ Validation

The tokens follow a strict JSON schema for consistency:

```bash
# Install a JSON schema validator
npm install -g ajv-cli

# Validate tokens against schema
ajv validate -s tokens.schema.json -d tokens.json
```

## 🚀 Next Steps

1. **Setup Build Pipeline**: Integrate token generation into your build process
2. **Component Library**: Create React components using these tokens
3. **Documentation Site**: Generate visual documentation from tokens
4. **CI/CD Validation**: Add schema validation to your CI pipeline

## 📊 Token Usage Examples

### Grid Layout
```css
.container {
  display: grid;
  grid-template-columns: 84px repeat(12, 1fr) 84px; /* Desktop */
  gap: 24px;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 24px 1fr 24px; /* Mobile */
    gap: 16px;
  }
}
```

### Form Components
```css
.form-input {
  height: 48px;
  padding: 12px 16px;
  background: var(--color-background-secondary);
  border: 1px solid transparent;
  border-radius: 4px;
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--color-text-primary);
}

.form-input:focus {
  border-color: var(--color-brand-primary);
  box-shadow: 0 0 0 2px var(--color-brand-primary-focus);
}
```

## 🎨 Brand Alignment

These tokens specifically support AET's brand attributes:

- **Genuine**: Honest color palette without artificial brightness
- **Reliable**: Consistent spacing and predictable interactions  
- **Warm**: Welcoming background colors and comfortable typography
- **Welcoming**: Accessible contrast ratios and generous spacing
- **Experienced**: Premium typography choices and refined details

## 🔄 Maintenance

- **Semantic Versioning**: Follow semver for token updates
- **Backward Compatibility**: Deprecate before removing tokens
- **Documentation**: Update component mapping with changes
- **Testing**: Validate visual regression with token updates

---

*Built for the AET website redesign - elevating alpine transportation experiences through thoughtful design systems.* 