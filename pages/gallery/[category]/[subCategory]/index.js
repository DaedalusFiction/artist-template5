import { collection, getDocs, query, where } from "firebase/firestore";
import Gallery from "../../../../components/gallery/Gallery";
import { db } from "../../../../firebase";
import PageLayout from "../../../../components/layout/PageLayout";
import { useRouter } from "next/router";

const Project = ({ images }) => {
    const router = useRouter();
    const { subCategory } = router.query;

    return (
        <PageLayout name={subCategory}>
            <Gallery images={images} category="gallery" />
        </PageLayout>
    );
};

export const getServerSideProps = async (context) => {
    const category = context.params.category;
    const subCategory = context.params.subCategory;
    const imagesRef = collection(db, "gallery");
    const q1 = query(
        imagesRef,

        where("subCategories", "array-contains", subCategory)
    );

    const queriedDocuments = await getDocs(q1);
    let images = [];
    queriedDocuments.docs.forEach((doc, index) => {
        if (doc.data().categories.includes(category)) {
            images = [...images, doc.data()];
        }
    });

    return {
        props: {
            images,
            subCategory,
        },
    };
};

export default Project;
