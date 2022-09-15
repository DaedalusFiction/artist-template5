import PageLayout from "../../components/layout/PageLayout";
import ProcessStep from "../../components/process/ProcessStep";
import { processSteps } from "../../siteInfo";

const index = () => {
    return (
        <PageLayout name="THE PROCESS">
            {processSteps.map((step, index) => {
                return <ProcessStep key={index} step={step} />;
            })}
        </PageLayout>
    );
};

export default index;
