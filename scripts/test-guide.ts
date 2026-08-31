import { guideChatFlow } from '../src/ai/flows/guide-chat';

async function main() {
  const guideIn = await guideChatFlow({
    studentId: 'student-alex',
    courseId: 'intro-to-distributed-systems',
    question: 'What is the CAP theorem?',
  });
  console.log('Guide in-lane:', guideIn);
  
  const guideOut = await guideChatFlow({
    studentId: 'student-alex',
    courseId: 'intro-to-distributed-systems',
    question: 'Who won the World Cup in 2022?',
  });
  console.log('Guide out-lane:', guideOut);
}

main().catch(console.error);
