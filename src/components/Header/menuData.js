const menuData= [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Our Products",
    path:"/products",
    haveSubmenu:true,
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Coconut Shell Activated Carbon",
        path: "/products/Coconut-Shell-Activated-Carbon",
        newTab: false,
      },
      {
        id: 42,
        title: "Coal Activated Carbon",
        path: "/products/Coal-Activated-Carbon",
        newTab: false,
      },
      {
        id: 43,
        title: "Wood Activated Carbon",
        path: "/products/Wood-Activated-Carbon",
        newTab: false,
      },
      {
        id: 44,
        title: "Coconut Shell Pellets Activated Carbon",
        path: "/products/Coconut-Shell-Pellets-Activated-Carbon",
        newTab: false,
      },
    ],
  },
  {
    id: 33,
    title: "Applications",
    path: "/applications",
    newTab: false,
  },
  {
    id: 33,
    title: "Quality",
    path: "/quality",
    newTab: false,
  },
  {
    id: 33,
    title: "Blogs",
    path: "/blog",
    newTab: false,
  }
];
export default menuData;
