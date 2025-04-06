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
    name: "Suwicha Namsai",
    review:
      "I had an unforgettable time hiking through the national park. The fresh air and lush greenery were just what I needed to relax and reset.",
    image: "/images/profile/doremon.jpeg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Nattapong Srisuk",
    review:
      "Exploring the waterfalls was such an incredible experience! The sound of rushing water and cool mist made it magical.",
    image: "/images/profile/hideo.jpg",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Kannika Prasert",
    review:
      "Camping in the forest under the stars was beyond amazing. The night sky was so clear, and I felt truly connected to nature.",
    image: "/images/profile/nerd.jpg",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Piyawat Rattanachai",
    review:
      "Trekking to the mountain viewpoint was a challenge, but the breathtaking sunrise made it all worth it. Highly recommended for nature lovers!",
    image: "/images/profile/nobita.jpg",
    rating: 5.0,
  },
  {
    id: 5,
    name: "Chonthicha Meesri",
    review:
      "The national park trails were well-marked and full of beauty. We spotted birds, butterflies, and even wild deer during our walk.",
    image: "/images/profile/paman.jpg",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Thanawat Yimyam",
    review:
      "What a peaceful place! I enjoyed kayaking on the lake surrounded by mountains. A perfect spot for anyone who loves calm and quiet.",
    image: "/images/profile/shinchan.jpg",
    rating: 4.7,
  },
  {
    id: 7,
    name: "Rachanee Boonsri",
    review:
      "Nature here is untouched and beautiful. I spent the day walking through bamboo forests and enjoying the cool breeze. It was pure serenity.",
    image: "/images/profile/hideo.jpg",
    rating: 4.4,
  },
  {
    id: 8,
    name: "Teerawat Kaewmanee",
    review:
      "One of the best eco-trips I’ve ever had! The local guides were friendly and knowledgeable, and the scenery was straight out of a postcard.",
    image: "/images/profile/tom.jpg",
    rating: 4.9,
  },
];
