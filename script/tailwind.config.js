;(() => {
  if (typeof tailwind === 'undefined') {
    window.tailwind = {}
  }
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#3955A2',
          'background-light': '#f6f7f8',
          'background-dark': '#101922',
        },
        fontFamily: {
          display: ['Space Grotesk'],
        },
        borderRadius: {
          DEFAULT: '0.25rem',
          lg: '0.5rem',
          xl: '0.75rem',
          full: '9999px',
        },
      },
    },
  }
})()
