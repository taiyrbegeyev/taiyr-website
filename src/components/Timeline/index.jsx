import React, { Component } from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'
import { Anchor } from './styles'

class TimeLine extends Component {
  render() {
    return (
      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="001"
          dateText="09/2019 - 12/2019"
          style={{ color: '#e86971' }}
        >
          <h3 style={{ color: '#e86971' }}>Teaching Assistant, Jacobs University Bremen</h3>
          <h4>Programming in C and C++</h4>
          <br/>
          <ul>
            <li>Coordinate instructional efforts with professor</li>
            <li>Tutor students and assist with assignments and imperative and object-oriented programming concepts</li>
            <li>Monitor students during class work and exams</li>
            <li>Provide assistant to professor in terms of preparing lesson outlines</li>
          </ul>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="06/2019 – 09/2019"
          dateInnerStyle={{ background: '#61b8ff' }}
          style={{ color: '#61b8ff' }}
        >
          <h3 style={{ color: '#61b8ff' }}>Full-Stack Developer Intern, Medikura</h3>
          <h4><Anchor target="_blank" href="https://www.medikura.com/en/">medikura.com</Anchor></h4>
          <br/>
          <ul>
            <li>Develop the platform for reporting side effects of drugs</li>
            <li>Create the platform for pharmaceutical companies in order to see all the reports their customers send</li>
          </ul>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="08/2008 – 11/2008"
          dateInnerStyle={{ background: '#76bb7f' }}
        >
          <h3>Title, Company</h3>
          <h4>Subtitle</h4>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
        </TimelineItem>
      </Timeline>
    )
  }
}

export default TimeLine
