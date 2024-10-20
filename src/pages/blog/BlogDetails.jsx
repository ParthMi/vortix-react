import SharePost from "../../components/Blog/SharePost";
import blogData from "../../components/Blog/blogData";
import { useParams } from "react-router";


const BlogDetails = () => {
  const params = useParams();
  const blogId = parseInt(params.id, 10);
  const blog = blogData.find((b) => b.id === blogId);

  return (
    <section className="pb-[80px] pt-[80px] md:pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              {/* Blog Title */}
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {blog.title}
              </h2>

              {/* Blog Meta */}
              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex flex-wrap items-center">


                  {/* Date */}
                  <div className="mb-5 flex items-center">
                    <p className="mr-5 flex items-center text-base font-medium text-body-color">
                      <span className="mr-3">
                        {/* Replace SVG with a relevant icon */}
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          className="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* SVG paths */}
                          <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                        </svg>
                      </span>
                      {new Date(blog.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Categories */}
                {blog.categories && blog.categories.length > 0 && (
                  <div className="mb-5">
                    {blog.categories.map((category, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="inline-flex items-center justify-center rounded-full bg-orange px-4 py-2 text-sm font-semibold text-white mr-2 mb-2"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Summary */}
              {blog.summary && (
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-md sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {blog.summary}
                </p>
              )}

              {/* Blog Images */}
              {blog.images && blog.images.length > 0 && (
                <div className="mb-10 w-full overflow-hidden rounded">
                  {blog.images.map((image, idx) => (
                    <div key={idx} className="relative aspect-[97/60] w-full sm:aspect-[97/44] mb-4">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Blog Content */}
              {blog.content &&
                blog.content.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
                      {section.sectionTitle}
                    </h3>

                    {/* Paragraphs */}
                    {section.paragraphs &&
                      section.paragraphs.map((para, idx) => (
                        <p
                          key={idx}
                          className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-md sm:leading-relaxed"
                        >
                          {para}
                        </p>
                      ))}

                    {/* Lists */}
                    {section.list && (
                      <ul className="list-disc list-inside mb-4 text-base font-medium leading-relaxed text-body-color sm:text-md sm:leading-relaxed">
                        {section.list.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {/* Tables */}
                    {section.table && (
                      <div className="overflow-x-auto">
                        <table className="min-w-full table-auto border-collapse border border-gray-300">
                          <thead>
                            <tr>
                              {section.table.headers.map((header, idx) => (
                                <th
                                  key={idx}
                                  className="border border-gray-300 px-4 py-2 bg-gray-200 text-left"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, idx) => (
                              <tr key={idx} className="even:bg-gray-100">
                                {row.map((cell, cellIdx) => (
                                  <td
                                    key={cellIdx}
                                    className="border border-gray-300 px-4 py-2"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Subsections */}
                    {section.subsections &&
                      section.subsections.map((subsec, subIdx) => (
                        <div key={subIdx} className="mb-4">
                          <h4 className="mb-2 text-xl font-semibold text-gray-700 dark:text-white">
                            {subsec.subsectionTitle}
                          </h4>
                          {subsec.paragraphs &&
                            subsec.paragraphs.map((para, pIdx) => (
                              <p
                                key={pIdx}
                                className="mb-2 text-base font-medium leading-relaxed text-body-color sm:text-md sm:leading-relaxed"
                              >
                                {para}
                              </p>
                            ))}
                        </div>
                      ))}
                  </div>
                ))}



              {/* Tags and Share */}
              <div className="items-center justify-between sm:flex">
                <div>
                  &nbsp;
                </div>
                {/* Share Post */}
                <div className="mb-5">
                  <div className="flex items-center sm:justify-end">
                    <SharePost postTitle={blog.title} postText={blog.summary || "Check out this blog post!"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
