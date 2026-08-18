import { NavLink, useSearchParams } from "react-router-dom"
import { BlogData } from "../../data/BlogData"
import { Card, Col, Form, Row } from "react-bootstrap"
import { useState } from "react"
import { HighlightText } from "./HighlightText"

export const BlogSearchDetails = () => {

    const [searchParams] = useSearchParams()

    const searchKeyword = searchParams.get("search") || ""

    const [searchValue, setSearchValue] = useState(searchKeyword)

    const filteredBlogs = BlogData.filter((blog) =>
        blog.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        blog.description?.toLowerCase().includes(searchValue.toLowerCase())
    )

    return (
        <div>
            <h2 className="ps-4 text-dark fw-bold">
                Search Result for: {searchKeyword}
            </h2>
            <hr />
            <div className="px-4 py-4">
                <Form.Control
                    placeholder="Enter keyword to search in blog"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={searchValue}
                    size="lg"
                    onChange={(e) => setSearchValue(e.target.value)}

                />
            </div>
            <Row className="justify-content-start px-4">

                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((Blog) => {
                        return (
                            <Col
                                key={Blog.id}
                                className="mb-4"
                                lg={4}
                            >
                                <Card
                                    style={{ width: "17rem" }}
                                    className="h-100"
                                >
                                    <Card.Img
                                        variant="top"
                                        src={Blog.image}
                                    />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>
                                            <HighlightText text={Blog.title} keyword={searchValue}></HighlightText>
                                        </Card.Title>
                                        <NavLink
                                            to={`/blog/${Blog.id}?search=${searchValue}`}
                                            className="text-decoration-none fw-medium"
                                        >
                                            Read More
                                        </NavLink>

                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                ) : (
                    <Col>
                        <p className="ps-2 fs-3 text-center text-danger">No blogs found.</p>
                    </Col>
                )}

            </Row>

        </div>
    )
}