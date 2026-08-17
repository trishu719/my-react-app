import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import RBBadges from '../Pages/RBBadges';
import RBBreadcrumbs from '../Pages/RBBreadcrumbs';
import RBButtons from '../Pages/RBButtons';
import RBButtonGroups from '../Pages/RBButtonGroups';
import RBCards from '../Pages/RBCards';
import { RootLayout } from "../Layout/RootLayout";
import RBImages from '../Pages/RBImages';
import RBListGroup from '../Pages/RBListGroup';
import RBFigure from '../Pages/RBFigure';
import RBPagination from '../Pages/RBPagination';
import RBProgressBars from '../Pages/RBProgressBars';
import RBSpinners from '../Pages/RBSpinners';
import RBTables from '../Pages/RBTables';
import RBAccodian from '../Pages/RBAccordian';
import RBCarousel from '../Pages/RBCarousel';
import RBDropdowns from '../Pages/RBDropdowns';
import RBModel from '../Pages/RBModel';
import RBNavbarOffcanvas from '../Pages/RBNavbarOffcanvas';
import RBNavTabs from '../Pages/RBNavTabs';
import RBOverlays from '../Pages/RBOverlays';
import { RHFormsWithoutYup } from '../Forms/RHFormsWithoutYup';
import { RHFormsWithYup } from '../Forms/RHFormsWithYup';
import { Products } from '../Pages/Products';


export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/rb-badges", element: <RBBadges /> },
      { path: "/rb-breadcrumbs", element: <RBBreadcrumbs /> },
      { path: "/rb-buttons", element: <RBButtons /> },
      { path: "/rb-buttonGroups", element: <RBButtonGroups /> },
      { path: "/rb-cards", element: <RBCards /> },
      { path: "/rb-images", element: <RBImages /> },
      { path: "/rb-listgroup", element: <RBListGroup /> },
      { path: "/rb-figure", element: <RBFigure /> },
      { path: "/rb-pagination", element: <RBPagination /> },
      { path: "/rb-progressbars", element: <RBProgressBars /> },
      { path: "/rb-spinners", element: <RBSpinners /> },
      { path: "/rb-tables", element: <RBTables /> },
      { path: "/rb-accordian", element: <RBAccodian /> },
      { path: "/rb-carousel", element: <RBCarousel /> },
      { path: "/rb-dropdowns", element: <RBDropdowns /> },
      { path: "/rb-model", element: <RBModel /> },
      { path: "/rb-navbaroffcanvas", element: <RBNavbarOffcanvas /> },
      { path: "/rb-navtabs", element: <RBNavTabs /> },
      { path: "/rb-overlays", element: <RBOverlays /> },
      { path: "/rh-formswithoutyup", element: <RHFormsWithoutYup /> },
      { path: "/rh-formswithyup", element: <RHFormsWithYup /> },
      { path: "/products", element: <Products /> },
    ]
  },
]);