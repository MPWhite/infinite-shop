import React from "react";
import "./App.css";
import styled from "styled-components";
import data from "./data.json";

const ProductTitle = styled.span`
  font-size: 1em;
  font-weight: 900;
  color: white;
`;

const ImageGallery = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  width: 100vw;
  // snap children to center
  scroll-snap-type: x mandatory;

  img {
    width: 100vw;
    max-width: 500px;
    height: 100%;
    object-fit: cover;
    // snap to center
    scroll-snap-align: center;
  }
`;

const ProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100vw;
  background-color: black;
  box-sizing: border-box;
  border-radius: 20px 20px 0 0;

  p {
    color: white;
    font-size: 13px;
  }

  li {
    color: white;
    font-size: 13px;
  }
`;

const LongDescription = styled.div`
  p {
    display: none;
  }
`;

const Price = styled.span`
  background-color: lime;
  font-size: 1em;
  font-weight: 900;
  color: white;
  z-index: 100;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    width: 48%;
    height: 50px;
    border: none;
    color: white;
    font-weight: 500;
    cursor: pointer;
    border-radius: 10px;
  }
`;

const GoodButton = styled.button`
  background-color: #186a3b;
`;

const BadButton = styled.button`
  background-color: #b02407;
`;

// collect the keys in data
const keys = Object.keys(data);
// shuffle keys
keys.sort(() => Math.random() - 0.5);

function App() {
  const [currentProduct, setCurrentProduct] = React.useState(0);
  // @ts-ignore
  const x = data[keys[currentProduct]];
  return (
    <div className="App">
      <ImageGallery>
        {/*// @ts-ignore*/}
        {x.dalle_images.map((photo) => {
          return <img src={photo} alt="tmp" />;
        })}
      </ImageGallery>
      <ProductDescriptionWrapper>
        <ProductTitle>{x.compliant_title}</ProductTitle>
        <LongDescription
          dangerouslySetInnerHTML={{ __html: x.compliant_long_desc }}
        />
      </ProductDescriptionWrapper>
      <ButtonWrapper>
        <GoodButton
          onClick={() => {
            setCurrentProduct(currentProduct + 1);
          }}
        >
          Good 👍
        </GoodButton>
        <BadButton
          onClick={() => {
            setCurrentProduct(currentProduct + 1);
          }}
        >
          Bad 👎
        </BadButton>
      </ButtonWrapper>
    </div>
  );
}

export default App;
