export interface Question {
  question: string;
  answer?: string; // Manager kan svara, kan vara tom till en början
  userId: number; // Referens till användaren som ställde frågan
}
