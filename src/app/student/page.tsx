import { LmsDashboardClient } from '@/components/LmsDashboardClient';
import { loadDashboardPageData } from '@/lib/dashboard-page-data';

export const dynamic = 'force-dynamic';

export default async function StudentPage() {
  const { seeded, programmeOutline, identity, demoSession } = await loadDashboardPageData();
  return (
    <LmsDashboardClient
      initialCourse={seeded.course}
      initialModules={seeded.modules}
      initialLessons={seeded.lessons}
      initialReleases={seeded.releases}
      initialGraph={seeded.graph}
      programmeOutline={programmeOutline}
      identity={identity}
      demoSession={demoSession}
    />
  );
}
