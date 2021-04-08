module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                // 'regal-blue': '#2874f0',
                'regal-blue': 'hsla(0, 100%, 50%, 0.5)'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
