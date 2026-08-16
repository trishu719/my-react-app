import UserAvatar from '../assets/image.avif'

export const Avatar = () => {
  return (
    <img
      src={UserAvatar}
      alt="User Avatar"
      className="mx-auto mb-3 rounded-circle"
      width="120"
      height="120"
    />
  );
};