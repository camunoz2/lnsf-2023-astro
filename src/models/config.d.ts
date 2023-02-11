export type InstitutionalSeal = {
  name: string;
  description: string;
};

export interface Config {
  id: string;
  schoolName: string;
  phone: string;
  address: string;
  workingHours: string;
  institutionalSeals: InstitutionalSeal[];
  contactEmail: string;
  instagram: string;
  facebook: string;
}
