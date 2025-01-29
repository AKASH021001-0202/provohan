/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navlogo: "#3B3391",
        firstbar: "#0A0075",
        btn_location: "#3B3391",
        topbar: "#0A0075",
        form_border: "#71717A",
        tab_section:'#272727 ',
        backgro_status: "#4933911A",

      },
     
        scrollbar: ['hidden'], // Enables `scrollbar-hidden`
     
      width: {
        search: "480px",
        otp: "850px",
      },
      height: {
        fourty: "40px",
        min_600: "640px",
        form_height: "53px",
        login_form:"530px",
      }, 
       boxShadow: {
        otp: '0 0px 6px #ddd',
      },
      screens: {
        tablet: "640px",

        laptop: "1024px",

        desktop: "1280px",
      },
      backgroundImage: {
        login: "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
