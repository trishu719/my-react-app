import React from "react";
import { Figure } from "react-bootstrap";


const RBFigure = () => {
    return (
        <div>
            <div className="fw-bold text-info">Figure</div><hr />

            <Figure>
                <Figure.Image
                    width={100}
                    height={30}
                    alt="React Figure"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    thumbnail
                />

                <Figure.Caption className="fs-5 mt-2">
                    Image Resource : Google.com
                </Figure.Caption>
            </Figure>

        </div>
    )
}

export default RBFigure