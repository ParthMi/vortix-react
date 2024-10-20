import SingleBlog from '../../components/Blog/SingleBlog';
import blogData from '../../components/Blog/blogData';
import Breadcrumb from '../../components/common/Breadcrumb';
const MainBlog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Discover insightful articles on various topics, curated to keep you informed and inspired. Stay updated with the latest trends and expert opinions."
      />

      <section className="pb-[60px] pt-[50px]">
        <div className="container">
          <div className="-mx-4 grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogData?.map((blog, index) => (
              <div
                key={blog.id}
                className="w-full px-4"
                data-aos="fade-up" // Add your desired AOS animation
                data-aos-delay={`${index * 100}`} // Optional: stagger the animations
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default MainBlog;
