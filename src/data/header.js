import { FiDatabase, FiHeart, FiSmile, FiStar } from "react-icons/fi";

const navbarData = [
  {
    title: "Liviing Room",
    to: "/product-category/living",
    categories: [
      {
        title: "SOFA COLLECTION",
        to: "/product-category/living/sofa-collection",
        subCategories: [
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
        subCategories: [
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
        subCategories: [
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
    categories: [
      {
        title: "BEDROOM FURNITURE",
        to: "/product-category/bed-room/bed-room-furniture",
        subCategories: [
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
        subCategories: [
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
    label: "Manage My Account",
    to: "/user/my-account",
    Icon: FiSmile,
  },
  {
    label: "My Orders",
    to: "/user/my-orders",
    Icon: FiDatabase,
  },
  {
    label: "My Reviews",
    to: "/user/my-reviews",
    Icon: FiStar,
  },
  {
    label: "My Whitelist",
    to: "/my-whitelist",
    Icon: FiHeart,
  },
];

export { navbarData, userData };
