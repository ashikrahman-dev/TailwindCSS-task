/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"], // * for all files.
    theme: {
        extend: {},
        container: {
            center: true,
            padding: "2rem",
        },
        colors: {
            primary: "#4D50AD",
            gray: "#F5F6FA",
            white: "#ffffff",
            "dark-1": "#3A434C",
            "dark-2": "#74777E",
            "dark-3": "#E8E9ED",
            "dark-4": "#6C6F74",
            "dark-5": "#EBEBEB",
            red: "#FF5252",
        },
    },
    plugins: [],
};
