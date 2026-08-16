import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';

function RBSpinners() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitClick = () => {
    setIsSubmitting(true);
  };

  const handleCancelClick = () => {
    setIsSubmitting(false);
  };

  return (
    <div>
      <div className="fw-bold text-info fs-5">Spinners</div>
      <hr />

    

      

      {/* 2. State-based Interactive Section (Solid Red / Active UI) */}
      <div className="mb-3">
        {!isSubmitting ? (
          <>
            <Button variant="primary" onClick={handleSubmitClick} className="me-2">
              Click to Submit
            </Button>
            <Button variant="danger" onClick={handleCancelClick}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button variant="primary" disabled className="me-2">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-1"
              />
              Submitting
            </Button>
            {/* Standard Solid Red Cancel Button */}
            <Button variant="danger" onClick={handleCancelClick}>
              Cancel
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default RBSpinners;