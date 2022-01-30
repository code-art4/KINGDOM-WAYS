import moment from "moment";
import { getLiveStreamsApi } from "../api/livestream";
import { LiveStreamDTO } from "../dto/LiveStream.dto";
import { LiveStreamData } from "../testModel";
import { fakeModel } from "../utils";


export async function loadLiveStreamWeb(setItems: Function, setItem: Function) {
    if (fakeModel) {
        let items: LiveStreamDTO[] = LiveStreamData;
        if (items.length > 0) {
            
            // items = items.map(x => {
            //     x.dateOfStream  = x.dateOfStream;
            //     //x.dateOfStream = moment(new Date(x.dateOfStream)).format('DD MMM. yyyy');
                
            //     return x;
            // });
            
            setItem(items.length > 0 ? items[0]: new LiveStreamDTO());
            setItems(items.length > 0 ? Object.assign([], items.slice(1, 4)) : []);
        }
        else {}
    }
    else {
        const items = await getLiveStreamsApi();
        let data: LiveStreamDTO[] = items.data;
        
        setItem(data.length > 0 ? data[0]: new LiveStreamDTO());
        setItems(data.length > 0 ? data.slice(1, 4): []);
    }
}

export async function loadPreviousLiveStreamWeb(setItems: Function) {
    if (fakeModel) {
        let items: LiveStreamDTO[] = LiveStreamData;
        if (items.length > 0) {
            setItems(items.length > 0 ? items.slice(1): []);
        }
        else {}
    }
    else {
        let items = await getLiveStreamsApi();
        let data: LiveStreamDTO[] = items.data;
        
        setItems(data.length > 0 ? data.slice(1): []);
    }
}