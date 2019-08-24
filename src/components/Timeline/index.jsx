import React, { Component } from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'
import { Anchor } from './styles'
import { experience } from 'config/text'

class TimeLine extends Component {
  render() {
    return (
      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="001"
          dateText={experience.teaching_assistant.date}
          style={{ color: '#e86971' }}
        >
          <h3 style={{ color: '#e86971' }}>{experience.teaching_assistant.title}</h3>
          <h4>{experience.teaching_assistant.subtitle}</h4>
          <br/>
          <ul>
            {
              experience.teaching_assistant.description.map(key =>
                <li>{key}</li>  
              )
            }
          </ul>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText={experience.medikura.date}
          dateInnerStyle={{ background: '#61b8ff' }}
          style={{ color: '#61b8ff' }}
        >
          <h3 style={{ color: '#61b8ff' }}>{experience.medikura.title}</h3>
          <h4><Anchor target="_blank" href={experience.medikura.subtitle}>medikura.com</Anchor></h4>
          <br/>
          <ul>
            {
              experience.medikura.description.map(key =>
                <li>{key}</li>  
              )
            }
          </ul>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText={experience.method.date}
          dateInnerStyle={{ background: '#76bb7f' }}
          style={{ color: '#76bb7f' }}
        >
          <h3 style={{ color: '#76bb7f' }}>{experience.method.title}</h3>
          <h4>{experience.method.subtitle}</h4>
          <br />
          <ul>
            {
              experience.method.description.map(key =>
                <li>{key}</li>  
              )
            }
          </ul>
        </TimelineItem>
      </Timeline>
    )
  }
}

export default TimeLine
