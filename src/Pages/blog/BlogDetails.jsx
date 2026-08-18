import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { BlogData } from '../../data/BlogData'
import { Button, Image } from 'react-bootstrap'
import { HighlightText } from './HighlightText'

export const BlogDetails = () => {

    const [searchParams] = useSearchParams()

    const searchKeyword = searchParams.get("search") || ""

    const param = useParams()

    const blogInfo = BlogData.find(
        (blog) => blog.id === parseInt(param.id)
    )

    const navigate = useNavigate()

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center px-5'>
                <h1 className='text-dark fw-bold'>
                    Blog Details
                </h1>
                <Button
                    variant='outline-success'
                    onClick={() => navigate("/blogListing")}
                >
                    Go Back
                </Button>
            </div>
            <hr />
            <div
                className='ps-5 pt-4 pb-1'
                style={{ width: "800px" }}
            >
                <h2 className='fw-medium'>
                    <HighlightText
                        text={blogInfo.title}
                        keyword={searchKeyword}
                    />
                </h2>
                <Image
                    src={blogInfo.image}
                    fluid
                    className='mb-3 mt-3'
                />
                <p className='fw-medium'>
                    <HighlightText
                        text={blogInfo.body}
                        keyword={searchKeyword}
                    />
                </p>
            </div>
        </div>
    )
}