import { Link, useNavigate } from 'react-router-dom';

const NoContent = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white mx-auto p-4 flex-1 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center text-center p-4">
        <div className="w-full">
          <div className="text-5xl font-medium p-4">No summary 😥</div>
          <div className="text-xl font-medium mb-4">
            No content has been added for this page yet.
          </div>
          <div className="text-lg mb-8">
            Be the first one in the community to add some summary!
          </div>
        </div>
        <p
          onClick={() => navigate('/add')}
          className="w-max text-lg border border-white rounded p-4"
        >
          Let's get started !🚀
        </p>
      </div>
    </div>
  );
};

export default NoContent;
