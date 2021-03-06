import styled from 'styled-components';

const ErrorMssg = styled.div`
  color:var(--lightGrey);
  text-align:center;
  visibility:${({visible})=>visible ? ("visible") : ("hidden")};

  @media(min-width: 200px)
  {
    font-size:3.3vw;
    width:90%;
    padding:2vw 0;
    margin: ${({underButton})=>underButton ? ('0') : ('0 0 3vw 0')};
  }

  @media(min-width: 576px)
  {
    font-size:3.1vw;
    margin: ${({underButton})=>underButton ? ('0') : ('0 0 2vw 0')};
  }

  @media(min-width: 768px)
  {
    font-size:2.3vw;
    padding:2vw 0;
    margin: ${({underButton})=>underButton ? ('0') : ('0 0 2vw 0')};
  }

  @media(min-width: 992px)
  {
    font-size:2vw;
    padding:1.5vw 0;
    margin: ${({underButton})=>underButton ? ('0') : ('0 0 2vw 0')};
  }

  @media(min-width: 1200px)
  {
    font-size:1.5vw;
    padding:1vw 0;
  }

  @media(min-width: 1600px)
  {
    font-size:1vw;
    width:90%;
    padding:.5vw 0;
  }
`;

export default ErrorMssg;
