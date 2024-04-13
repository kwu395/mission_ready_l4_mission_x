import makeProjectImg from '../../../../assets/StudentDashboard/makeProject-screenshot.png'
import ContentWrapper from '../ContentWrapper/ContentWrapper';

export default function MakeProject() {
  return (
    <div id="makeProject">
      <ContentWrapper>
        <img
          src={makeProjectImg}
          style={{
            maxWidth: "90%",
            maxHeight: "95%",
            display: "flex",
            margin: "0 auto",
            padding:"0",
          }}
        />
      </ContentWrapper>
    </div>
  );
}