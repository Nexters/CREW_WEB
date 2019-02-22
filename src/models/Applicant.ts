export enum Position {
  Designer = "designer",
  Developer = "developer",
}

export interface Applicant {
  id: string;
  name: string;
  profileUrl: string;
  position: Position;
  email: string;
  phone: string;
}
