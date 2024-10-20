import React from 'react';
import applicationData from '../../components/Applications/appdata';
import Breadcrumb from '../../components/common/Breadcrumb';
import SharePost from '../../components/Blog/SharePost';
import { useParams } from 'react-router';


const SingleApplication = () => {
    const params = useParams();

    const applicationTitle = ((params?.title)); // Decode URL and deslugify the title
    const application = applicationData.find((b) => b.title.toLowerCase() === applicationTitle?.toLowerCase());

    console.log(applicationTitle)
    return (
        <>
            <Breadcrumb
                pageName={(decodeURIComponent(params?.title))}
                mainPage='Applications'
                mainurl="/applications"
                description="Discover insightful articles on various topics, curated to keep you informed and inspired. Stay updated with the latest trends and expert opinions."
            />

            <section className="pb-[60px] pt-[50px]">
                <div className="container">
                    <div className="max-w-3xl mx-auto p-6">
                        {/* Image Section */}
                        {application?.images && application?.images.length > 0 && (
                            <div className="mb-6">
                                <img
                                    src={application?.images[0].url}
                                    alt={application?.images[0].alt}
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                        )}

                        {/* Application Title */}
                        <h1 className="text-4xl font-bold mb-4">{application?.title}</h1>

                        {/* Application Summary */}
                        <p className="text-gray-600 text-lg mb-6">{application?.summary}</p>

                        {/* Sections for Content */}
                        {application?.content.map((section, index) => (
                            <div key={index} className="mb-8">
                                {/* Section Title */}
                                <h2 className="text-2xl font-semibold mb-2">{section.sectionTitle}</h2>

                                {/* Paragraphs or Applications List */}
                                {section.paragraphs ? (
                                    section.paragraphs.map((paragraph, idx) => (
                                        <p key={idx} className="text-gray-700 mb-2">{paragraph}</p>
                                    ))
                                ) : (
                                    <ul className="list-disc list-inside">
                                        {section.applications.map((app, idx) => (
                                            <li key={idx} className="mb-2">
                                                <span className="font-semibold">{app.name}:</span> {app.description}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="items-center justify-center sm:flex">
                        {/* Share Post */}
                        <div className="mb-5">
                            <div className="flex items-center sm:justify-center">
                                <SharePost postTitle={(decodeURIComponent(params?.title))} postText={application?.summary || "Check out this blog post!"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SingleApplication;
