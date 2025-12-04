import { MainLayout } from "../components/templates/MainLayout";
import { PropertyFormContainer } from "../modules/property/containers/PropertyFormContainer";

export function PropertyFormPage() {
      return (
        <MainLayout>
          <PropertyFormContainer />
        </MainLayout>
      );
}
