// Static Data

export const destinationData = [
  {
    id: 1,
    image: "/images/ChiangDao.jpg",
    location: "Chaing Dao",
    travelers: "145,000",
  },
  {
    id: 2,
    image: "/images/chaingmai.jpg",
    location: "Chaing Mai",
    travelers: "275,000",
  },
  {
    id: 3,
    image: "/images/ch.png",
    location: "Chaing Rai",
    travelers: "190,000",
  },
  {
    id: 4,
    image: "/images/nan.jpg",
    location: "Nan",
    travelers: "220,000",
  },
  {
    id: 5,
    image: "/images/maetia.jpg",
    location: "Mae Tia WaterFall",
    travelers: "130,000",
  },
  {
    id: 6,
    image: "/images/huay.jpg",
    location: "Huay Nam Dank",
    travelers: "185,000",
  },
  {
    id: 7,
    image: "/images/maekampong.jpg",
    location: "Mae Kam Pong",
    travelers: "170,000",
  },
  {
    id: 8,
    image: "/images/PhuKradueng.jpg",
    location: "Phu Kradueng",
    travelers: "155,000",
  },
];

export const hotelsData = [
  {
    id: 1,
    hotelId: 1,
    bookingId: 1,
    image: "/images/theyhouse.jpg",
    images: [
      "/images/theyhouse.jpg",
      "/images/theyhouse2.jfif",
      "/images/theyhouse3.jpg",
      "/images/they4.jpg",
    ],
    name: "The Y house Chiang Mai",
    description:
      "Located in a convenient transportation point in the gate temple of Chiang Mai There is a location located at 3.6 km from Tha Phae Gate, 3.8 km from Chiang Mai Night Bazaar and 43 km from the Three Kings Monument.",
    location: "Thanon Thung Hotel, Chiang Mai",
    rating: 4.6,
    reviews: "0",
    price: "790 Bath",
    checkIn: new Date("2024-12-01"),
    checkOut: new Date("2024-12-05"),
    highlights: [
      "Close to Chiang Mai Arcade Bus Station",
      "Modern minimalistic design",
      "Ideal for both relaxation and business",
      "Great local food spots nearby",
      "Complimentary Wi-Fi & parking",
    ],
    availableFacilities: [
      "24/7 Reception",
      "Room Service",
      "Free Parking",
      "Air-conditioning",
      "Free Breakfast",
    ],
  },
  {
    id: 2,
    hotelId: 2,
    bookingId: 2,
    image: "/images/banleesoo.jpg",
    images: [
      "/images/chiangdao1.jpg",
      "/images/chiangdao2.jpg",
      "/images/chiangdao3.webp",
    ],
    name: "BanLeeSoo  Chiang Dao",
    description:
      "It is homestay accommodation that serves tourists who want to experience the way of life of the Lisu people. Which is one tribe that lives in the northern region of Thailand In which this accommodation will provide a lifestyle in the midst of nature and a quiet atmosphere",
    location: "Chaing Dao, Chaiang Mai",
    rating: 4.7,
    reviews: "0",
    price: "860 Bath",
    checkIn: new Date("2024-9-10"),
    checkOut: new Date("2024-9-11"),
    highlights: [
      "Beautiful view",
      "Experience Lee Su culture",
      "Natural activities",
      "Fresh air",
      "Tranquility",
    ],
    availableFacilities: [
      "Local room",
      "Local food service",
      "Tour service",
      "Central area",
      "Wi-Fi Service",
    ],
  },
  {
    id: 3,
    hotelId: 3,
    bookingId: 3,
    image: "/images/fincy.jpg",
    images: [
      "/images/fincy1.jpg",
      "/images/fincy2.jpg",
      "/images/fincy3.jpg",
      "/images/fincy4.jpg",
    ],
    name: "Fincy Home Stay",
    description:
      "Fincy Home Stay is a homestay accommodation located in Chiang Mai. Especially in areas with natural and peaceful atmosphere Providing services to tourists who want to experience the traditional way of life of the villagers in that region. And enjoy the nature of the location that is a natural tourist destination",
    location: "Mae Tang",
    rating: 4.3,
    reviews: "0",
    price: "2800 Bath",
    checkIn: new Date("2024-11-09"),
    checkOut: new Date("2024-11-10"),
    highlights: [
      "Stunning Mountain Views",
      "Authentic Thai Hospitality",
      "Peaceful Atmosphere",
      "Cultural Experience",
      "Close to Nature",
    ],
    availableFacilities: [
      "Free Wi-Fi",
      "Air-conditioned Rooms",
      "Outdoor Spaces",
      "Local Cuisine",
      "Transportation Services",
    ],
  },
  {
    id: 4,
    hotelId: 4,
    bookingId: 4,
    image: "/images/phahi.jpg",
    images: [
      "/images/phahi1.jpg",
      "/images/phahi2.jpg",
      "/images/phahi3.jpg",
      "/images/phahi4.jpg",
    ],
    name: "Phahi Village Home Stay",
    description:
      "The room is attached to the view of the sea, sea fog in a peaceful natural atmosphere. Not taking pictures on the roof of the house, free food, 2 meals with fresh coffee from the garden for every room. Hundreds of accommodation Sit and sip coffee to see the peaceful nature. Watch the sea of ​​fog.",
    location: "Mae Sai Chaing Rai",
    rating: 4.5,
    reviews: "0",
    price: "950 Bath",
    checkIn: new Date("2025-01-01"),
    checkOut: new Date("2025-01-02"),
    highlights: [
      "Sea Fog",
      "Closer to Nature",
      "Closer Mountain",
      "Cultural Experience",
    ],
    availableFacilities: [
      "Free Wi-Fi",
      "Air-conditioned Rooms",
      "Outdoor Spaces",
      "Buffet Service",
      "Transportation Services",
    ],
  },
];

export const toursData = [
  {
    id: 1,
    image: "/images/t1.jpg",
    title: "Historic Wonders of Stonehenge & Oxford Tour",
    location: "Wiltshire, England",
    time: "12+ hours",
    type: "Cultural & Historical Tours",
    rating: 4.9,
    reviews: "1,245",
    price: "65",
  },
  {
    id: 2,
    image: "/images/t2.jpg",
    title: "Barcelona Gothic Quarter Walking Tour",
    location: "Ciutat Vella, Barcelona",
    time: "3+ hours",
    type: "Walking & Sightseeing Tours",
    rating: 4.7,
    reviews: "876",
    price: "50",
  },
  {
    id: 3,
    image: "/images/t3.jpg",
    title: "Thames Luxury Boat Cruise with Dinner",
    location: "London, United Kingdom",
    time: "2–3 hours",
    type: "Private & Luxury Cruises",
    rating: 4.8,
    reviews: "2,300",
    price: "110",
  },
  {
    id: 4,
    image: "/images/t4.jpg",
    title: "Edinburgh Haunted History Walking Tour",
    location: "Edinburgh, Scotland",
    time: "2+ hours",
    type: "Ghost & Mystery Tours",
    rating: 4.6,
    reviews: "1,050",
    price: "40",
  },
];

export const reviewData = [
  {
    id: 1,
    name: "John Doe",
    review:
      "The service exceeded my expectations. The team was professional, and I couldn't be happier with the results. Highly recommended to everyone!",
    image: "/images/u1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "I am thoroughly impressed with the attention to detail and quality. They truly understand customer needs and deliver outstanding results. Wonderful experience!",
    image: "/images/u2.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    review:
      "Exceptional quality and fantastic customer service! The project was delivered on time and exactly as I wanted. I will definitely use their services again.",
    image: "/images/u3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    review:
      "Outstanding results! The team was efficient, and their professionalism was remarkable. Everything was done perfectly. I highly recommend their expertise to everyone.",
    image: "/images/u1.jpg",
  },
  {
    id: 5,
    name: "Chris Wilson",
    review:
      "Amazing service! They exceeded all expectations and delivered a product that I am extremely happy with. The communication throughout the project was excellent.",
    image: "/images/u2.jpg",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    review:
      "Fantastic experience! They listened carefully to my requirements and delivered exactly what I needed. Their attention to detail is truly commendable.",
    image: "/images/u3.jpg",
  },
  {
    id: 7,
    name: "David Lee",
    review:
      "Absolutely incredible service! The team was supportive and responsive, making sure everything was perfect. I will definitely recommend them to my friends.",
    image: "/images/u1.jpg",
  },
  {
    id: 8,
    name: "Sophia White",
    review:
      "Five-star service from start to finish! The dedication and skill of the team made all the difference. Truly an exceptional experience I won’t forget.",
    image: "/images/u2.jpg",
  },
];
