import { BranchItemDTO } from "./dto/Branch.dto";
import DonateItemDTO from "./dto/Donate.dto";

export const BranchesModel: BranchItemDTO[] = [
    {
        description: "24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Ikeja, Lagos ",
        timers: [
            new Date(),
            new Date(),
            new Date(),
            new Date(),
        ],
        title: "Kingdom ways (ikeja)",
        id: 3,
        image: "/images/branches-hero-image.jpg",
        leadPastor: "Faith chukwu",
        favVerse: "In Matthew, Jesus said to peter fear not just follow me and I will make\nyou… One major assignment of Jesus Christ through His church is the Making of great destinies.",
        location: "24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Ikeja, Lagos",
        phoneNo: [
            "+234 9054 676 9883",
            "+013 0993009384"
        ],
    },
    {
        description: "24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Ikeja, Lagos ",
        timers: [
            new Date(),
            new Date(),
            new Date(),
            new Date(),
        ],
        title: "Kingdom ways (Lekki)",
        id: 2,
        image: "/images/branches-hero-image.jpg",
        leadPastor: "chukwu Faith",
        favVerse: "In Matthew, Jesus said to peter fear not just follow me and I will make\nyou… One major assignment of Jesus Christ through His church is the Making of great destinies.",
        location: "24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Ikeja, Lagos",
        phoneNo: [
            "+234 9054 676 9883",
            "+013 0993009384"
        ],
    },
    {
        description: "24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Ikeja, Lagos ",
        timers: [
            new Date(),
            new Date(),
            new Date(),
            new Date(),
        ],
        title: "Kingdom ways (Aja)",
        id: 1,
        image: "/images/branches-hero-image.jpg",
        leadPastor: "Faith Faith",
        favVerse: "In Matthew, Jesus said to peter fear not just follow me and I will make\nyou… One major assignment of Jesus Christ through His church is the Making of great destinies.",
        location: "24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Ikeja, Lagos",
        phoneNo: [
            "+234 9054 676 9883",
            "+013 0993009384"
        ],
    },  
];

export const DonationsModel: DonateItemDTO[] = [
    {
        title: "Build church school",
        description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationullamo laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/images/church-schools.png",
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
        image: "/images/church-building.jpg",
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
]