import moment from "moment";
import { FC } from "react";

export interface SingleLiveStreamItem {
    preacher: string, 
    datetime: string, 
    videoUrl: string,
    title: string,
    id: number,
    views: number,
};

const LiveStreamItem:FC<SingleLiveStreamItem> = (data: SingleLiveStreamItem) => {
    const {datetime, id, preacher, title, videoUrl} = data;
    const readDatetime = moment(datetime).format('DD MMM. yyyy');
    return (
        <div className="row" style={{marginBottom: '2rem'}}>
            <div className="column first">
                <video src={videoUrl}></video>
            </div>
            <div className="column second">
                <div className="title">{title}</div>
                {/* <div className="preacher">{preacher}</div> */}
                <div className="date">{readDatetime}</div>
            </div>
        </div>
    );
}

export default LiveStreamItem;