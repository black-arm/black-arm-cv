import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      listStyleImage: {
        star: 'url("/images/start.png")',
      }
    }
  },
  daisyui: {
    themes: [{
      dark: {
        "primary": "#0ea5e9",
        "secondary": "#c64d4f",
        "accent": "#3e9ba0",
        "neutral": "#1a1726",
        "base-100": "#3a3a3b",
        "base-200": "#5D5D5E",
        "base-300": "#838384",
        "info": "#92dcf7",
        "success": "#6fe79b",
        "warning": "#f1d065",  
        "error": "#e25a5f",
        "accent-content": "#fff"
      }
    },
    {
      light: {
        "primary": "#0ea5e9",
        "secondary": "#dc2626",
        "accent": "#1dcdbc",
        "neutral": "#2b3440",
        "base-100": "#ffffff",
        "info": "#3abff8",
        "success": "#36d399",
        "warning": "#fbbd23",           
        "error": "#f87272",
      }
    } 
  ]
  },
  plugins: [
    require("daisyui")
  ],
};
export default config;
