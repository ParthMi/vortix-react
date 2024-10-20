import { FaArrowRight } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { NavLink } from "react-router-dom";

const Blog = ({ fromHome }) => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Activated carbon available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {fromHome ?
            (blogData.slice(0, 3).map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            )))
            :
            (blogData.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            )))
          }
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-[-15px]">
        <NavLink
          to="/blog"
          className="ease-in-up shadow-btn hover:shadow-btn-hover  rounded-sm bg-orange px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90  md:px-9 lg:px-6 xl:px-9 !flex gap-2 items-center"
        >
          <span>View All Blogs</span> <span><FaArrowRight /></span>
        </NavLink>
      </div>

    </section>
  );
};

export default Blog;
