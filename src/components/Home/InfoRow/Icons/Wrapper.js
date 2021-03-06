import styled from 'styled-components';

const Wrapper = styled.div`
  img{
    height:auto;
  }

  display:flex;
  justify-content:space-around;

  @media(min-width: 200px)
  {
    img{
      width:11vw;
      height:auto;
    }
    padding:3.25vw 0;
  }

  @media(min-width: 576px)
  {
    img{
      width:9vw;
      height:auto;
    }
    padding:3vw 0;
  }


  @media(min-width: 768px)
  {
    img{
      width:7vw;
      height:auto;
    }
    padding:2vw 0;
  }

  @media(min-width: 992px)
  {
    img{
      width:5vw;
      height:auto;
    }
    padding:1.5vw 0;
  }

  @media(min-width: 1200px)
  {
    img{
      width:4vw;
      height:auto;
    }
    padding:.75vw 0;
  }

  @media(min-width: 1600px)
  {
    img{
      width:3vw;
      height:auto;
    }
  }
`;

export default Wrapper;
