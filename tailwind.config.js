/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                overpass: ["Overpass", "sans-serif"],
            },
            colors: {
                white: "hsl(0, 0%, 100%)",
                grey: "hsl(217, 12%, 63%)",
                orange: "hsl(25, 97%, 53%)",
                blue: {
                    750: "#2D313A",
                    800: "hsl(213, 19%, 18%)",
                    900: "hsl(216, 12%, 8%)"
                }
            }
        },
    },
    plugins: [],
}
