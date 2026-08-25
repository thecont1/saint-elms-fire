import { DataService } from '@/lib/data-service';
import { LmsDashboardClient } from '@/components/LmsDashboardClient';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const seeded = await DataService.ensureSeededData('student-alex');

  return (
    <LmsDashboardClient
      initialCourse={seeded.course}
      initialModules={seeded.modules}
      initialLessons={seeded.lessons}
      initialReleases={seeded.releases}
      initialGraph={seeded.graph}
      initialSocraticSession={seeded.activeSocraticSession}
    />
  );
}
