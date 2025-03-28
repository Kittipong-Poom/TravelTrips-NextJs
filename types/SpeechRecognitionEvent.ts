export interface SpeechRecognitionResult {
  transcript: string;
  confidence: number;
}

export interface SpeechRecognitionEvent extends Event {
  error(arg0: string, error: string): unknown;
  results: SpeechRecognitionResult[][];
  interimResults: boolean;
  final: boolean;
}
