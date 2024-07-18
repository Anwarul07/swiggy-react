import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

export const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("career");
  //   const [setConfig, setSectionConfig] = useState({
  //   showAbout:true,
  //   showteam:false,
  //   sowCareer:true,
  // });
  return (
    <div className=" bg-green-300  my-12 py-8 capitalize">
      <div className="mr-80">
        <h1 className="ml-4">Instamart Page</h1>
        <h1 className=" ml-4">100s of components</h1>
      </div>

      <Section
        title={"About  first instamart"}
        description={
          "Fisrt description about sections  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
        }
        // isVisible={true}
        // isVisible={setConfig.showAbout}

        // setIsVisible={()=>
        //   setSectionConfig({
        //   showAbout:true,
        //   showteam:false,
        //   sowCareer:false,
        // })}

        isVisible={visibleSection === "about"}
        setIsVisible={() => setIsVisibleSection("about")}
      />
      <Section
        title={"About  second  Career instamart"}
        description={
          "Second  description about sections  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
        }
        // isVisible={false}
        // isVisible={setConfig.showteam}

        // setIsVisible={()=>
        //   setSectionConfig({
        //   showAbout:false,
        //   showteam:true,
        //   sowCareer:false,
        // })}

        isVisible={visibleSection === "team"}
        setIsVisible={() => setIsVisibleSection("team")}
      />
      <Section
        title={"About  Third  Team instamart"}
        description={
          "Third  description about sections  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
        }
        // isVisible={false}

        // isVisible={setConfig.sowCareer}
        // setIsVisible={()=>
        //   setSectionConfig({
        //   showAbout:false,
        //   showteam:false,
        //   sowCareer:true,
        // })}

        isVisible={visibleSection === "career"}
        setIsVisible={() => setIsVisibleSection("career")}
      />

      {/* <AboutInstaMart/>
      <DetailsofInstaart/>
      <TeamInstamart/>
      <Product/>
      <Careers/> */}
    </div>
  );
};
