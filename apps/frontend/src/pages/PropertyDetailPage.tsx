import { MainLayout } from "../components/templates/MainLayout";
import { PropertyDetailContainer } from "../modules/property/containers/PropertyDetailContainer";

export function PropertyDetailPage() {
      return (
        <MainLayout>
          <PropertyDetailContainer />
        </MainLayout>
      );
}
