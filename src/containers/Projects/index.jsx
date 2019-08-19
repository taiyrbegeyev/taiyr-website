import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import { ProjectsContainer } from './styles'
import ProjectCard from 'components/ProjectCard'

const theme = createMuiTheme({
  typography: {
    // Account for base font-size of 62.5%.
    htmlFontSize: 10,
  }
});

class Projects extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <ProjectsContainer id="projects">
          <Container maxWidth="md">
            <Grid container spacing={4}>
              <ProjectCard />
            </Grid>
          </Container>
        </ProjectsContainer>
      </MuiThemeProvider>
    )
  }
}

export default Projects
