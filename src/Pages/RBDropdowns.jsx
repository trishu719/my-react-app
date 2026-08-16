import Dropdown from "react-bootstrap/Dropdown";
import { Person, Speedometer2, ChevronDown, CaretDownFill, Bell, Gear, BoxArrowRight } from "react-bootstrap-icons";

function RBDropdowns() {
  return (
    <div className="container mt-5">
        <h3 className="fw-bold text-info fs-5">Dropdowns</h3><hr/>
      <div className="row text-center">

        <div className="col-md-4 mb-4">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              <Person className="me-2" />
              Profile
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">
                <Speedometer2 className="me-2" />
                Dashboard
              </Dropdown.Item>

              <Dropdown.Item href="#">
                <Bell className="me-2" />
                Notification
              </Dropdown.Item>

              <Dropdown.Item href="#">
                <Gear className="me-2" />
                Settings
              </Dropdown.Item>

              <Dropdown.Item href="#">
                <BoxArrowRight className="me-2" />
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

    
        <div className="col-md-4 mb-4">
          <Dropdown>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
              <Person className="me-2" />
              Profile
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">
                <Speedometer2 className="me-2" />
                Dashboard
              </Dropdown.Item>

              <Dropdown.Item href="#">
                <Bell className="me-2" />
                Notification
              </Dropdown.Item>

              <Dropdown.Item href="#">
                <Gear className="me-2" />
                Settings
              </Dropdown.Item>

              <Dropdown.Item href="#">
                <BoxArrowRight className="me-2" />
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="col-md-4 mb-4">
          <Dropdown>
            <Dropdown.Toggle
              bsPrefix=" "
              variant="light"
              id="avatar-dropdown"
              className="border-0 bg-white"
            >
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80" 
                alt="avatar"
                width="40"
                height="40"
                className="rounded-circle" 
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">
                <Speedometer2 className="me-2" />
                Dashboard
              </Dropdown.Item>

              <Dropdown.Item href="#">
                <Bell className="me-2" />
                Notification
              </Dropdown.Item>

              <Dropdown.Item href="#">
                <Gear className="me-2" />
                Settings
              </Dropdown.Item>

              <Dropdown.Item href="#">
                <BoxArrowRight className="me-2" />
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

      </div>
    </div>
  );
}

export default RBDropdowns;