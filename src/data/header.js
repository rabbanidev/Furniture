import { FiDatabase, FiSmile, FiTruck } from "react-icons/fi";

const navbarData = [
  {
    title: "Liviing Room",
    to: "/product-category/living",
    children: [
      {
        title: "SOFA COLLECTION",
        to: "/product-category/living/sofa-collection",
        children: [
          {
            title: "SOFA SETS",
            to: "/product-category/living/sofa-collection/sofa-sets",
          },
          {
            title: "CORNER SOFA",
            to: "/product-category/living/sofa-collection/corner-sofa",
          },
          {
            title: "CHAIRS",
            to: "/product-category/living/sofa-collection/chairs",
          },
        ],
      },
      {
        title: "STORAGE",
        to: "/product-category/living/storage",
        children: [
          {
            title: "BAR-CABINET",
            to: "/product-category/living/storage/bar-cabinet",
          },
          {
            title: "SHOEE-CABINET",
            to: "/product-category/living/storage/bar-shoee",
          },
        ],
      },
      {
        title: "OTHERS",
        to: "#",
        children: [
          { title: "TV UNITS", to: "/product-category/living/others/tv-units" },
          { title: "BEAN BAG", to: "/product-category/living/others/bean-bag" },
          {
            title: "COFFEE TABLES",
            to: "/product-category/living/others/coffee-tables",
          },
          {
            title: "OFFICE & STUDY",
            to: "/product-category/living/others/office-study",
          },
        ],
      },
    ],
  },
  {
    title: "Bed Room",
    to: "/product-category/bed-room",
    children: [
      {
        title: "BEDROOM FURNITURE",
        to: "/product-category/bed-room/bed-room-furniture",
        children: [
          {
            title: "BEDROOM SET",
            to: "/product-category/bed-room/bed-room-furniture/bed-room-set",
          },
          {
            title: "BEDS & HEADBOARDS",
            to: "/product-category/bed-room/bed-room-furniture/beds-headboards",
          },
          {
            title: "KIDS",
            to: "/product-category/bed-room/bed-room-furniture/kids",
          },
        ],
      },
      {
        title: "STORAGE",
        to: "/product-category/bed-room/storage",
        children: [
          {
            title: "WARDROBES",
            to: "/product-category/bed-room/storage/wardrobes",
          },
        ],
      },
    ],
  },
  {
    title: "Dining",
    to: "/product-category/dining",
  },
  {
    title: "Deails",
    to: "/product-category/deails",
  },
  {
    title: "NEW ARRIVALS",
    to: "/product-category/new-arrivals",
  },
];

const userData = [
  {
    label: "My Profile",
    to: "/user/my-account",
    Icon: FiSmile,
  },
  {
    label: "My Orders",
    to: "/user/my-orders",
    Icon: FiDatabase,
  },
  {
    label: "My Address Book",
    to: "/user/my-address-book",
    Icon: FiTruck,
  },
];

export { navbarData, userData };
