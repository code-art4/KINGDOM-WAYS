import moment from "moment";

export const fakeModel = true;

export function getParam(name: any): string {
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(window.location.search))
        return decodeURIComponent(name[1]);
}

export function mmFormat(datetime: Date, format: string = "hh:mm a"): string{
    
    return moment(datetime).format(format);
}