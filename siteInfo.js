// Table of Contents:
// 1. Meta
// 2. Layout
// 3. Home
// 4. Services
// 5. Projects
// 6. Studio
// 7. About
// 8. Social Media
// 9. The Process
// 10. Contact

import lightTheme from "./styles/themes/lightTheme";

// 1. Meta

const siteName = "ARTIST PORTFOLIO";

const pages = [
    { name: siteName, href: "/" },
    { name: "GALLERIES", href: "/projects" },
    { name: "THE PROCESS", href: "/process" },
    // { name: "SERVICES", href: "/services" },
    { name: "ABOUT", href: "/studio" },
    { name: "CONTACT", href: "/contact" },
];

// 2. Layout

const navbar = {
    buttonOne: {
        text: "Contact",
        href: "/contact",
        variant: "outlined",
    },
};

const header = {
    buttonOne: {
        text: "Contact",
        href: "/contact",
        variant: "outlined",
    },
};
// 3. Home

const heroContent = {
    image: { url: "/images/hero4.webp", alt: "alt hero text" },
    primaryText: "ARTIST PORTFOLIO TEMPLATE",
    secondaryText: "Created by FictionalWeb.com",
    buttonOne: {
        variant: "contained",
        href: "/projects",
        text: "View Galleries",
    },
};

const servicesContent = [
    {
        title: "Service One",
        price: "$200",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/hero.webp", alt: "alt hero text" },
        button: { text: "Book Now!", href: "/contact" },
        features: [
            {
                primaryText: "Feature One",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Two",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Three",
                secondaryText: "Feature Description",
            },
        ],
    },
    {
        title: "Service Two",
        price: "$400-800",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/hero.webp", alt: "alt hero text" },
        button: { text: "Book Now!", href: "/contact" },
        features: [
            {
                primaryText: "Feature One",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Two",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Three",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Four",
                secondaryText: "Feature Description",
            },
        ],
    },
    {
        title: "Service Three",
        price: "Custom",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/hero.webp", alt: "alt hero text" },
        button: { text: "Book Now!", href: "/contact" },
        features: [
            {
                primaryText: "Feature One",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Two",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Three",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Four",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Five",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Six",
                secondaryText: "Feature Description",
            },
        ],
    },
];

const blockTextOne = {
    backgroundColor: "white",
    title: "BLOCK TEXT ONE",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimo!",
};
const blockTextTwo = {
    backgroundColor: "white",
    title: "BLOCK TEXT TWO",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimo!",
};
const blockTextThree = {
    backgroundColor: lightTheme.palette.background.accentLight,
    title: "BLOCK TEXT THREE",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimo!",
};

const mosaicSectionContentOne = {
    backgroundColor: lightTheme.palette.background.accentLight,
    title: "Mosaic Section One",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/hero.webp", alt: "alt hero text" },
        { url: "/images/hero.webp", alt: "alt hero text" },
        { url: "/images/hero.webp", alt: "alt hero text" },
        { url: "/images/hero.webp", alt: "alt hero text" },
        { url: "/images/hero.webp", alt: "alt hero text" },
        { url: "/images/hero.webp", alt: "alt hero text" },
    ],
};
const mosaicSectionContentTwo = {
    backgroundColor: "white",
    title: "Mosaic Section Two",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/hero.webp", alt: "alt hero text" },
        { url: "/images/hero.webp", alt: "alt hero text" },
        { url: "/images/hero.webp", alt: "alt hero text" },
        { url: "/images/hero.webp", alt: "alt hero text" },
        { url: "/images/hero.webp", alt: "alt hero text" },
        { url: "/images/hero.webp", alt: "alt hero text" },
    ],
};
const mosaicSectionContentThree = {
    backgroundColor: "white",
    title: "Mosaic Section Three",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/hero.webp", alt: "alt hero text" },
        { url: "/images/hero.webp", alt: "alt hero text" },
        { url: "/images/hero.webp", alt: "alt hero text" },
        { url: "/images/hero.webp", alt: "alt hero text" },
        { url: "/images/hero.webp", alt: "alt hero text" },
        { url: "/images/hero.webp", alt: "alt hero text" },
    ],
};

const blockPhotoContentOne = {
    background: lightTheme.palette.background.accentLight,
    title: "BLOCK PHOTO TITLE",
    content: "Block Photo One",
    button: {
        text: "Button Text",
        href: "/about",
        variant: "contained",
    },
    image: { url: "/images/hero.webp", alt: "alt hero text" },
};
const blockPhotoContentTwo = {
    background: lightTheme.palette.background.accentLight,
    title: "BLOCK PHOTO TITLE",
    content: "Block Photo Two",
    button: {
        text: "Button Text",
        href: "/about",
        variant: "contained",
    },
    image: { url: "/images/hero.webp", alt: "alt hero text" },
};

// 4. Services
// 5. Projects

const galleryConfigs = [
    {
        category: "animals",
        href: "/projects/animals",
        image: { url: "/images/hero.webp", alt: "alt hero text" },
        fields: [
            { name: "Title", type: "text", value: "" },

            {
                name: "Description",
                type: "text",
                value: "",
                multiline: true,
                rows: 4,
            },
            { name: "Year", type: "number", value: "" },
        ],
    },
    {
        category: "portraits",
        href: "/projects/portraits",
        image: { url: "/images/hero.webp", alt: "alt hero text" },
        fields: [
            { name: "Title", type: "text", value: "" },

            {
                name: "Description",
                type: "text",
                value: "",
                multiline: true,
                rows: 4,
            },
            { name: "Year", type: "number", value: "" },
        ],
    },
    {
        category: "goats",
        href: "/projects/goats",
        image: { url: "/images/hero.webp", alt: "alt hero text" },
        fields: [
            { name: "Title", type: "text", value: "" },

            {
                name: "Description",
                type: "text",
                value: "",
                multiline: true,
                rows: 4,
            },
            { name: "Year", type: "number", value: "" },
        ],
    },
    {
        category: "sports",
        href: "/projects/sports",
        image: { url: "/images/hero.webp", alt: "alt hero text" },
        fields: [
            { name: "Title", type: "text", value: "" },

            {
                name: "Description",
                type: "text",
                value: "",
                multiline: true,
                rows: 4,
            },
            { name: "Year", type: "number", value: "" },
        ],
    },
    {
        category: "illustrations",
        href: "/projects/illustrations",
        image: { url: "/images/hero.webp", alt: "alt hero text" },
        fields: [
            { name: "Title", type: "text", value: "" },

            {
                name: "Description",
                type: "text",
                value: "",
                multiline: true,
                rows: 4,
            },
            { name: "Year", type: "number", value: "" },
        ],
    },
];

// 6. Studio

const leadProfile = {
    image: { url: "/images/hero.webp", alt: "alt hero text" },
    name: "Artist Name",
    content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n\nQuibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda. Laboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque.\n\nDolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nLorem ipsum, dolor sit amet consectetur adipisicing elit.\n\nQuibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda. Laboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque.\n\nDolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
};

const secondaryProfiles = [
    {
        image: { url: "/images/hero.webp", alt: "alt hero text" },
        name: "Designer One",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n\nQuibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque.",
    },
    {
        image: { url: "/images/hero.webp", alt: "alt hero text" },
        name: "Designer Two",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
    },
    {
        image: { url: "/images/hero.webp", alt: "alt hero text" },
        name: "Designer Three",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nDolore ipsa sed asperiores voluptatibus nam modi.",
    },
];
// 7. About
// 8. Social Media

// 9. Process
// 10. Contact

const processSteps = [
    {
        title: "Step Title",
        name: "STEP ONE",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.",
        image: { url: "/images/hero.webp", alt: "alt hero text" },
        reverse: false,
    },
    {
        title: "Step Title",
        name: "STEP TWO",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
        image: { url: "/images/hero.webp", alt: "alt hero text" },
        reverse: true,
    },
    {
        title: "Step Title",
        name: "STEP THREE",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nDolore ipsa sed asperiores voluptatibus nam modi.",
        image: { url: "/images/hero.webp", alt: "alt hero text" },
        reverse: false,
    },
    {
        title: "Step Title",
        name: "STEP FOUR",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.",
        image: { url: "/images/hero.webp", alt: "alt hero text" },
        reverse: true,
    },
];

export {
    siteName,
    pages,
    navbar,
    header,
    galleryConfigs,
    heroContent,
    blockTextOne,
    blockTextTwo,
    blockTextThree,
    blockPhotoContentOne,
    blockPhotoContentTwo,
    mosaicSectionContentOne,
    mosaicSectionContentTwo,
    mosaicSectionContentThree,
    servicesContent,
    leadProfile,
    secondaryProfiles,
    processSteps,
};
