import CarInfo from "../../components/CarInfo/CarInfo";
import UserInfo from "../../components/UserInfo/UserInfo";
import { Footer, ProfileBackground, ProfileContainer, Section3Background, SectionContainer, SectionWrapper } from "./styles";

const SectionProfile = () => {
  return (
    <SectionWrapper>
      <SectionContainer>
        <Section3Background>
          <ProfileBackground>
            <ProfileContainer>
              <UserInfo />
            </ProfileContainer>
            <ProfileContainer>
              <h2>Fuel</h2>
            </ProfileContainer>
          </ProfileBackground>
        </Section3Background>
      </SectionContainer>
      {/* <Footer>
        <h1>Контакты:</h1>
        <h3>Email: delatMneNetchego@skutchno.com</h3>
        <h3>Телефон: 087823 6294691488 (лучше никогда не звонить этому человеку)</h3>
        <h3>Автор: Ночная Сова🦉</h3>
        <h3>P.S: Всем спокойного утра 😂😝</h3>
      </Footer> */}
    </SectionWrapper>
  );
};

export default SectionProfile;
