import React, { useState } from 'react'
import { Button, Stack, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { PencilFill, TypeBold, TypeItalic, TypeUnderline, TypeStrikethrough } from 'react-bootstrap-icons';

const RBButtons = () => {
    const [radioValue, setRedioValue] = useState([]);

    const [style, setStyle]=useState({
        bold:false,
        italic:false,
        underline:false,
        strike:false,
    });

    const buttons = [
        { value: "bold", icon: <TypeBold /> },
        { value: "italic", icon: <TypeItalic /> },
        { value: "underline", icon: <TypeUnderline /> },
        { value: "strike", icon: <TypeStrikethrough /> },
    ];

    return (
        <div>
            <div className='text-info fw-bold' >Buttons</div><hr />

            <div className='fw-bold mb-3'>Button Styles
                <div className='d-flex gap-3 flex-wrap mb-5'>
                    <Button variant='primary'>Normal Button</Button>
                    <Button variant='primary'><PencilFill className='me-2' />Edit Record</Button>
                    <Button variant='outline-primary'>Outline Button</Button>
                    <Button variant='primary' disabled>Disabled Button</Button>
                </div>
            </div>

            <div className='fw-bold mb-1'>Button Types</div>
            <Stack direction='horizontal' gap={3}>
                <Button href="#">Link</Button> <Button type="submit">Button</Button>
                <Button as="input" type="button" value="Input" />
                <Button as="input" type="submit" value="Submit" />
                <Button as="input" type="reset" value="Reset" />
            </Stack>

            <div className='fw-bold pt-5'>Toggle Button</div>
            <ButtonGroup className="mb-3">
                <ToggleButton
                    id="bold"
                    type="checkbox"
                    variant={style.bold ? "primary" : "outline-primary"}
                    checked={style.bold}
                    value="1"
                    onChange={() =>
                        setStyle({ ...style, bold: !style.bold })
                    }
                >
                    <TypeBold />
                </ToggleButton>

                <ToggleButton
                    id="italic"
                    type="checkbox"
                    variant={style.italic ? "primary" : "outline-primary"}
                    checked={style.italic}
                    value="2"
                    onChange={() =>
                        setStyle({ ...style, italic: !style.italic })
                    }
                >
                    <TypeItalic />
                </ToggleButton>

                <ToggleButton
                    id="underline"
                    type="checkbox"
                    variant={style.underline ? "primary" : "outline-primary"}
                    checked={style.underline}
                    value="3"
                    onChange={() =>
                        setStyle({ ...style, underline: !style.underline })
                    }
                >
                    <TypeUnderline />
                </ToggleButton>

                <ToggleButton
                    id="strike"
                    type="checkbox"
                    variant={style.strike ? "primary" : "outline-primary"}
                    checked={style.strike}
                    value="4"
                    onChange={() =>
                        setStyle({ ...style, strike: !style.strike })
                    }
                >
                    <TypeStrikethrough />
                </ToggleButton>
            </ButtonGroup>

            <p
                style={{
                    fontWeight: style.bold ? "bold" : "normal",
                    fontStyle: style.italic ? "italic" : "normal",
                    textDecoration: `${style.underline ? "underline " : ""
                        }${style.strike ? "line-through" : ""}`,
                }}
            >
                Here, the actions of the above buttons will be reflected.
            </p>


        </div>
    )
}

export default RBButtons;