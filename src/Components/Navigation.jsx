import React from "react";
import { Link as HyperLink } from 'react-bootstrap-icons'
import { Link, NavLink } from 'react-router-dom'
import { ContextAPILink, FormsLink, InteractiveLink, NonInteractiveLink } from "../Data/NavigationData";
import Accordion from 'react-bootstrap/Accordion';

const Navigation = () => {
    return (
        <div>
            <Accordion defaultActiveKey="4">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Small Assignment</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Non Interactive Compt</Accordion.Header>
                    <Accordion.Body>
                        <ul className="Navigation">
                            {NonInteractiveLink.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <NavLink to={item.link}>{item.menuName}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header> Interactive Compt</Accordion.Header>
                    <Accordion.Body>
                        <ul className="Navigation">
                            {InteractiveLink.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <NavLink to={item.link}>{item.menuName}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>

                    </Accordion.Body>
                </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header> Forms </Accordion.Header>
                        <Accordion.Body>
                            <ul className="Navigation">
                                {FormsLink.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <NavLink to={item.link}>{item.menuName}</NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                     <Accordion.Item eventKey="4">
                        <Accordion.Header> ContextAPI </Accordion.Header>
                        <Accordion.Body>
                            <ul className="Navigation">
                                {ContextAPILink.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <NavLink to={item.link}>{item.menuName}</NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    
            </Accordion>
            {/* <li><NavLink to="/">Home</NavLink></li>
                <li><Link to="/about"><HyperLink />About</Link></li>
                <li><Link to="/rb-badges">RB-Badges</Link></li>
                <li><Link to="/rb-breadcrumbs">RB-Breadcrumbs</Link></li> */}
        </div>
    )
}

export default Navigation;