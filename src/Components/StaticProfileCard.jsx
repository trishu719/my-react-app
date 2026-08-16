import { Fragment } from 'react'
import { Avatar } from './Avatar'

const StaticProfileCard = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="card shadow text-center py-3 px-3 card-weight border-0 rounded-3">
            <Avatar />

            <div className="card-body">
            <h4 className='fw-bold text-center mt-40 mb-3 text-black'>John Doe</h4>
            <h6 className='text-primary text-center mb-2 fw-bold'>Frontend Developement Student</h6>
            <p className='text-center fw-muted mb-0 h1-sm'>I enjoy building clear and responsive user</p>
            <p className='text-center fw-muted mb-0 h1-sm'>interfaces using React.</p>
        </div>
        </div>
        </div>
    )
}

export default StaticProfileCard

