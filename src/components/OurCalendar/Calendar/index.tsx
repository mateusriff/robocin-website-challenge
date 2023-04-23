import { CalendarWrapper, Timeline, StyledEvent, StyledDot } from "./style";

const eventList = [
    {
        event: "Robocup 2023",
        month: "Julho",
    },
    {
        event: "LARS, LARC 2023",
        month: "Outubro",
    },
]

const Calendar = () => {
    return(
        <CalendarWrapper>
            <h2>2023</h2>
            <Timeline>
                {eventList.map((event) => ( 
                    <StyledEvent>                    
                        <h2>{event.month}</h2>
                        <StyledDot/>
                        <p>{event.event}</p>
                    </StyledEvent>                   
                ))}
            </Timeline>
            <h2>2024</h2>
        </CalendarWrapper>
    );
};

export default Calendar;