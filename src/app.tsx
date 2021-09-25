import styled, { css } from 'styled-components/macro'

export function App () {
  return (
    <Main>
      <header>
        <h1>Working</h1>
      </header>
      <h2>25:00</h2>

      <section>
        <header>
          <h3>Activities</h3>
          <h3>Next</h3>
        </header>
      </section>

      <section>
        <header>
          <h3>Actions</h3>
        </header>
        <button>Pause</button>
        <button>Reset</button>
      </section>
    </Main>
  )
}

const Main = styled.main`${({ theme }) => css`
  background: ${theme.colors.background};
  grid-template-areas:
    'header'
    'timer'
    'animation'
    'activities'
    'actions'
  ;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    grid-template-areas:
      'animation' 'header'
      'animation' 'timer'
      'animation' 'activities'
      'animation' 'actions'
    ;
  }
`}`
