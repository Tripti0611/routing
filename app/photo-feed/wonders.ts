import { StaticImageData } from "next/image";
import photo1 from "./photos/ayodhya.jpg";
import photo2 from "./photos/vrindavan.jpg";
import photo3 from "./photos/ujjain.jpg";
import photo4 from "./photos/kedarnath.jpg";
import photo5 from "./photos/banars.jpg";

export type wonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer:string;
    location: string;
};

const wondersImages: wonderImage[] = [
    {
        id: "1",
        name: "Ayodhya ram mandir",
        src: photo1,
        photographer:"photo by xyz",
        location: "Ayodhya"
    },
    {
        id: "2",
        name: "Vrindavan Radha-krishn mandir",
        src: photo2,
        photographer:"photo by xyz",
        location: "Vrindavan"
    },
    {
        id: "3",
        name: "Mahakaleshwar mandir",
        src: photo3,
        photographer:"photo by xyz",
        location: "Ujjain"
    },
    {
        id: "4",
        name: "Kedarnath mandir",
        src: photo4,
        photographer:"photo by xyz",
        location: "Uttrakhand"
    },
    {
        id: "5",
        name: "Kashivishwnath mandir",
        src: photo5,
        photographer:"photo by xyz",
        location: "Varansi"
    },
]