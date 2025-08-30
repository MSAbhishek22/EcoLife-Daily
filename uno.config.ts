import { defineConfig, presetUno, presetIcons, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: '#4CAF50',
      'primary-600': '#3E8E41',
      accent: '#A8E6CF',
      'accent-100': '#F4F1DE',
      'eco-50': '#A8E6CF',
      'eco-100': '#D7F0E0',
      'eco-500': '#4CAF50',
      brown: '#8D6E63',
    },
    boxShadow: {
      premium: '0 8px 24px rgba(20,40,30,0.08)'
    },
    borderRadius: {
      md: '14px'
    }
  },
  shortcuts: [
    // map your commonly used classes or components
    ['btn', 'inline-flex items-center gap-2 px-3 py-2 rounded-[10px] cursor-pointer border-0'],
    ['btn-primary', 'bg-gradient-to-r from-primary to-primary-600 text-white shadow-[0_6px_20px_rgba(46,125,50,0.12)]'],
    ['btn-outline', 'bg-white border border-[rgba(23,58,42,0.12)]'],

    ['text-headings', 'text-[#173A2A] dark:text-[#E8F3EA]'],
    ['text-muted', 'text-[#5C6F61] dark:text-[#A9C2B0]'],

    ['bg-card', 'bg-white dark:bg-[#0F1D16]'],
    ['shadow-premium', 'shadow-[0_8px_24px_rgba(20,40,30,0.08)]'],
    ['border-card', 'border border-[rgba(23,58,42,0.06)]'],

    // palette bridges
    ['text-primary', 'text-primary'],
    ['bg-primary', 'bg-primary'],
    ['text-eco-500', 'text-eco-500'],
    ['bg-eco-50', 'bg-eco-50'],
    ['bg-eco-100', 'bg-eco-100'],
    ['bg-eco-500', 'bg-eco-500 text-white'],
    ['text-accent', 'text-accent'],
    ['text-accent-soft', 'text-accent'],
    ['bg-accent-100', 'bg-accent-100'],
  ],
  safelist: [
    // ensure dynamic classes still generate
    'bg-eco-50', 'bg-eco-100', 'bg-eco-500', 'text-eco-500', 'text-primary', 'bg-primary',
  ],
})
