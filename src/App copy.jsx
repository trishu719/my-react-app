import { Fragment } from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Header } from './Components/Header';
// import { Footer } from './Components/Footer';
// import DynamicProfileCard from './Components/DynamicProfileCard';
// import image1 from './assets/image1.webp';
// import image2 from './assets/img.webp';
// import image3 from './assets/image.avil.webp';
// import StaticProfileCard from "./Components/StaticProfileCard";
//import UseStateCounter from "./Components/UseStateCounter";
//import UseReducerCounter from "./Components/UseReducerCounter";
import TodoList from "./Components/TodoList";

function AppCopy() {
  return (
    <Fragment>
      <div className="container mt-3">
        {/* <Header /> */}

        {/* <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center mb-4">
          <DynamicProfileCard
            image={image1}
            name="John Doe"
            role="Frontend Development Student"
            description="I enjoy building clear and responsive user interfaces using React."
          />
          <DynamicProfileCard
            image={image2}
            name="Jannifer Martin"
            role="Backend Development Student"
            description="I enjoy building scalable and efficient server-side applications using Node.js."
          />
          <DynamicProfileCard
            image={image3}
            name="Thomas Smith"
            role="Full Stack Development Student"
            description="I enjoy building end-to-end web applications using React and Node.js."
          />
        </div> */}

        {/* <div className="mb-5">
          <UseStateCounter />
        </div>
        
        <hr />
        
        <div className="mb-5">
          <UseReducerCounter />
        </div>
         */}

          <TodoList />
        {/* <Footer /> */}
      </div>
    </Fragment>

  );
}

export default AppCopy;