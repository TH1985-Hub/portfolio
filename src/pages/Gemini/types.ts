export type MessageRole = 'user' | 'bot';

export type  Message = {
  role: MessageRole;
  text: string;
}

export type ChatState = {
  input: string;
  loading: boolean;
  messages: Message[];
}
