import {Component} from "react";
import {TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220615 Initial creation.
 */
class Experience extends Component<ExperienceProps> {
    constructor(props: ExperienceProps) {
        super(props);

        this.state = {value: ''};
    }

    render() {
        let connector = this.props.isEndOfTimeline ? null : <TimelineConnector/>;

        return <TimelineItem>
            <TimelineSeparator>
                <TimelineDot/>
                {connector}
            </TimelineSeparator>
            <TimelineContent className="text-white"><h4>{this.props.companyName}</h4></TimelineContent>
        </TimelineItem>
    }
}

interface ExperienceProps {
    companyName: string
    isEndOfTimeline?: boolean
}

export {Experience};