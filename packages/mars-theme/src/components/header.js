import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import BannerPng from "../../assets/pictures/BannerPng.png";
import MobileMenu from "./menu";


const Header = ({ state }) => {
  console.log(state)
  return (
    <>
      <Container>
        <TopWrapper>
        </TopWrapper>

        <ImageWrapper>
          <Nav />
          
          <PicSubWrapper>



            <CTAWrapper>
              <p>Deutsche Wohnmobilvermietung</p>
              <h4>Los Angeles and Süd Kalifornien</h4>
            </CTAWrapper>
            

          </PicSubWrapper>
          
          <HeaderImage src={BannerPng} />
        </ImageWrapper>
        <BottomWrapper />
          
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);


const ImageWrapper = styled.div`
  position:relative;
  height: 100vh;
`

const PicSubWrapper = styled.div`
  position:absolute;
  height:100%;
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
`

const CTAWrapper = styled.div`
  color: #fff;
`

const HeaderImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  margin-bottom:0px;
`



const BottomWrapper = styled.div`
  display:flex;
  flex-direction:row;
  width: 100vw;
  justify-content: space-between;
  height: 70px;
  background-color: #fbcc8d;
`

const TopWrapper = styled.div`
  display:flex;
  flex-direction:row;
  width: 100vw;
  justify-content: space-between;
  height: 70px;
  background-color: #fbcc8d;
`

const Logo = styled.div`
  width: auto;
  height: auto;
  white-space: nowrap;
  margin-right: auto;
`

const Container = styled.div`
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
