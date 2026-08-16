import { Fragment } from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";


const RBBreadcrumbs = () => {
       
  return (
    <div>
        <div className="text-info fw-bold" >React Breadcrumb</div> <hr/>
        <div className="d-flex align-items-center"></div>
        <NavLink to="#" className="text-decoration-none">Cloud</NavLink>
        <ChevronRight size={10} className="mx-2"/>

        <NavLink to="#" className="text-decoration-none">Files</NavLink>
        <ChevronRight size={10} className="mx-2"/>

        <NavLink to="#" className="text-decoration-none">Project</NavLink>
        <ChevronRight size={10} className="mx-2"/>

        <span className="fw-bold">
          ProjectName
        </span>
    </div>
  );
}


export default RBBreadcrumbs;