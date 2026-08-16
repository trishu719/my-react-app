import React from "react";
import { Tab, Nav, Row, Col, Table } from "react-bootstrap";
import {BsCalendarDate,BsClock,BsCurrencyRupee,BsPeople,BsListTask,BsChatDots,} from "react-icons/bs";

function RBNavTabs() {
  return (
    <>
      <style type="text/css">
        {`
          .custom-tabs {
            border-bottom: none !important;
          }
          .custom-tabs .nav-link {
            color: #6c757d;
            border: none !important;
            border-bottom: 3px solid transparent !important;
            font-weight: 500;
            padding: 10px 16px;
            background: transparent !important;
            margin-right: 5px;
          }
          .custom-tabs .nav-link:hover {
            color: #0d6efd;
          }
          .custom-tabs .nav-link.active {
            color: #0d6efd !important;
            border-bottom: 3px solid #0d6efd !important;
            background: transparent !important;
          }
        `}
      </style>

      <Tab.Container defaultActiveKey="overview">
        <Row>
          <Col sm={12}>
          
            <Nav variant="tabs" className="custom-tabs">
              <Nav.Item>
                <Nav.Link eventKey="overview">Overview</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="scope">Project Scope</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="team">Team Members</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="tasks">Tasks</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="chat">Chat</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={12} className="mt-3">
            <Tab.Content>
              {/* Overview */}
              <Tab.Pane eventKey="overview">
                <p className="text-muted mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Donec purus tellus, ultricies quis orci ac, volutpat
                  rhoncus lacus. Sed tempor arcu vitae neque mollis rutrum.
                </p>

                <Table borderless className="align-middle w-80">
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3"><BsCalendarDate className="me-2 text-primary" /> Start Date</td>
                      <td className="text-end fw-semibold py-3">01 Jul, 2025</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3"><BsCalendarDate className="me-2 text-primary" /> End Date</td>
                      <td className="text-end fw-semibold py-3">31 Dec, 2025</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3"><BsClock className="me-2 text-primary" /> Estimate Time</td>
                      <td className="text-end fw-semibold py-3">5 Months</td>
                    </tr>
                    <tr>
                      <td className="py-3"><BsCurrencyRupee className="me-2 text-primary" /> Estimate Cost</td>
                      <td className="text-end fw-semibold py-3">₹5,80,000</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>

              {/* Project Scope */}
              <Tab.Pane eventKey="scope">
                <h4 className="mb-3">Project Scope</h4>
                <p className="text-muted">
                  This project includes UI Design, React Development,
                  API Integration, Testing and Deployment.
                </p>
              </Tab.Pane>

              {/* Team Members */}
              <Tab.Pane eventKey="team">
                <h4 className="mb-3"><BsPeople className="me-2" /> Team Members</h4>
                <ul className="list-unstyled">
                  <li className="mb-2 p-2 bg-light rounded"><strong>Rahul</strong> - Project Manager</li>
                  <li className="mb-2 p-2 bg-light rounded"><strong>Pooja</strong> - React Developer</li>
                  <li className="mb-2 p-2 bg-light rounded"><strong>Aman</strong> - Backend Developer</li>
                  <li className="mb-2 p-2 bg-light rounded"><strong>Neha</strong> - UI Designer</li>
                </ul>
              </Tab.Pane>

              {/* Tasks */}
              <Tab.Pane eventKey="tasks">
                <h4 className="mb-3"><BsListTask className="me-2" /> Tasks</h4>
                <ul className="list-unstyled">
                  <li className="mb-2 p-2 bg-light rounded"> Design Completed</li>
                  <li className="mb-2 p-2 bg-light rounded"> Frontend In Progress</li>
                  <li className="mb-2 p-2 bg-light rounded"> Backend Pending</li>
                  <li className="mb-2 p-2 bg-light rounded"> Deployment Pending</li>
                </ul>
              </Tab.Pane>

              <Tab.Pane eventKey="chat">
                <h4 className="mb-3"><BsChatDots className="me-2" /> Chat</h4>
                <div className="p-3 bg-light rounded">
                  <p className="mb-2"><strong>Rahul:</strong> Please complete UI by Monday.</p>
                  <p className="mb-0"><strong>Pooja:</strong> Sure, I'm working on it.</p>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default RBNavTabs;