import styled from "styled-components"

export const Wrapper = styled.div`
  transition: all 0.3s;
  .error-notice {
    margin: 5px; /* Make sure to keep some distance from all sides */
  }

  .oaerror {
    width: 100%;
    background-color: #ffffff;
    padding: 1rem;
    border: 1px solid #eee;
    border-left-width: 5px;
    border-radius: 3px;
    margin: 1rem auto;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
  }

  .danger {
    border-left-color: #d9534f; /* Left side border color */
    background-color: rgba(
      217,
      83,
      79,
      0.1
    ); /*Same color as the left border with reduced alpha to 0.1*/
  }

  .danger strong {
    color: #d9534f;
  }

  .warning {
    border-left-color: #f0ad4e;
    background-color: rgba(240, 173, 78, 0.1);
  }

  .warning strong {
    color: #f0ad4e;
  }

  .info {
    border-left-color: #5bc0de;
    background-color: rgba(91, 192, 222, 0.1);
  }

  .info strong {
    color: #5bc0de;
  }

  .success {
    border-left-color: #2b542c;
    background-color: rgba(43, 84, 44, 0.1);
  }

  .success strong {
    color: #2b542c;
  }
`
