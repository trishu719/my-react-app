import { DynamicAvatar } from './DynamicAvatar';

function DynamicProfileCard(props) {
    const { 
        image, 
        name = "Jane Smith", 
        role = "Student", 
        description = "I am a student." 
    } = props;

    return (
        <div className="col">
            <div className="card shadow text-center py-4 px-3 h-100 border-0 rounded-3">
                <DynamicAvatar image={image} />
                <div className="card-body p-0 mt-2">
                    <h5 className="card-title fw-bold mb-2">{name}</h5>
                    <h6 className="fw-bold dark-primary small mb-3">{role}</h6> 
                    <p className="card-text lh-sm text-muted small mb-0">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default DynamicProfileCard;