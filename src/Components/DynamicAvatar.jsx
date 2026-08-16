import defaultimage from '../assets/image.avif';

export function DynamicAvatar({ image = defaultimage }) {
  return (
    <img
      src={image}
      alt="User Avatar"
      className="mx-auto mb-3"
      width="120"
      height="120"
    />
  );
}