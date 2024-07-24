import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { School } from "@mui/icons-material";
import { Element } from "react-scroll";
function Experience() {
  return (
    <Element id="education">
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
         SSLC
          </h3>
          <p> Syed Ammal Matric Hr,Sec,School,
           Ramanathapuram-623501.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
          HSC
          </h3>
          <p> Syed Ammal Matric Hr,Sec,School,
           Ramanathapuram-623501.</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<School /> }
        >
          <h3 className="vertical-timeline-element-title">
            B.E.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           COMPUTER SCIENCE AND ENGINEERING
          </h4>
          <p>SNS College of Technology,
            Coimbatore-641035.
          </p>
        </VerticalTimelineElement>

        
      </VerticalTimeline>
    </div>
    </Element>
  );
}

export default Experience;
