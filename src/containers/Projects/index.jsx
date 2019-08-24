import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import { ProjectsContainer } from './styles'
import ProjectCard from 'components/ProjectCard'
import { projects } from 'config/text'
import trump_bot from 'assets/trump_bot.jpg'
import weather_app from 'assets/weather_app.png'
import campus_life from 'assets/jstore.png'
import browser_control from 'assets/browser_control.png'

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
              <ProjectCard
                name={projects.trump_bot.name}
                description={projects.trump_bot.description}
                link={projects.trump_bot.link}
                imageUrl={trump_bot}
                technologies={['Express.js', 'REST API']}
              />
              <ProjectCard
                name={projects.weather_app.name}
                description={projects.weather_app.description}
                link={projects.weather_app.link}
                imageUrl={weather_app}
                technologies={['ReactJS', 'Bootstrap', 'REST API']}
              />
              <ProjectCard
                name={projects.campus_life.name}
                description={projects.campus_life.description}
                link={projects.campus_life.link}
                imageUrl={campus_life}
                technologies={['Express.js', 'TypeScript', 'MySQL', 'REST API']}
              />
              <ProjectCard
                name={projects.browser_control.name}
                description={projects.browser_control.description}
                link={projects.browser_control.link}
                imageUrl={browser_control}
                technologies={['C/C++', 'Python']}
              />
            </Grid>
          </Container>
        </ProjectsContainer>
      </MuiThemeProvider>
    )
  }
}

export default Projects
