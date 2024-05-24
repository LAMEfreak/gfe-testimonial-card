// Define the shape of the props that the component expects

interface TestimonialCardProps {
  avatarImg: string;
  username: string;
  userHandle: string;
  cardMessage: string;
  alt?: string;
}

// Use React.FC<TestimonialCardProps> to apply the defined props to the component
// React.JSX.Element describes the return value

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatarImg,
  username,
  userHandle,
  cardMessage,
  alt,
}): React.JSX.Element => {
  return (
    <div className="w-[340px] p-6 rounded-lg bg-white border-neutral-200 shadow-md">
      <div className="flex mb-4 gap-4">
        <img
          src={avatarImg}
          width="48px"
          alt={alt || "Profile thumbnail"}
          loading="lazy"
        />
        <div>
          <p className="font-semibold text-lg">{username}</p>
          <p className="text-sm text-neutral-600">{userHandle}</p>
        </div>
      </div>
      <p className="text-base text-neutral-600">{cardMessage}</p>
    </div>
  );
};
export default TestimonialCard;
