import { NavLink } from "react-router-dom";


const SingleBlog = ({ blog }) => {

  const { title, image, paragraph, author, tags, publishDate, id } = blog;
  return (
    <>
      <div className="group h-full relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <NavLink
          to={`/blog/${id}`}
          className="relative block aspect-[37/22] w-full"
        >
          <img src={blog.images[0].url} alt="image" fill />
        </NavLink>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h4>
            <NavLink
              to={`/blog/${id}`}
              className="mb-4 block text-md font-bold text-black hover:text-orange dark:text-white dark:hover:text-primary sm:text-xl"
            >
              {title}
            </NavLink>
          </h4>
          <div className="flex items-center">
            <div className="inline-block">
            <NavLink
              to={`/blog/${id}`}>
              <h4 className="text-sm font-medium text-orange underline">
                Read More
              </h4>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
