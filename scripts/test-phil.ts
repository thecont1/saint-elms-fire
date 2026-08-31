import { philosopherChatFlow } from '../src/ai/flows/philosopher-chat';

async function main() {
  const result = await philosopherChatFlow({
    studentId: 'student-alex',
    question: 'How is the CAP theorem used at Google today?',
    courseId: 'intro-to-distributed-systems',
  });
  console.log(result);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
