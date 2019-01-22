export enum Position {
  Designer,
  Developer
}

export interface Applicant {
  id: string;
  name: string;
  profileUrl: string;
  position: Position;
  email: string;
  phone: string;
}
