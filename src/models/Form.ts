export enum QuestionType {
  SingleLine = "singleline",
  MultiLine = "multiline",
  Select = "select",
}

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  placeholder: string;
  isRequired: boolean;
  value: QuestionValue;
}

export type QuestionValue = string | number;

export interface SingleLineQuestion extends Question {
  type: QuestionType.SingleLine;
  value: string;
}

export interface MultilineQuestion extends Question {
  type: QuestionType.MultiLine;
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
