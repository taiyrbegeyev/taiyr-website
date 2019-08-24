import React, { Component } from 'react'
import {
  Grid, Card, CardMedia,
  CardContent, CardActions, Typography,
  Button
} from '@material-ui/core'
import { Badge } from './styles'

class ProjectCard extends Component {
  render() {
    const { name, description, link, imageUrl, technologies } = this.props
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            style={{paddingTop: '56.25%'}}
            image={imageUrl}
            title="Image title"
          />
          <CardContent style={{flexGrow: 1}}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography>
              {description}
            </Typography>
            <Typography>
              {
                technologies.map(key =>
                  <Badge
                    label={key}
                    color="secondary"
                  />
                )
              }
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={link} target="_blank">
              View Source Code
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

export default ProjectCard
