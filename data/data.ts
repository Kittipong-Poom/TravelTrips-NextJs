import { MdCleaningServices, MdOutlineFreeBreakfast } from "react-icons/md";
import {
  FaParking,
  FaConciergeBell,
  FaSnowflake,
  FaWifi,
} from "react-icons/fa";
import { IconType } from "react-icons";
export interface Facility {
  label: string;
  icon: IconType;
}

export const destinationData = [
  {
    id: 1,
    image: "/images/ChiangDao.jpg",
    location: "เชียงดาว",
    travelers: "145,000",
  },
  {
    id: 2,
    image: "/images/chaingmai.jpg",
    location: "เชียงใหม่",
    travelers: "275,000",
  },
  {
    id: 3,
    image: "/images/ch.png",
    location: "เชียงราย",
    travelers: "190,000",
  },
  {
    id: 4,
    image: "/images/nan.jpg",
    location: "น่าน",
    travelers: "220,000",
  },
  {
    id: 5,
    image: "/images/maetia.jpg",
    location: "น้ำตกแม่เทีย",
    travelers: "130,000",
  },
  {
    id: 6,
    image: "/images/huay.jpg",
    location: "ห้วยน้ำดัง",
    travelers: "185,000",
  },
  {
    id: 7,
    image: "/images/maekampong.jpg",
    location: "แม่กำปอง",
    travelers: "170,000",
  },
  {
    id: 8,
    image: "/images/PhuKradueng.jpg",
    location: "ภูกระดึง",
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
      "/images/theyhouse2.png",
      "/images/theyhouse3.jpg",
      "/images/they4.jpg",
    ],
    name: "The Y house Chiang Mai",
    description:
      "ตั้งอยู่ในจุดขนส่งที่สะดวกในวัดประตูของเชียงใหม่มีสถานที่ตั้งอยู่ที่ 3.6 กม. จากประตู Tha Phae ห่างจาก Chiang Mai Night Bazaar 3.8 กม. และ 43 กม. จากอนุสาวรีย์สาม Kings",
    location: "ถนน ทุ่งโฮเต็ล เชียงใหม่",
    rating: 4.6,
    reviews: "0",
    price: "790 บาท",
    checkIn: new Date("2024-12-01"),
    checkOut: new Date("2024-12-05"),
    highlights: [
      "ใกล้กับสถานีขนส่งเชียงใหม่ อาร์เคด",
      "ดีไซน์แบบมินิมอลสมัยใหม่",
      "เหมาะสำหรับการพักผ่อนและธุรกิจ",
      "ร้านอาหารท้องถิ่นที่ดีใกล้เคียง",
      "Wi-Fi และที่จอดรถฟรี",
    ],
    availableFacilities: [
      {
        label: "24/7 แผนกต้อนรับ",
        icon: FaConciergeBell,
      },
      {
        label: "บริการห้องพัก",
        icon: MdCleaningServices,
      },
      {
        label: "ฟรีที่จอดรถ",
        icon: FaParking,
      },
      {
        label: "แอร์",
        icon: FaSnowflake,
      },
      {
        label: "ฟรีอาหารเช้า",
        icon: MdOutlineFreeBreakfast,
      },
      {
        label: "ฟรี Wi-Fi",
        icon: FaWifi,
      },
    ] as Facility[],
    nearbyPlaces: [
      {
        name: "Chichi & Chacha",
        distance: "450 ม.",
      },
      {
        name: "Mae Kuang Dam",
        distance: "1.4 กม.",
      },
      { name: "Sri Lanna National Park", distance: "1.7 กม." },
      { name: "สะพานนครพิงค์", distance: "2.3 กม." },
      { name: "Playground Varee School", distance: "2.5 กม." },
      { name: "สะพานนวรัฐ", distance: "2.9 กม." },
      { name: "สะพานเหล็ก", distance: "3.2 กม." },
      { name: "ประตูท่าแพ", distance: "3.4 กม." },
      { name: "Latins", distance: "3.7 กม." },
      { name: "ประตูช้างเผือก", distance: "3.9 กม." },
      { name: "หอศิลปวัฒนธรรม", distance: "4.1 กม." },
      { name: "อนุสาวรีย์สามกษัตริย์", distance: "4.1 กม." },
      { name: "ประตูเชียงใหม่", distance: "4.4 กม." },
      { name: "Art in Paradise Chiang Mai", distance: "4.5 กม." },
      { name: "ประตูสวนดอก", distance: "5 กม." },
      { name: "สวนสาธารณะหนองบวกหาด", distance: "5 กม." },
      { name: "พิพิธภัณฑ์แมลงโลกฯ", distance: "6 กม." },
      { name: "เวียงกุมกาม", distance: "9 กม." },
    ],
    cafesAndRestaurants: [
      {
        name: "Coffee Bar",
        distance: "50 ม.",
      },
      { name: "Doi Pui Coffee", distance: "150 ม." },
      { name: "Kaikah Cafe", distance: "450 ม." },
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
    name: "บ้านลีซูเชียงดาว",
    description:
      "มันเป็นที่พักโฮมสเตย์ที่ให้บริการนักท่องเที่ยวที่ต้องการสัมผัสวิถีชีวิตของคน Lisu ซึ่งเป็นหนึ่งในเผ่าที่อาศัยอยู่ในภาคเหนือของประเทศไทยซึ่งที่พักแห่งนี้จะให้วิถีชีวิตท่ามกลางธรรมชาติและบรรยากาศที่เงียบสงบ",
    location: "เชียงดาว, เชียงใหม่",
    rating: 4.7,
    reviews: "0",
    price: "860 บาท",
    checkIn: new Date("2024-9-10"),
    checkOut: new Date("2024-9-11"),
    highlights: [
      "วิวที่สวยงาม",
      "สัมผัสวัฒนธรรมลีซู",
      "กิจกรรมกลางแจ้ง",
      "อากาศบริสุทธิ์",
      "ความเงียบสงบ",
    ],
    availableFacilities: [
      "ห้องพักแบบท้องถิ่น",
      "บริการอาหารท้องถิ่น",
      "บริการทัวร์",
      "พื้นที่กลางเมือง",
      "บริการ Wi-Fi",
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
    name: "ฟินซี่ โฮมสเตย์",
    description:
      "Fincy Home Stay เป็นที่พักโฮมสเตย์ตั้งอยู่ในเชียงใหม่ โดยเฉพาะอย่างยิ่งในพื้นที่ที่มีบรรยากาศที่เป็นธรรมชาติและเงียบสงบให้บริการแก่นักท่องเที่ยวที่ต้องการสัมผัสกับวิถีชีวิตแบบดั้งเดิมของชาวบ้านในภูมิภาคนั้น และเพลิดเพลินกับธรรมชาติของสถานที่ที่เป็นสถานที่ท่องเที่ยวตามธรรมชาติ",
    location: "แม่แตง, เชียงใหม่",
    rating: 4.3,
    reviews: "0",
    price: "2800 บาท",
    checkIn: new Date("2024-11-09"),
    checkOut: new Date("2024-11-10"),
    highlights: [
      "ทิวทัศน์ภูเขาที่สวยงาม",
      "การต้อนรับแบบไทยแท้",
      "บรรยากาศที่เงียบสงบ",
      "ประสบการณ์วัฒนธรรม",
      "ใกล้กับธรรมชาติ",
    ],
    availableFacilities: [
      "Wi-Fi ฟรี",
      "ห้องปรับอากาศ",
      "พื้นที่กลางแจ้ง",
      "อาหารไทย",
      "บริการขนส่ง",
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
    name: "ผาฮี้วิลเลจ โฮมสเตย์",
    description:
      "ห้องพักติดอยู่กับทิวทัศน์ของทะเลหมอกทะเลในบรรยากาศตามธรรมชาติที่เงียบสงบ ไม่ถ่ายรูปบนหลังคาบ้านอาหารฟรี 2 มื้อพร้อมกาแฟสดจากสวนสำหรับทุกห้อง ที่พักหลายร้อยแห่งนั่งและจิบกาแฟเพื่อดูธรรมชาติที่เงียบสงบ ดูทะเลหมอก",
    location: "แม่สาย, เชียงราย",
    rating: 4.5,
    reviews: "0",
    price: "950 บาท",
    checkIn: new Date("2025-01-01"),
    checkOut: new Date("2025-01-02"),
    highlights: [
      "หมอกทะเล",
      "ใกล้ชิดธรรมชาติ",
      "ใกล้ภูเขา",
      "ประสบการณ์วัฒนธรรม",
    ],
    availableFacilities: [
      "Wi-Fi ฟรี",
      "ห้องปรับอากาศ",
      "พื้นที่กลางแจ้ง",
      "บริการบุฟเฟต์",
      "บริการขนส่ง",
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
    name: "สุวิชา น้ำใส",
    review:
      "ฉันมีช่วงเวลาที่น่าจดจำในการเดินป่าผ่านอุทยานแห่งชาติ อากาศบริสุทธิ์และต้นไม้เขียวขจีช่วยให้ฉันผ่อนคลายและรู้สึกสดชื่นอีกครั้ง",
    image: "/images/profile/doremon.jpeg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "ณัฐพงศ์ ศรีสุข",
    review:
      "การสำรวจน้ำตกเป็นประสบการณ์ที่น่าทึ่ง! เสียงน้ำไหลและหมอกเย็นๆ ทำให้รู้สึกเหมือนอยู่ในสถานที่มหัศจรรย์",
    image: "/images/profile/hideo.jpg",
    rating: 4.6,
  },
  {
    id: 3,
    name: "กรณิกา ประเสริฐ",
    review:
      "การตั้งแคมป์ในป่าภายใต้แสงดาวเป็นประสบการณ์ที่เหนือความคาดหมาย ท้องฟ้ายามค่ำคืนใสและทำให้รู้สึกใกล้ชิดกับธรรมชาติอย่างแท้จริง",
    image: "/images/profile/nerd.jpg",
    rating: 4.9,
  },
  {
    id: 4,
    name: "ปิยะวัฒน์ รัตนชัย",
    review:
      "การเดินป่าขึ้นไปยังจุดชมวิวบนภูเขาเป็นความท้าทาย แต่การได้เห็นพระอาทิตย์ขึ้นที่สวยงามทำให้ทุกอย่างคุ้มค่า แนะนำสำหรับคนรักธรรมชาติ!",
    image: "/images/profile/nobita.jpg",
    rating: 5.0,
  },
  {
    id: 5,
    name: "ชลธิชา มีศรี",
    review:
      "เส้นทางในอุทยานแห่งชาติมีการทำเครื่องหมายอย่างดีและเต็มไปด้วยความสวยงาม เราเห็นนก ผีเสื้อ และกวางป่าในระหว่างการเดิน",
    image: "/images/profile/paman.jpg",
    rating: 4.5,
  },
  {
    id: 6,
    name: "ธนวัฒน์ ยิ้มแย้ม",
    review:
      "ที่นี่สงบมาก! ฉันสนุกกับการพายเรือคายัคในทะเลสาบที่ล้อมรอบด้วยภูเขา เป็นสถานที่ที่เหมาะสำหรับคนที่รักความสงบ",
    image: "/images/profile/shinchan.jpg",
    rating: 4.7,
  },
  {
    id: 7,
    name: "รัชนี บุญศรี",
    review:
      "ธรรมชาติที่นี่ยังคงสภาพสมบูรณ์และสวยงามมาก ฉันใช้เวลาทั้งวันเดินผ่านป่าไผ่และสัมผัสลมเย็นๆ เป็นความสงบสุขที่แท้จริง",
    image: "/images/profile/hideo.jpg",
    rating: 4.4,
  },
  {
    id: 8,
    name: "ธีรวัฒน์ แก้วมณี",
    review:
      "เป็นหนึ่งในทริปเชิงนิเวศที่ดีที่สุดที่ฉันเคยมี! ไกด์ท้องถิ่นเป็นกันเองและมีความรู้ และทิวทัศน์สวยงามเหมือนภาพโปสการ์ด",
    image: "/images/profile/tom.jpg",
    rating: 4.9,
  },
];
