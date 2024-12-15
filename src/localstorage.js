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
  

export { touchlink ,servicesList,copyrights,carData };