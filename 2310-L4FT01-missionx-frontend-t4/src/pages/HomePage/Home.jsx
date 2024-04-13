import styles from "./Home.module.css";
import NavbarHome from "../../common/NavbarHome";
import FooterHome from "../../common/FooterHome";
import SignUpSection from "./components/SignUpSection";
import CarouselSection from "./components/CarouselSection";
import ProgramSection from "./components/ProgramSection";
import EnquireSection from "./components/EnquireSection";

const Home = () => {
  return (
    <>
      <div className={styles.body}>
        <NavbarHome teacher={false}/>
        <SignUpSection/>
        <CarouselSection/>
        <ProgramSection/>
        <EnquireSection/>
        <FooterHome/>
      </div>
    </>
  );
};

export default Home;
