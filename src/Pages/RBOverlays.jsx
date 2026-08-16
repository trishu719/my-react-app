import React from "react";
import {
  Button,
  OverlayTrigger,
  Popover,
  Tooltip,
  Stack,
} from "react-bootstrap";

const directions = ["top", "right", "bottom", "left"];

function RBOverlays() {
  return (
    <div className="container mt-4">
        <h3 className="fw-bold text-info fs-5">Overlays</h3><hr/>
    <div className="container mt-2">
      {/* Popover Section */}
      <Stack
        direction="horizontal"
        gap={2}
        className="justify-content-center flex-wrap mb-4"
      >
        {directions.map((placement) => (
          <OverlayTrigger
            key={placement}
            trigger="click"
            rootClose
            placement={placement}
            overlay={
              <Popover id={`popover-${placement}`}>
                <Popover.Header as="h3">
                  Popover {placement}
                </Popover.Header>

                <Popover.Body>
                  <strong>Holy guacamole!</strong> Check this info.
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="light" className="border">
              Popover on {placement}
            </Button>
          </OverlayTrigger>
        ))}
      </Stack>

      <hr />

      {/* Tooltip Section */}
      <Stack
        direction="horizontal"
        gap={2}
        className="justify-content-center flex-wrap mt-4"
      >
        {directions.map((placement) => (
          <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
              <Tooltip id={`tooltip-${placement}`}>
                Tooltip on {placement}
              </Tooltip>
            }
          >
            <Button variant="secondary">
              Tooltip on {placement}
            </Button>
          </OverlayTrigger>
        ))}
      </Stack>
    </div>
    </div>
  );
}

export default RBOverlays;