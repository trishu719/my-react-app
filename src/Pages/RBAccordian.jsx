import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { DashCircle, PlusCircle } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";

const Accordian = [
    {
        id: "0",
        question: "what is the cost of an online course ?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
        id: "1",
        question: "Do I need to visit any physical location ?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
        id: "2",
        question: "What are the technology requirements ?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
        id: "3",
        question: "How can I ask questions or clear doubts?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
];

function ContextAwareToggle({ children, eventKey, callback }) {
    const activeEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <div
            type="button"
            className={` ${isCurrentEventKey ? "text-primary" : "text-dark"} fw-bold p-3 d-flex align-items-center justify-content-between`}
            onClick={decoratedOnClick}
        >
            {children}
            {isCurrentEventKey ? <DashCircle /> : <PlusCircle />}
        </div>
    );
}

function RBAccordian() {
    return (
        <Container className="p-3 mt-2">
            <h3 className="fw-bold text-info fs-5">Accordian</h3>
            <hr />
            <Accordion defaultActiveKey="0" flush>
                {Accordian.map((item) => (
                    <Accordion.Item eventKey={item.id} key={item.id}>
                        <ContextAwareToggle eventKey={item.id}>
                            {item.question}
                        </ContextAwareToggle>
                        <Accordion.Body className="text-primary">
                            {item.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    );
}

export default RBAccordian;