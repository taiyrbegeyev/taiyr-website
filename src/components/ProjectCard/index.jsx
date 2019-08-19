import React, { Component } from 'react'
import {
  Grid, Card, CardMedia,
  CardContent, CardActions, Typography,
  Button
} from '@material-ui/core'

class ProjectCard extends Component {
  render() {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            style={{paddingTop: '56.25%'}}
            image='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            title="Image title"
          />
          <CardContent style={{flexGrow: 1}}>
            <Typography gutterBottom variant="h5" component="h2">
              Heading
            </Typography>
            <Typography>
              This is a media card. You can use this section to describe the content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
            <Button size="small" color="primary">
              Edit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

export default ProjectCard