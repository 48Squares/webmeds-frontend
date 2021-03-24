module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                // 'regal-blue': '#2874f0',
                'regal-blue': '#ee82ee'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
