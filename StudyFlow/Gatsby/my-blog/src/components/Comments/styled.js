import styled from "styled-components"

export const CommentsWrapper = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 3rem 6.4rm 3rem;

  iframe[src*="ads-iframe"] {
    display: none/;
  }

  #disqus_thread {
    a {
      color: var(--highlight) !important;
    }
  }
`

export const CommentsTitle = styled.h2`
  color: #fff;
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;
`
