import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) =>
    props.$isTransparent ? "transparent" : "black"};
  color: white;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  margin-top: 0.5rem;

  a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;
  padding: 0;
`;

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Nu är navigate definierad
  console.log("useNavigate:", navigate); // Kontrollera om navigate är en funktion

  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const isMovieInfoPage = location.pathname.startsWith("/movies/");
    setIsTransparent(isMovieInfoPage);
  }, [location]);

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <StyledHeader $isTransparent={isTransparent}>
<div>
  <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
    <Title>🎬 ScreamFlix</Title>
  </Link>
  {location.pathname.startsWith("/movies/") && (
    <BackButton onClick={handleGoBack}>Movies</BackButton>
  )}
</div>
      <Nav>
        <Link to="/">Home</Link>
      </Nav>
    </StyledHeader>
  );
};
