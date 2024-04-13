import Project01instructions from "../../../../../public/images/projects/Project01-instructions.png";
import ContentWrapper from "../ContentWrapper/ContentWrapper.jsx";
import InstructionsContent from "./InstructionsContent";

const instructionsData = {
  title: "1. JOIN SCRATCH",
  firstInstruction:
    "If you haven’t used Scratch before, you will need to join Scratch first.",
  secondInstruction: "Go to https://scratch.mit.edu. Click on Join Scratch.",
  mainImage: Project01instructions,
  thirdInstruction:
    "Follow the instructions to join. You will need a username and a password that you will remember. If possible, you should also verify your email address so that you can Share projects later. Ask your teacher to help with this step if you don’t have an email address, or if you are not sure what to do.",
};

export default function Instructions() {
  return (
    <div id="instructions">
      <ContentWrapper>
        <InstructionsContent data={instructionsData} />
      </ContentWrapper>
    </div>
  );
}
