import { NavLink, useNavigate } from 'react-router-dom'
import { BlogData } from '../../data/BlogData'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useState } from 'react'

export const BlogListing = () => {

    const [searchValue, setSearchValue] = useState("")

    const navigate = useNavigate()

    const handleSearch = () => {

        if (!searchValue.trim()) return

        navigate(`/blogsearchdetails?search=${searchValue.trim()}`)
    }

    return (
        <div>
            <h2 className='ps-5 text-dark fw-bold'>BlogListing</h2><hr />
            <Row className='px-4'>
                <Col>
                    <InputGroup className="mb-3" size='lg'>
                        <Form.Control
                            placeholder="Enter keyword to search in blog"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <Button
                            variant="outline-secondary"
                            id="button-addon2"
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row className='justify-content-start px-4'>
                {BlogData.map((Blog) => {
                    return (
                        <Col key={Blog.id} className='mb-4' lg={4}>
                            <Card style={{ width: '17rem' }} className='h-100'>
                                <Card.Img variant="top" src={Blog.image} />
                                <Card.Body className='d-flex flex-column'>
                                    <Card.Title>{Blog.title}</Card.Title>
                                    <NavLink to={"/blog/" + Blog.id} className="text-decoration-none fw-medium">Read More</NavLink>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}