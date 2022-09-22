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
// const siteName = "Cosima Hewes";

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
    image: { url: "/images/hero.webp", alt: "alt hero text" },
    primaryText: "ARTIST PORTFOLIO TEMPLATE",
    secondaryText: "Created by FictionalWeb.com",
    buttonOne: {
        variant: "contained",
        href: "/projects",
        text: "View Galleries",
    },
};

const homeGalleryContent = {
    images: [
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    ],
};

const servicesContent = [
    {
        title: "Service One!",
        price: "$200",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
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
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
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
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
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
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
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
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
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
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
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
    image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
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
    image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
};

// 4. Services
// 5. Projects

const galleryStylesCategories = [
    {
        name: "Black and White",
        href: "/gallery/styles/black%20and%20white",
        image: {
            url: "/images/placeholder.webp",
            alt: "alt gallery image text",
        },
    },
    {
        name: "Mixed Media",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
    },
    {
        name: "Acrylic",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
    },
    {
        name: "Watercolor",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
    },
];

const galleryCategories = [
    {
        name: "animals",
        href: "/gallery/animals",
        image: {
            url: "/images/placeholder.webp",
            alt: "alt gallery image text",
        },
        subCategories: [
            {
                name: "goats",
                href: "/gallery/animals/goats",
                image: {
                    url: "/images/placeholder.webp",
                    alt: "alt gallery image text",
                },
            },
            {
                name: "horses and cows",
                href: "/gallery/animals/horses",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "turtles",
                href: "/gallery/animals/turtles",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "chickens",
                href: "/gallery/animals/chickens",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
        ],
    },
    {
        name: "landscapes",
        href: "/gallery/landscapes",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [
            {
                name: "mountains",
                href: "/gallery/landscapes/mountains",
                image: {
                    url: "/images/placeholder.webp",
                    alt: "alt gallery image text",
                },
            },
            {
                name: "waterfalls",
                href: "/gallery/landscapes/waterfalls",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "rivers",
                href: "/gallery/landscapes/rivers",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "valleys",
                href: "/gallery/landscapes/valleys",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
        ],
    },
    {
        name: "portraits",
        href: "/gallery/portraits",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [
            {
                name: "men",
                href: "/gallery/portraits/men",
                image: {
                    url: "/images/placeholder.webp",
                    alt: "alt gallery image text",
                },
            },
            {
                name: "women",
                href: "/gallery/portraits/women",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "children",
                href: "/gallery/portraits/children",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "elderly",
                href: "/gallery/portraits/elderly",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
        ],
    },
    // {
    //     name: "Black and White",
    //     href: "/gallery/black%20and%20white",
    //     image: { url: "/images/placeholder.webp", alt: "alt text" },
    // },
];

const galleryConfig = {
    categories: [],
    subCategories: [],
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
};

// 7. About

// 7a. Artists

const leadProfile = {
    image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    name: "Artist Name",
    content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n\nQuibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda. Laboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque.\n\nDolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nLorem ipsum, dolor sit amet consectetur adipisicing elit.\n\nQuibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda. Laboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque.\n\nDolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
};

const secondaryProfiles = [
    {
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        name: "Designer One",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n\nQuibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque.",
    },
    {
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        name: "Designer Two",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
    },
    {
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        name: "Designer Three",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nDolore ipsa sed asperiores voluptatibus nam modi.",
    },
];

// 7b. Studio

const studioContent = {
    imageOne: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    imageTwo: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    imageThree: {
        url: "/images/placeholder.webp",
        alt: "alt placeholder text",
    },
    header: "Studio Header",
    content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
};

// 7c. Work

const workContent = {
    imageOne: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    imageTwo: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    imageThree: {
        url: "/images/placeholder.webp",
        alt: "alt placeholder text",
    },
    header: "Work Header",
    content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
};

// 8. Social Media

// 9. Process
// 10. Contact

const processSteps = [
    {
        title: "Step Title",
        name: "STEP ONE",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        reverse: false,
    },
    {
        title: "Step Title",
        name: "STEP TWO",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        reverse: true,
    },
    {
        title: "Step Title",
        name: "STEP THREE",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nDolore ipsa sed asperiores voluptatibus nam modi.",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        reverse: false,
    },
    {
        title: "Step Title",
        name: "STEP FOUR",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        reverse: true,
    },
];

const eventConfig = {
    categories: [],
    subCategories: [],
    fields: [
        { name: "Title", type: "text", value: "" },
        { name: "Start Date", type: "date", value: "" },
        { name: "End Date", type: "date", value: "" },
        { name: "Venue", type: "text", value: "" },
        { name: "Time", type: "text", value: "" },
        {
            name: "Description",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        { name: "Venue Website", type: "text", value: "" },
    ],
    timeUploaded: new Date(),
};

const pages = [
    { name: "GALLERY", href: "/gallery", subPages: galleryCategories },
    { name: "PROCESS", href: "/process", subPages: [] },
    { name: "SERVICES", href: "/services", subPages: [] },
    {
        name: "ABOUT",
        href: "/about",
        subPages: [
            { name: "The Artist", href: "/about/artist" },
            { name: "The Studio", href: "/about/studio" },
            { name: "The Work", href: "/about/work" },
        ],
    },
    {
        name: "EVENTS",
        href: "/events",
        subPages: [],
    },
    { name: "ADMIN", href: "/admin", subPages: [] },
];

export {
    siteName,
    pages,
    navbar,
    header,
    galleryCategories,
    galleryStylesCategories,
    galleryConfig,
    eventConfig,
    heroContent,
    homeGalleryContent,
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
    studioContent,
    workContent,
    processSteps,
};
