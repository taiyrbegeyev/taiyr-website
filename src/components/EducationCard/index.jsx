import React, { Component } from 'react'
import {
  EducationWrapper, UniImage, EducationInfoSection,
  EducationTitle, BasicInfoSection, IconAndTextContainer,
  IconText
} from './styles'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import DateRangeIcon from '@material-ui/icons/DateRange'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { Typography } from '@material-ui/core'
import jacobs from 'assets/jacobs.jpg'
import { education } from 'config/text'

class EducationCard extends Component {
  render() {
    return (
      <EducationWrapper>
        <UniImage imageUrl={jacobs} />
        <EducationInfoSection>
          <EducationTitle>{education[0].university}</EducationTitle>
          <BasicInfoSection>
            <IconAndTextContainer>
              <LocationOnIcon />
              <IconText>{education[0].location}</IconText>
            </IconAndTextContainer>
            <IconAndTextContainer>
              <DateRangeIcon />
              <IconText>{education[0].date}</IconText>
            </IconAndTextContainer>
          </BasicInfoSection>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>First Year Courses</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <ul>
                  {
                    education[0].courses.year_1.map(key => 
                      <li>{key}</li>
                    )
                  }
                </ul>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Second Year Courses</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <ul>
                  {
                    education[0].courses.year_2.map(key => 
                      <li>{key}</li>
                    )
                  }
                </ul>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </EducationInfoSection>
      </EducationWrapper>
    )
  }
}

export default EducationCard
