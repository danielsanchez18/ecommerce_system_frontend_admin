import { Audit } from './audit.interface';

export interface Company {

  id?: string;
  name: string;
  phoneNumber?: string;
  email?: string;
  website?: string;
  logoUrl?: string;
  enabled: boolean;
  branchesName: string[];
  audit: Audit;

}