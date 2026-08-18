import { v4 as uuid } from "uuid"; 

export const NonInteractiveLink =[
     /* { id: 1, link: "/", menuName: "Home"}, */
    { id: 2, link: "/about", menuName: "About"}, 
    { id: uuid(), link: "/rb-badges", menuName: "Badges"},
    { id: uuid(), link: "/rb-breadcrumbs", menuName: "Breadcrumbs"},
    { id: uuid(), link: "/rb-buttons", menuName: "Buttons"},
    { id: uuid(), link: "/rb-buttonGroups", menuName: "ButtonGroups"},
    { id: uuid(), link: "/rb-cards", menuName: "Cards"},
    { id: uuid(), link: "/rb-images", menuName: "Images"},
    { id: uuid(), link: "/rb-listgroup", menuName: "RBListGroup"},
    { id: uuid(), link: "/rb-figure", menuName: "RBFigure"},
    { id: uuid(), link: "/rb-pagination", menuName: "RBPagination"},
    { id: uuid(), link: "/rb-progressbars", menuName: "RBProgressBars"},
    { id: uuid(), link: "/rb-spinners", menuName: "RBSpinners"},
    { id: uuid(), link: "/rb-tables", menuName: "RBTables"},

];

export const InteractiveLink = [
   { id: uuid(), link: "/rb-accordian", menuName: "Accordian"},
   { id: uuid(), link: "/rb-carousel", menuName: "Carousel"},
   { id: uuid(), link: "/rb-dropdowns", menuName: "Dropdowns"},
    { id: uuid(), link: "/rb-model", menuName: "Model"},
    { id: uuid(), link: "/rb-navbaroffcanvas", menuName: "NavbarOffcanvas"},
    { id: uuid(), link: "/rb-navtabs", menuName: "NavTabs"},
    { id: uuid(), link: "/rb-overlays", menuName: "Overlays"},
];

export const FormsLink = [
    { id: uuid(), link: "/rh-formswithoutyup", menuName: "FormsWithoutYup"},
    { id: uuid(), link: "/rh-formswithyup", menuName: "FormsWithYup"},
    
];

export const ContextAPILink = [
    { id: uuid(), link: "/products", menuName: "Products"},
    { id: uuid(), link: "/bloglisting", menuName: "BlogListing"},
    
];

