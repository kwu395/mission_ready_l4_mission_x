import ContentWrapper from "../ContentWrapper/ContentWrapper";
import ScratchBlocks from "./ScratchBlocks";
import { useEffect, useState } from "react";

// import Project01obj1 from "../../../../../public/images/projects/Project01-obj1.png";
// import Project01obj2 from "../../../../../public/images/projects/Project01-obj2.png";
// import Project01obj3 from "../../../../../public/images/projects/Project01-obj3.png";
// import Project01obj4 from "../../../../../public/images/projects/Project01-obj4.png";
// import Project01obj5 from "../../../../../public/images/projects/Project01-obj5.png";
// import Project01obj6 from "../../../../../public/images/projects/Project01-obj6.png";

// const learningObjectivesData = {
//   title: "Explore scratch blocks",
//   subtitle:
//     "Learn the basic function of some basic scratch blocks such as “say,” “wait,” “go to” and “hide.”",
//   blocks: [
//     {
//       title: "Look Blocks",
//       mainImage: Project01obj1,
//       secondaryImage: Project01obj2,
//     },
//     {
//       title: "Control Blocks",
//       mainImage: Project01obj3,
//       secondaryImage: Project01obj4,
//     },
//     {
//       title: "Motion Blocks",
//       mainImage: Project01obj5,
//       secondaryImage: Project01obj6,
//     },
//   ],
// };

// export default function LearningObjectives() {
//   return (
//     <div id="learningObjectives">
//       <ContentWrapper>
//         <ScratchBlocks data={learningObjectivesData} />
//       </ContentWrapper>
//     </div>
//   );
// }

export default function LearningObjectives() {
  const [htmlToDisplay, setHtmlToDisplay] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/learning-objectives/1")
      .then((res) => res.json())
      .then((result) => {
        setHtmlToDisplay(result);
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div id="learningObjectives">
      <ContentWrapper>
        <div>
          {htmlToDisplay.map((content, index) => {
            return (
              <div key={index}>
                <p>{content.learning_objectives}</p>
              </div>
            );
          })}
        </div>
        {/* <ScratchBlocks data={learningObjectivesData} /> old code before fetch function */}
      </ContentWrapper>
    </div>
  );
}
