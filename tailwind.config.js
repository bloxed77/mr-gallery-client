/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily:{
            'silk': ['"Silkscreen"', 'cursive']
        }
        ,extend: {
            backgroundImage:{
                'preview-image':"url('https://i.pinimg.com/1200x/19/a5/46/19a54683ed8b78abcd96ebe08c4f4194.jpg')"
            },
            fontSize:{
                'xs':['7px','10px']
            },
            boxShadow: {
                'cd': '6px 5px 3px 0px rgb(0 0 0 / 0.1), 0px 0px 1px 1px rgb(0 0 0 / 0.1)',
                'lgb':'0px 0px 15px -3px rgb(0 0 0 / 0.1), 5px 0px 10px 0px rgb(0 0 0 / 0.1)'
            },
            spacing: {
                '88': '22rem',
                '112': '28rem',
                '116': '29rem',
                '120': '30rem',
                '128': '32rem',
                '144': '36rem',
                '154': '38rem',
                '158': '39rem',
                '160': '40rem',
                '168': '42rem',
                '184': '46rem',
                '200': '50rem',
                '216': '54rem',
                '220': '55rem',
                '224': '56rem',
                '232': '58rem',
                '280': '70rem'
            },
        },
    },
    plugins: [],
};
