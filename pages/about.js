import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

export default function about() {
  return (
    <div>
      <BaseLayout>
        <BasePage>
          <h1>This is the about page</h1>
        </BasePage>
      </BaseLayout>
    </div>
  )
}