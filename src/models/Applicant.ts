export enum Position {
  Designer = "디자이너",
  Developer = "개발자",
}

export interface Applicant {
  id: string;
  name: string;
  profileUrl: string;
  position: Position;
  email: string;
  phone: string;
}
