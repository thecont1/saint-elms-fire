import { LmsDashboardClient } from '@/components/LmsDashboardClient';
import { loadDashboardPageData } from '@/lib/dashboard-page-data';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const { seeded, identity, demoSession } = await loadDashboardPageData();
  return (
    <LmsDashboardClient
      initialCourse={seeded.course}
      initialModules={seeded.modules}
      initialLessons={seeded.lessons}
      initialReleases={seeded.releases}
      initialGraph={seeded.graph}
      initialSocraticSession={seeded.activeSocraticSession}
      identity={identity}
      demoSession={demoSession}
    />
  );
}
