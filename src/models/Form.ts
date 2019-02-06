export enum QuestionType {
  Singline,
  Multiline,
  Select
}

export interface Question {
  type: QuestionType;
  title: string;
  placeholder: string;
  isRequired: boolean;
}

export interface SinglelineQuestion extends Question {
  type: QuestionType.Singline;
  value: string;
}

export interface MultilineQuestion extends Question {
  type: QuestionType.Multiline;
  value: string;
}

export interface SelectQuestion extends Question {
  type: QuestionType.Select;
  options: SelectQuestionOption[];
  value: number;
}

export interface SelectQuestionOption {
  key: string;
  value: string;
}
