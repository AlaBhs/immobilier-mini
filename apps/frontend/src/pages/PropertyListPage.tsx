import { MainLayout } from "../components/templates/MainLayout";
import { PropertyListContainer } from "../modules/property/containers/PropertyListContainer";

export function PropertyListPage() {
  return (
    <MainLayout>
      <PropertyListContainer />
    </MainLayout>
  );
}
