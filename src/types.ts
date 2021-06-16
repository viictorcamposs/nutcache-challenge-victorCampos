export interface IEmployee {
  id: string;
  cpf: string;
  name: string;
  birth: Date;
  gender: string;
  email: string;
  startDate: Date;
  team: string;
  created_at: Date;
}

export interface IEmployeeInputData {
  name: string;
  email: string;
  cpf: string;
  gender: string;
  birth: Date;
  team?: string;
  startDate: Date;
}
