import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { JustifyLeft,JustifyRight,Justify } from "react-bootstrap-icons";

const RBButtonGroups = () => {
    const [align, setAlign] = useState("start");

    return (
        <div>
            <div className="fw-bold text-info">ButtonGroups</div>< hr />


            <ButtonGroup className="mb-3">

                <Button
                    variant={align === "start" ? "primary" : "outline-primary"}
                    onClick={() => setAlign("start")}
                >
                    <JustifyLeft className="me-2" />
                    Left
                </Button>

                <Button
                    variant={align === "center" ? "primary" : "outline-primary"}
                    onClick={() => setAlign("center")}
                >
                    <Justify className="me-2" />
                    Center
                </Button>

                <Button
                    variant={align === "end" ? "primary" : "outline-primary"}
                    onClick={() => setAlign("end")}
                >
                    <JustifyRight className="me-2" />
                    Right
                </Button>

            </ButtonGroup>

            <div className={`text-${align} `}>
                Here, the actions of the above buttons will be reflected.
            </div>
        </div>
    )
}
 export default RBButtonGroups
