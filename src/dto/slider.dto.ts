export class SliderDTO {
    public constructor(init?:Partial<SliderDTO>) {
        Object.assign(this, init);
    }
    id: number;
    type: string;
    isDynamic: boolean;
    dateCreated: string;
    sliderImages: [];
          
}
export class SliderItemDTO {
    public constructor(init?:Partial<SliderItemDTO>) {
        Object.assign(this, init);
    }
    id: number;
    url: string;
    hasText: boolean;
    text: string;
    textColor: string;
    hasButton: true;
    bottonUrl: string;
    buttomName: string;
    isDynamic: boolean;
    dateCreated: string;
}