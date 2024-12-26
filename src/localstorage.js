const touchlink = {
  aboutUs: { name: "About Us", link: "/about-us" },
  blog: { name: "Blog", link: "/blog" },
  termsAndConditions: { name: "Terms & Conditions", link: "/terms-conditions" },
  privacyPolicy: { name: "Privacy & Policy", link: "/privacy-policy" },
};
const servicesList = {
  Cars: { name: "Cars", link: "#" },
  ElectricVehicle: { name: "Electric Vehicle", link: "#" },
  LuxuryCars: { name: "Luxury Cars", link: "#" },
  VintageVehicle: { name: "Vintage Vehicle", link: "#" },
  Bikes: { name: "Bikes", link: "#" },
  Buses: { name: "Buses", link: "#" },
  Bicycles: { name: "Bicycles", link: "#" },
};

const copyrights = {
  copyrights: {
    name: "© 2024 Provahan Technologies Private Limited. All rights reserved.",
    link: "#",
  },
};

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
    count: "120+ Vehicle",
  },
  {
    id: "2",
    img: "https://i.ibb.co/41M0YHb/images-1.png",
    name: "Toyota",
    count: "120+ Vehicle",
  },
  {
    id: "3",
    img: "https://i.ibb.co/WWNL6rk/bmw-logo-248-C3-D90-E6-seeklogo-com-1.png",
    name: "BMW",
    count: "120+ Vehicle",
  },
  {
    id: "4",
    img: "https://i.ibb.co/RhBnSQ2/images-1-1.png",
    name: "Chevrolet",
    count: "120+ Vehicle",
  },
  {
    id: "5",
    img: "https://i.ibb.co/PGDyL21/2560px-Suzuki-logo-2-svg-1.png",
    name: "Suzuki",
    count: "120+ Vehicle",
  },
  {
    id: "6",
    img: "https://i.ibb.co/09Nk4KY/Kia-logo-1.png",
    name: "Kia",
    count: "120+ Vehicle",
  },
];

const singleproduct = [
  {
    id: "1",
    name:"Hyundai Verna 1.6 SX 2015",
    type:"51k km - Petrol - Manual",
    location:"Parked at:Thiruverkadu, Chennai",
    price:"₹6,55,025",
    img: [
      {
        "original": "https://i.ibb.co/xDDg7Ls/894811e7d3cf6d19d3adc13c5d1ed763.png",
        "thumbnail": "https://i.ibb.co/xDDg7Ls/894811e7d3cf6d19d3adc13c5d1ed763.png"
      },
      {
        "original": "https://i.ibb.co/HKPbKtz/image.png",
        "thumbnail": "https://i.ibb.co/HKPbKtz/image.png"
      },
      {
        "original": "https://i.ibb.co/Bwg65QF/Group-427319962.png",
        "thumbnail": "https://i.ibb.co/Bwg65QF/Group-427319962.png"
      },
      {
        "original": "https://i.ibb.co/0jZJwL1/aa5546f7977218d370ae6d5dde91cb42.png",
        "thumbnail": "https://i.ibb.co/0jZJwL1/aa5546f7977218d370ae6d5dde91cb42.png"
      },
      {
        "original": "https://i.ibb.co/qrYFmV3/e24d9835b10877353d416282b9ed35be.png",
        "thumbnail": "https://i.ibb.co/qrYFmV3/e24d9835b10877353d416282b9ed35be.png"
      }
    ],
    
    description:["He is a pre-owned Hyundai Verna 1.6 SX 2015 Car with a Petrol engine. It is a Sedan Car.",
      
    ],
    specs:[
      "Engine Displacement : 1591 cc",
      "Fuel Efficiency Level : 17.4 kmpl",
      "Fuel Tank Capacity : 45 litres",
      "Max Power : 121 bhp @ 6,400 RPM",
      "Max Torque : 151 bhp @ 4,850 RPM",
      "Transmission Type : Manual"
    ],
    registration_year:"2015",
    month:"January",
    vehicle_model:"Verna",
    vehicle_make:"Hyundai",
    kilometer_driven:"58,000 Km",
    fuel_type:"Petrol",
    transmission:"Manual",
    no_of_owners:"1",
    color:"Red",
    insurance:"yes",
    loan:"No",
    exchange:"yes",
    power_stearing:"yes",
    power_window:"yes",
    allow_wheel:"No",
    flood_affected:"No",

  },
];
const cardsvehicle = [
  {
    id: "1",
    img: "https://i.ibb.co/NLhXyNQ/Racing-Blue-761x-1.png",
    heading: "Super Bikes",
    content: "Go to your shipments to see the status of your shipment",
    url: "#0",
  },
  {
    id: "2",
    img: "https://i.ibb.co/M1R6JGf/5d4db6e517a689e87c4266f61d77f803-1.png",
    heading: "Super Luxury Cars",
    content: "Go to your shipments to see the status of your shipment",
    url: "#0",
  },
  {
    id: "3",
    img: "https://i.ibb.co/8Y7grqn/6155-R-r2d004419-large-278409f65334dd30e73f2cafe349c1b7dd10269c-1.png",
    heading: "Tractor",
    content: "Go to your shipments to see the status of your shipment",
    url: "#0",
  },
  {
    id: "4",
    img: "https://i.ibb.co/64mq2yC/insaat-jo6f4x1t-1.png",
    heading: "Lord Trucks",
    content: "Go to your shipments to see the status of your shipment",
    url: "#0",
  },
];

const client2 = [
  {
    id: "7",
    img: "https://i.ibb.co/hckb7P3/png-transparent-logo-car-volkswagen-phaeton-brand-car-emblem-trademark-logo-1.png",
    name: "Volkswagen",
    count: "120+ Vehicle",
  },
  {
    id: "8",
    img: "https://i.ibb.co/hBKKMPm/images-2-1.png",
    name: "Honda",
    count: "120+ Vehicle",
  },
  {
    id: "9",
    img: "https://i.ibb.co/NxrPyBn/Nissan-logo-4-B3-C580-C8-A-seeklogo-com-1.png",
    name: "Nissan",
    count: "120+ Vehicle",
  },
  {
    id: "10",
    img: "https://i.ibb.co/hdfQdfL/8a7dc4991c159bf67264ce56c4365845-1.png",
    name: "Mazda",
    count: "120+ Vehicle",
  },
  {
    id: "11",
    img: "https://i.ibb.co/Kr6wXLY/hyundai-logo-1990-download-1.png",
    name: "Hyundai",
    count: "120+ Vehicle",
  },
  {
    id: "12",
    img: "https://i.ibb.co/R9r3532/images-3-1.png",
    name: "Subaru",
    count: "120+ Vehicle",
  },
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

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "red", label: "Red", checked: false },
      { value: "blue", label: "Blue", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "small", label: "Small", checked: false },
      { value: "medium", label: "Medium", checked: true },
      { value: "large", label: "Large", checked: false },
    ],
  },
];
const filterConfig = [
  {
    key: "location",
    label: "Location",
    type: "checkbox",
    searchable: true,
    options: ["Chennai", "Delhi", "Bangalore", "Hyderabad", "Mumbai"],
  },
  {
    key: "radius",
    label: "Show within Radius",
    type: "checkbox",
    options: [
      "500kms or less",
      "1000kms or less",
      "1500kms or less",
      "5000kms or less",
    ],
  },
  {
    key: "make",
    label: "Make and Model",
    type: "checkbox",
    searchable: true,
    options: ["Honda", "TATA", "Hyundai", "Maruti Suzuki"],
  },
  {
    key: "owners",
    label: "Number of Owners",
    type: "checkbox",
    options: [
      "First Owner",
      "Second Owner",
      "Third Owner",
      "Fourth Owner & More",
    ],
  },
  {
    key: "transmission",
    label: "Transmission Type",
    type: "checkbox",
    options: ["Automated Manual Transmission", "Automatic", "Manual"],
  },
  {
    key: "kilometers",
    label: "Kilometers Driven",
    type: "slider",
    range: { min: 0, max: 1000000, step: 10000 },
    keyin: "Km",
  },
  {
    key: "colors",
    label: "Colors",
    type: "button",
    options: [
      "Beige",
      "Black",
      "Blue",
      "Purple",
      "Brown",
      "Gold",
      "Green",
      "Red",
      "Gray",
      "Maroon",
      "Orange",
      "Other",
    ],
  },
  {
    key: "listingAge",
    label: "Listing Age",
    type: "checkbox",
    options: [
      "Last Day",
      "Last 5 Days",
      "Last 13 Days",
      "Last 90 Days",
      "Last 1 Year",
    ],
  },
  {
    key: "years",
    label: "Years",
    type: "slider",
    range: { min: 1920, max: 2024 },
    keyin: "years",
  },
  {
    key: "fuel",
    label: "Fuel Type",
    type: "checkbox",
    options: ["Petrol", "Diesel", "Petrol + LPG", "Petrol + CNG", "CNG", "LPG"],
  },
];

const slides = [
  {
    image: "src/assets/slider.png",
    heading: "Sell your car at your doorstep across Tamil Nadu",
    paragraph: "Yes, you read that right! It’s as simple as that.",
    buttonText: "Sell a Used Vehicle",
  },
  {
    image: "src/assets/slider.png",
    heading: "Find the best deals on used cars",
    paragraph: "Browse through a wide range of vehicles at great prices.",
    buttonText: "Browse Cars",
  },
];

const formdata = [
  {
    category: [
      { "img": "https://i.ibb.co/y8Z3yMg/bus-van.png", "name": "Bus-Van" },
      { "img": "https://i.ibb.co/9qW9zmb/truck.png", "name": "Truck" },
      { "img": "https://i.ibb.co/RNQ9Q9P/bycycle.png", "name": "Bycycle" },
      { "img": "https://i.ibb.co/HHRTy0b/scooty.png", "name": "Scooty" },
      { "img": "https://i.ibb.co/wLP5Ysn/bike.png", "name": "Bike" },
      { "img": "https://i.ibb.co/DLzF8sQ/car.png", "name": "Car" },
      { "img": "https://i.ibb.co/HhDDc51/heavy-vehicle.png", "name": "Heavy-Vehicle" }
    ],
    brand: [
      { "img": "https://i.ibb.co/4SyGLBx/Ford.png", "name": "Ford" },
      { "img": "https://i.ibb.co/dkrdPBF/honda.png", "name": "Honda" },
      { "img": "https://i.ibb.co/jydp7FD/toyota.png", "name": "Toyota" },
      { "img": "https://i.ibb.co/wN3k5VC/volkswagen.png", "name": "Volkswagen" },
      { "img": "https://i.ibb.co/NVfG4f5/hyundai.png", "name": "Hyundai" },
      { "img": "https://i.ibb.co/YpGdcSW/Suzuki.png", "name": "Suzuki" },
      { "img": "https://i.ibb.co/qmDnjsq/audi.png", "name": "Audi" },
      { "img": "https://i.ibb.co/5x2PH7D/Nissan.png", "name": "Nissan" },
      { "img": "https://i.ibb.co/9whbp1M/tata.png", "name": "Tata" },
      { "img": "https://i.ibb.co/93MqDsr/Kia.png", "name": "Kia" },
      { "img": "https://i.ibb.co/jMXZ4Jj/bentley.png", "name": "Bentley" }
    ],
    modal: [
      { "img": "https://i.ibb.co/269nM3w/alcazar.png", "name": "Alcazar" },
      { "img": "https://i.ibb.co/q517MbP/aura.png", "name": "Aura" },
      { "img": "https://i.ibb.co/82Cy9nC/grand10.png", "name": "Grand10" },
      { "img": "https://i.ibb.co/RpWyTSp/venue.png", "name": "Venue" },
      { "img": "https://i.ibb.co/wYwC96Q/verna.png", "name": "Verna" },
      { "img": "https://i.ibb.co/HB5tvWw/creta.png", "name": "Creta" }
    ],
    othermodal: ["ALCAZAR", "Grand I10 Nios", "Kona Electric"],
    fuel: [
      { "img": "https://i.ibb.co/Dwh64ZP/ev.png", "name": "EV" },
      { "img": "https://i.ibb.co/ZTMbyTP/cng.png", "name": "CNG" },
      { "img": "https://i.ibb.co/g4gxtHF/disel.png", "name": "Diesel" },
      { "img": "https://i.ibb.co/6XjLFP1/petrol.png", "name": "Petrol" }
    ],
    variant: [
      { "img": "https://i.ibb.co/qmnp466/manual.png", "name": "Manual" },
      { "img": "https://i.ibb.co/54D9LNP/automatic.png", "name": "Automatic" }
    ],
    state: [
      { "state": "Tamil Nadu", "code": "TN" },
      { "state": "Andhra Pradesh", "code": "AP" },
      { "state": "Karnataka", "code": "KA" },
      { "state": "Kerala", "code": "KL" },
      { "state": "Telangana", "code": "TS" },
      { "state": "Maharashtra", "code": "MH" },
      { "state": "Delhi", "code": "DL" },
      { "state": "West Bengal", "code": "WB" },
      { "state": "Rajasthan", "code": "RJ" },
      { "state": "Uttar Pradesh", "code": "UP" }
    ],
    location: [
      { "img": "https://i.ibb.co/wrW8zWX/pune.png", "name": "Pune" },
      { "img": "https://i.ibb.co/S06dwpW/nodia.png", "name": "Noida" },
      { "img": "https://i.ibb.co/GpDVNRZ/mumbai.png", "name": "Mumbai" },
      { "img": "https://i.ibb.co/yYyMdnT/chennai.png", "name": "Chennai" },
      { "img": "https://i.ibb.co/YBL94yS/banglore.png", "name": "Bangalore" },
      { "img": "https://i.ibb.co/hWgtDzf/Hyderabad.png", "name": "Hyderabad" }
    ],
    year: [
      2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004,
      2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995
    ],
    month: [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ],
    color: [
      { "name": "Red", "code": "#FF0000" },
      { "name": "Blue", "code": "#0000FF" },
      { "name": "Black", "code": "#000000" },
      { "name": "White", "code": "#FFFFFF" },
      { "name": "Silver", "code": "#C0C0C0" },
      { "name": "Gray", "code": "#808080" },
      { "name": "Green", "code": "#008000" },
      { "name": "Yellow", "code": "#FFFF00" },
      { "name": "Orange", "code": "#FFA500" },
      { "name": "Brown", "code": "#A52A2A" },
      { "name": "Purple", "code": "#800080" },
      { "name": "Beige", "code": "#F5F5DC" },
      { "name": "Gold", "code": "#FFD700" },
      { "name": "Pink", "code": "#FFC0CB" }
    ],
    owner:["1 owner", "2 owner", "3 owner", "4 owner", "5 owner", "6 owner", "7 owner"],
    other:[
      "Loan",
      "Exchange",
      "Power steering",
      "Power window",
      "Alloy wheels",
      "Flood Affect",
      "Accidental car",
    ]
  },
];


export {
  cardsvehicle,
  touchlink,
  servicesList,
  copyrights,
  carData,
  client2,
  client1,
  faqs,
  filters,
  subCategories,
  sortOptions,
  filterConfig,
  singleproduct,
  slides,formdata
};
