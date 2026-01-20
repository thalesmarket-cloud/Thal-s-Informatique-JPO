
export interface Speaker {
  name: string;
  role: string;
  company: string;
  imageUrl: string;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  confirmAttendance: 'Oui' | 'Non';
  participants: number;
  expectations: string;
  consent: boolean;
}
