export class BlogDTO {
    public constructor(init?:Partial<BlogDTO>) {
        Object.assign(this, init);
    }
    
    title: string;
    by: string;
    description: string;
    itemType: string;
    id: number;
    date: Date;
    image: string;
    href: string = "";
}

export class BlogAudioDTO extends BlogDTO {
    public constructor(init?:Partial<BlogAudioDTO>) {
        super(init);
        Object.assign(this, init);
    }
    
    timerStart: string;
    timerEnd: string;
    timerCurrent: string;
}

export class BlogItemDTO {
    public constructor(init?:Partial<BlogItemDTO>) {
        Object.assign(this, init);
    }
    
    id: number;
    title: string;
    message: string;
    blogCategory: string;
    authorName: string;
    aboutAuthor: string;
    dateCreated: string;
    blogImages: BlogItemImageDTO[];
    tags: string[];
}

export class BlogItemImageDTO {
    public constructor(init?:Partial<BlogItemImageDTO>) {
        Object.assign(this, init);
    }
    
    id: number;
    imageUrl: string;
}