/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                priFont: "'Poppins', sans-serif",
                secFont: "'Montserrat', sans-serif",
            },
            colors: {
                priColor: "#111111",
            },
            textColor: {
                priText: "#3c3c3c",
                secText: "#d7d8df",
                priBold: "#1e1e1e",
                secBold: "#ebebef",
            },
            backgroundColor: {
                priBG: "#f5f5f7",
                secBG: "#f0f0f3",
            },
            width: {
                priWidth: "clamp(200px, 90vw, 1200px)",
                secWidth: "clamp(200px, 90vw, 800px)",
                terWidth: "clamp(200px, 90vw, 600px)",
                quaWidth: "clamp(200px, 90vw, 400px)",
            },
            backgroundImage: {
                priBGImg: "url('../../assets/hero-bg.webp')",
                secBGImg: "url('../../assets/banner-bg.webp')",
            },
        },
        screens: {
            xsm: "400px",
            sm: "500px",
            md: "750px",
            lg: "1000px",
            xl: "1200px",
            "2xl": "1400px",
        },
    },
    plugins: [],
};
