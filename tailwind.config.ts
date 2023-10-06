import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  daisyui: {
    themes: ['light', {
      dark: {
        "primary": "#02d140",
        "secondary": "#c64d4f",
        "accent": "#3e9ba0",
        "neutral": "#1a1726",
        "base-100": "#3a3a3b", 
        "info": "#92dcf7",
        "success": "#6fe79b",
        "warning": "#f1d065",  
        "error": "#e25a5f",
        "accent-content": "#fff"
      }
    },
    {
      light: {
        "primary": "#eac220",
        "secondary": "#db6f41",
        "accent": "#8fbcea",
        "neutral": "#2c2a3c",
        "base-100": "#e2e6e9",
        "info": "#83b0e7",
        "success": "#15753a",
        "warning": "#ad5e10",
        "error": "#f22c40",
        "accent-content": "#000"
      }
    } 
  ]
  },
  plugins: [
    require("daisyui")
  ],
};
export default config;
