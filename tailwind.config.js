/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navlogo: "#7e3391",
        firstbar: "#5E0075",
        btn_location: "#7E3391",
        topbar: "#5E0075",
        form_border: "#71717A",
        tab_section:'#272727 ',
        backgro_status: "#4933911A",

      },
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
