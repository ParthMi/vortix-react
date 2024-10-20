import AboutSectionOne from "../../components/About/AboutSectionOne";
import AboutSectionTwo from "../../components/About/AboutSectionTwo";
import Breadcrumb from "../../components/common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Learn more about our mission, values, and the team behind the vision. We're dedicated to delivering quality content and experiences that matter to you."
      />

      <div className="">
        <AboutSectionOne />
      </div>
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
