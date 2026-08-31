import { friendChatFlow } from '../src/ai/flows/friend-chat';

async function main() {
  const result = await friendChatFlow({
    studentId: 'student-alex',
    question: 'When are the office hours?',
  });
  console.log(result);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
