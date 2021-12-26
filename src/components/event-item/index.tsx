import { FC } from "react";
import moment from 'moment';

export interface SingleEventItem {
    bgImage: string, 
    startDatetime: Date, 
    endDatetime: Date,
    datetimeCurrentRange: Date,
    location: string,
    subText: string,
    locationTitle: string,
    title: string,
};

const EventItem:FC<SingleEventItem> = (data: SingleEventItem) => {
    const {bgImage, startDatetime, endDatetime, datetimeCurrentRange, location, subText, locationTitle, title} = data;
    
    return (
        <div className="list_col grid">
            <div className="post_col" style={{backgroundImage: `url('${bgImage}')`, backgroundSize: "cover"}}>
                <h5><span className="content_date">Price: Free</span></h5>
            </div>

            <div className="list_text">
                <h3 className="section_subtitle">
                    {title}
                </h3>

                <div className="col">
                    <span><i className="fa fa-calendar" aria-hidden="true"></i></span>
                    <p>{moment(startDatetime).format("DD.MM.yy")}.</p>
                </div>
                <div className="col">
                    <span><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                    <p>{moment(startDatetime).format("hh:mm a")} -  {moment(endDatetime).format("hh:mm a")}</p>
                </div>
                <div className="col">
                    <span><i className="fa fa-home" aria-hidden="true"></i></span>
                    <p style={{textTransform: "uppercase"}}>{locationTitle}</p>
                </div>
                <div className="col">
                    <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                    <p>{location}</p>
                </div>
                <div className="col">
                    <p>{subText}</p>
                </div>
                <div className="col">
                    <div className="read_more">
                        <div className="line_bar"></div>
                        <h5>Read More</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EventItem;