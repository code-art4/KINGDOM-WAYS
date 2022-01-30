import { SingleEventItem } from "./components/event-item";
import { BlogAudioDTO, BlogDTO } from "./dto/Blog.dto";
import { BranchItemDTO, BranchMediaDTO } from "./dto/Branch.dto";
import DonateItemDTO from "./dto/Donate.dto";
import { LiveStreamDTO } from "./dto/LiveStream.dto";
import ShopItemDTO from "./dto/ShopItem.dto";
import UserDTO from "./dto/User.dto";

export let BranchesModel: BranchItemDTO[] = [
    {
        description: "24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Ikeja, Lagos ",
        timers: [
            {
                id: 1,
                day: "Wednesday",
                time: "10:00 AM"
            },
            {
                id: 2,
                day: "Wednesday",
                time: "11:00 AM"
            },
        ],
        title: "Kingdom ways (ikeja)",
        id: 3,
        image: new BranchMediaDTO(
            {
                url:"/images/branches-hero-image.jpg",
                createdBy: "1",
                dateCreated: new Date().toISOString(),
                description: "",
                platform: "outube stream",
                id: 1,
                title: "OUTPOURING of grace",

            }
        ),
        leadPastor: "Faith chukwu",
        favVerse: "In Matthew, Jesus said to peter fear not just follow me and I will make\nyou… One major assignment of Jesus Christ through His church is the Making of great destinies.",
        location: "24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Ikeja, Lagos",
        phoneNo: [
            "+234 9054 676 9883",
            "+013 0993009384"
        ],
        images: [
            new BranchMediaDTO(
                {
                    url:"/images/branches-hero-image.jpg",
                    createdBy: "1",
                    dateCreated: new Date().toISOString(),
                    description: "",
                    platform: "outube stream",
                    id: 1,
                    title: "OUTPOURING of grace",
    
                }
            ),
            new BranchMediaDTO(
                {
                    url:"/images/branches-hero-image.jpg",
                    createdBy: "1",
                    dateCreated: new Date().toISOString(),
                    description: "",
                    platform: "outube stream",
                    id: 1,
                    title: "OUTPOURING of grace",
    
                }
            ),
            new BranchMediaDTO(
                {
                    url:"/images/branches-hero-image.jpg",
                    createdBy: "1",
                    dateCreated: new Date().toISOString(),
                    description: "",
                    platform: "outube stream",
                    id: 1,
                    title: "OUTPOURING of grace",
    
                }
            )
        ],
        raised: 0,
        target: 0,
    },
    {
        description: "24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Ikeja, Lagos ",
        timers: [
            {
                id: 1,
                day: "Wednesday",
                time: "10:00 AM"
            },
            {
                id: 2,
                day: "Wednesday",
                time: "11:00 AM"
            },
        ],
        title: "Kingdom ways (Lekki)",
        id: 2,
        image: new BranchMediaDTO(
            {
                url:"/images/branches-hero-image.jpg",
                createdBy: "1",
                dateCreated: new Date().toISOString(),
                description: "",
                platform: "outube stream",
                id: 1,
                title: "OUTPOURING of grace",

            }
        ),
        leadPastor: "chukwu Faith",
        favVerse: "In Matthew, Jesus said to peter fear not just follow me and I will make\nyou… One major assignment of Jesus Christ through His church is the Making of great destinies.",
        location: "24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Ikeja, Lagos",
        phoneNo: [
            "+234 9054 676 9883",
            "+013 0993009384"
        ],
        images: [
            new BranchMediaDTO(
                {
                    url:"/images/branches-hero-image.jpg",
                    createdBy: "1",
                    dateCreated: new Date().toISOString(),
                    description: "",
                    platform: "outube stream",
                    id: 1,
                    title: "OUTPOURING of grace",
    
                }
            ),
            new BranchMediaDTO(
                {
                    url:"/images/branches-hero-image.jpg",
                    createdBy: "1",
                    dateCreated: new Date().toISOString(),
                    description: "",
                    platform: "outube stream",
                    id: 1,
                    title: "OUTPOURING of grace",
    
                }
            ),
            new BranchMediaDTO(
                {
                    url:"/images/branches-hero-image.jpg",
                    createdBy: "1",
                    dateCreated: new Date().toISOString(),
                    description: "",
                    platform: "outube stream",
                    id: 1,
                    title: "OUTPOURING of grace",
    
                }
            )
        ],
        raised: 10000,
        target: 100000,
    },
    {
        description: "24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Ikeja, Lagos ",
        timers: [
            {
                id: 1,
                day: "Wednesday",
                time: "10:00 AM"
            },
            {
                id: 2,
                day: "Wednesday",
                time: "11:00 AM"
            },
        ],
        title: "Kingdom ways (Aja)",
        id: 1,
        image: new BranchMediaDTO(
            {
                url:"/images/branches-hero-image.jpg",
                createdBy: "1",
                dateCreated: new Date().toISOString(),
                description: "",
                platform: "outube stream",
                id: 1,
                title: "OUTPOURING of grace",

            }
        ),
        leadPastor: "Faith Faith",
        favVerse: "In Matthew, Jesus said to peter fear not just follow me and I will make\nyou… One major assignment of Jesus Christ through His church is the Making of great destinies.",
        location: "24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Ikeja, Lagos",
        phoneNo: [
            "+234 9054 676 9883",
            "+013 0993009384"
        ],
        images: [
            new BranchMediaDTO(
                {
                    url:"/images/branches-hero-image.jpg",
                    createdBy: "1",
                    dateCreated: new Date().toISOString(),
                    description: "",
                    platform: "outube stream",
                    id: 1,
                    title: "OUTPOURING of grace",
    
                }
            ),
            new BranchMediaDTO(
                {
                    url:"/images/branches-hero-image.jpg",
                    createdBy: "1",
                    dateCreated: new Date().toISOString(),
                    description: "",
                    platform: "outube stream",
                    id: 1,
                    title: "OUTPOURING of grace",
    
                }
            ),
            new BranchMediaDTO(
                {
                    url:"/images/branches-hero-image.jpg",
                    createdBy: "1",
                    dateCreated: new Date().toISOString(),
                    description: "",
                    platform: "outube stream",
                    id: 1,
                    title: "OUTPOURING of grace",
    
                }
            )
        ],
        raised: 59020,
        target: 100,
    },  
];

export let DonationsModel: DonateItemDTO[] = [
    {
        title: "Build church school",
        description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationullamo laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/images/build-church-schools.jpg",
        id: 1,
        images: [
            "/images/project-1.jpg",
            "/images/project-2.jpg",
            "/images/project-2.jpg",
            "/images/project-1.jpg",
        ],
        raised: 2300000,
        target: 4300000,
    },
    {
        title: "Church building project",
        description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationullamo laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/images/build-church-schools.jpg",
        id: 2,
        images: [
            "/images/project-1.jpg",
            "/images/project-2.jpg",
            "/images/project-2.jpg",
            "/images/project-1.jpg",
        ],
        target: 2300000,
        raised: 4300000,
    },
    {
        title: "Hospital building project",
        description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationullamo laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/images/church-building.jpg",
        id: 3,
        images: [
            "/images/project-1.jpg",
            "/images/project-2.jpg",
            "/images/project-2.jpg",
            "/images/project-1.jpg",
        ],
        target: 2300000,
        raised: 5000000,
    }
];

export let ShopItemsModel: ShopItemDTO[] = [
    {
      img: "/images/product-5-600x772.png",
      title: "LISTEN BELIEVE",
      price: 150,
      id: 1,
      copies: 500,
      images: [
        "/images/product-5-600x772.png",
        "/images/product-5-600x772.png",
        "/images/product-5-600x772.png",
        "/images/product-5-600x772.png",
        "/images/product-5-600x772.png",
      ],
      description: " Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ",
      information: [
        {
            key: "Weight",
            value: "2Kg"
        },
        {
            key: "Height",
            value: "2 Ft"
        },
        {
            key: "DIMENTION",
            value: "25 x 15 x15 mm"
        },
    ],
    },
    {
        img: "/images/product-5-600x772.png",
        title: "LISTEN BELIEVE Vol 2",
        price: 250,
        id: 2,
        copies: 300,
        images: [
            "/images/product-5-600x772.png",
            "/images/product-5-600x772.png",
            "/images/product-5-600x772.png",
            "/images/product-5-600x772.png",
            "/images/product-5-600x772.png",
            "/images/product-5-600x772.png",
        ],
        description: " Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ",
        information: [
            {
                key: "Weight",
                value: "2Kg"
            },
            {
                key: "DIMENTION",
                value: "25 x 15 x15 mm"
            },
        ],
    },
    {
        img: "/images/product-5-600x772.png",
        title: "LISTEN BELIEVE Vol 3",
        price: 250,
        id: 3,
        copies: 150,
        images: [
            "/images/product-5-600x772.png",
            "/images/product-5-600x772.png",
            "/images/product-5-600x772.png",
            "/images/product-5-600x772.png",
            "/images/product-5-600x772.png",
        ],
        description: " Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ",
        information: [
            {
                key: "Weight",
                value: "1Kg"
            },
            {
                key: "DIMENTION",
                value: "15 x 15 x15 mm"
            },
        ],
    },

];

export let EventData: SingleEventItem[] = [
    {
        bgImage:"/images/pexels-luis.png",
        location:"24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Osapa London,Lagos",
        subText:"Dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
        locationTitle:"Kingdom Ways Living Church",
        title:"Youth Empowerment Program",
        startDatetime:new Date(),
        endDatetime:new Date(), 
        datetimeCurrentRange: new Date(),
        id: 1,
    },
    {
        bgImage:"/images/pexels-luis.png",
        location:"24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Osapa London,Lagos",
        subText:"Dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
        locationTitle:"Kingdom Ways Living Church",
        title:"Youth Empowerment Program",
        startDatetime:new Date(),
        endDatetime:new Date(), 
        datetimeCurrentRange: new Date(),
        id: 2,
    }
];

export let BlogData: BlogDTO[] = [
    {
        title: "Christmas day",
        by: "By Green onwn",
        description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        itemType: "text",
        id: 1,
        date: new Date(),
        image: "/images/pexels-josh-sorenson.png",
        href: "",
    },
    new BlogAudioDTO ({
        title: "Christmas day",
        by: "By Green onwn",
        description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        itemType: "audio",
        id: 2,
        image: "/images/pexels-josh-sorenson.png",
        date: new Date(),
        timerStart: "",
        timerEnd: "",
        timerCurrent: "",
    }),
    {
        title: "Christmas day",
        by: "By Green onwn",
        description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        itemType: "simple",
        id: 3,
        image: "/images/pexels-any-lane.png",
        date: new Date(),
        href: "",
    },
    {
        title: "Christmas day",
        by: "By Green onwn",
        description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        itemType: "text",
        id: 4,
        date: new Date(),
        image: "/images/pexels-josh-sorenson.png",
        href: "",
    },
    new BlogAudioDTO ({
        title: "Open Prayer",
        by: "Listen to the audio",
        description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        itemType: "audio",
        id: 5,
        image: "/images/pexels-josh-sorenson.png",
        date: new Date(),
        timerStart: "0:00",
        timerEnd: "5:23",
        timerCurrent: "",
    }),
    {
        title: "Easter Sunday",
        by: "By Green onwn",
        description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        itemType: "simple",
        id: 6,
        image: "/images/pexels-any-lane.png",
        date: new Date(),
        href: "",
    },
];

export let LiveStreamData: LiveStreamDTO[] = [
    {
        dateOfStream: "2021-12-25T00:00:00",
        description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.",
        title: "Sunday Service with Pastor Ken Nbachi",
        isActive: true,
        liveStreamUrl: "https://files.goveratech.com/vlc_record_2021_10_02.mp4",
        id: 1,
        views: 140.2,
        preacher: "KWLC Pastor",
    },
    {
        dateOfStream: "2021-12-25T00:00:00",
        description: "Listen to pastor AA as he outpours the word Part II",
        title: "OUTPOURING OF THE SPIRIT",
        isActive: true,
        liveStreamUrl: "https://files.goveratech.com/vlc_record_2021_10_02.mp4",
        id: 2,
        views: 40.2,
        preacher: "KWLC Pastor",
    },
    {
        dateOfStream: "2021-12-25T00:00:00",
        description: "Listen to pastor AA as he outpours the word Part III",
        title: "OUTPOURING OF THE SPIRIT",
        isActive: true,
        liveStreamUrl: "https://files.goveratech.com/vlc_record_2021_10_02.mp4",
        id: 3,
        views: 14.2,
        preacher: "KWLC Pastor",
    },
    {
        dateOfStream: "2021-12-25T00:00:00",
        description: "Listen to pastor AA as he outpours the word Part IV",
        title: "OUTPOURING OF THE SPIRIT",
        isActive: true,
        liveStreamUrl: "https://files.goveratech.com/vlc_record_2021_10_02.mp4",
        id: 4,
        views: 10.2,
        preacher: "KWLC Pastor",
    },
    {
        dateOfStream: "2021-12-25T00:00:00",
        description: "Listen to pastor AA as he outpours the word Part V",
        title: "OUTPOURING OF THE SPIRIT",
        isActive: true,
        liveStreamUrl: "https://files.goveratech.com/vlc_record_2021_10_02.mp4",
        id: 5,
        views: 0,
        preacher: "KWLC Pastor",
    },
];

export let UserData: UserDTO[] = [
    {
        id: 2,
        firstName: "RalphTest",
        lastName: "RalTest",
        username: "SelfTest",
        emailAddress: "self@gmail.com",
        address: "Plot 213",
        email: "nolly190@gmail.com",
    },
    {
        id: 1,
        firstName: "Nonso Test",
        lastName: "UdenwaniTest",
        username: "NollyTest",
        emailAddress: "nolly190@gmail.com",
        address: "Plot 123",
        email: "nolly190@gmail.com",
    },
];