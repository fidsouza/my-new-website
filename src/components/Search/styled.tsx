import styled from "styled-components"

export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
  }
  .ais-SearchBox {
    padding-top: 6rem;
  }
  .ais-Stats {
    color: var(--texts);
  }
  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid #38444d;
    color: var(--texts);
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
      color: var(--texts);

    }
    :focus::-webkit-input-placeholder {
        opacity: 0;
       transform: translate(70%);
       -webkit-transition: all 0.35s ease-in-out;
       transition: all 0.45s ease-in-out;
       color:var(--white);
    }


  }
  label {

}
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`