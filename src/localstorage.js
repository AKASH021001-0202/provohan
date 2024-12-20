const touchlink = {
    aboutUs: { name: "About Us", link: "/about-us" },
    blog: { name: "Blog", link: "/blog" },
    termsAndConditions: { name: "Terms & Conditions", link: "/terms-conditions" },
    privacyPolicy: { name: "Privacy & Policy", link: "/privacy-policy" }
};
const servicesList = {
    Cars: { name: "Cars", link: "#" },
    ElectricVehicle: { name: "Electric Vehicle", link: "#" },
    LuxuryCars: { name: "Luxury Cars", link: "#" },
    VintageVehicle: { name: "Vintage Vehicle", link: "#" },
    Bikes: { name: "Bikes", link: "#" },
    Buses: { name: "Buses", link: "#" },
    Bicycles: { name: "Bicycles", link: "#" }
};

const copyrights={
    copyrights: {name:"© 2024 Provahan Technologies Private Limited. All rights reserved.", link: "#"},
}

const carData = [
    {
      id: 1,
      name: "2023 Toyota Corolla",
      variant: "Altis 1.8 Petrol",
      price: "₹12,40,000",
      images: [
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
      ],
      distance: "12,000km",
      transmission: "Automatic",
      location: "Delhi",
      status: "Newly Added",
    },
    {
      id: 2,
      name: "2023 Honda City",
      variant: "ZX 1.5 Diesel",
      price: "₹10,80,000",
      images: [
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
      ],
      distance: "18,500km",
      transmission: "Manual",
      location: "Mumbai",
      status: "Newly Added",
    },
    {
      id: 3,
      name: "2023 Kia Seltos",
      variant: "HTK+ 1.5 Diesel",
      price: "₹14,20,000",
      images: [
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
      ],
      distance: "20,000km",
      transmission: "Automatic",
      location: "Pune",
      status: "Newly Added",
    },
    {
      id: 4,
      name: "2023 Tata Nexon",
      variant: "XZ+ 1.2 Petrol",
      price: "₹9,50,000",
      images: [
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
      ],
      distance: "22,000km",
      transmission: "Manual",
      location: "Bangalore",
      status: "Newly Added",
    },
    {
      id: 5,
      name: "2023 Mahindra Thar",
      variant: "LX 2.2 Diesel",
      price: "₹15,30,000",
      images: [
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
      ],
      distance: "8,000km",
      transmission: "Automatic",
      location: "Kochi",
      status: "Newly Added",
    },
    {
      id: 6,
      name: "2023 Renault Kwid",
      variant: "Climber 1.0 Petrol",
      price: "₹5,70,000",
      images: [
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
      ],
      distance: "10,500km",
      transmission: "Manual",
      location: "Hyderabad",
      status: "Newly Added",
    },
    {
      id: 7,
      name: "2023 Maruti Brezza",
      variant: "ZXI+ 1.5 Petrol",
      price: "₹12,00,000",
      images: [
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
      ],
      distance: "14,000km",
      transmission: "Automatic",
      location: "Ahmedabad",
      status: "Newly Added",
    },
    {
      id: 8,
      name: "2023 Ford EcoSport",
      variant: "Titanium 1.5 Diesel",
      price: "₹11,50,000",
      images: [
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
      ],
      distance: "17,000km",
      transmission: "Manual",
      location: "Jaipur",
      status: "Newly Added",
    },
    {
      id: 9,
      name: "2023 Skoda Octavia",
      variant: "L&K 2.0 Petrol",
      price: "₹25,00,000",
      images: [
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
        "https://i.ibb.co/F4kNKJS/1a649f3d9365ce5d90b85aa1852c7f6d.png",
      ],
      distance: "9,000km",
      transmission: "Automatic",
      location: "Chandigarh",
      status: "Newly Added",
    },
  ];
  
  const client1 = [
    {
      id: "1",
      img: "https://i.ibb.co/0G8ptvJ/Ford-Motor-Company-Logo-1.png",
      name: "Ford",
      count: "120+ Vehicle"
    },
    {
      id: "2",
      img: "https://i.ibb.co/41M0YHb/images-1.png",
      name: "Toyota",
      count: "120+ Vehicle"
    },
    {
      id: "3",
      img: "https://i.ibb.co/WWNL6rk/bmw-logo-248-C3-D90-E6-seeklogo-com-1.png",
      name: "BMW",
      count: "120+ Vehicle"
    },
    {
      id: "4",
      img: "https://i.ibb.co/RhBnSQ2/images-1-1.png",
      name: "Chevrolet",
      count: "120+ Vehicle"
    },
    {
      id: "5",
      img: "https://i.ibb.co/PGDyL21/2560px-Suzuki-logo-2-svg-1.png",
      name: "Suzuki",
      count: "120+ Vehicle"
    },
    {
      id: "6",
      img: "https://i.ibb.co/09Nk4KY/Kia-logo-1.png",
      name: "Kia",
      count: "120+ Vehicle"
    }
  ];
  
  const client2 = [
    {
      id: "7",
      img: "https://i.ibb.co/hckb7P3/png-transparent-logo-car-volkswagen-phaeton-brand-car-emblem-trademark-logo-1.png",
      name: "Volkswagen",
      count: "120+ Vehicle"
    },
    {
      id: "8",
      img: "https://i.ibb.co/hBKKMPm/images-2-1.png",
      name: "Honda",
      count: "120+ Vehicle"
    },
    {
      id: "9",
      img: "https://i.ibb.co/NxrPyBn/Nissan-logo-4-B3-C580-C8-A-seeklogo-com-1.png",
      name: "Nissan",
      count: "120+ Vehicle"
    },
    {
      id: "10",
      img: "https://i.ibb.co/hdfQdfL/8a7dc4991c159bf67264ce56c4365845-1.png",
      name: "Mazda",
      count: "120+ Vehicle"
    },
    {
      id: "11",
      img: "https://i.ibb.co/Kr6wXLY/hyundai-logo-1990-download-1.png",
      name: "Hyundai",
      count: "120+ Vehicle"
    },
    {
      id: "12",
      img: "https://i.ibb.co/R9r3532/images-3-1.png",
      name: "Subaru",
      count: "120+ Vehicle"
    }
  ];
  const faqs = [
    {
      question: "1. Is Provahan website safe for transactions?",
      answer:
        "We prioritize user safety by verifying listings, providing secure messaging, and offering guidance for safe transactions. ",
    },
    {
      question: "2. Are the listed vehicles are verified?",
      answer:
        "Yes, we verify all listings to ensure that all the customer meet our quality standards and provide accurate information. ",
    },
    {
      question: "3. Do you offer warranties on used vehicles?",
      answer:
        "After you select the vehicle, check the listing details or discuss warranty terms with us.",
    },
    {
      question: "4. What if I encounter a problem with a transaction?",
      answer:
        "Reach out to our customer support team, and we’ll assist you in resolving any issues.",
    },
    {
      question: "5. How can I contact customer support?",
      answer:
        "You can reach us via email at provahanindia@gmail.com or use the Contact Us form on the website.",
    },
  ];

  
export { touchlink ,servicesList,copyrights,carData,client2,client1,faqs };