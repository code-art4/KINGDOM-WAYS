export default class PastorDTO {
    public constructor (init?: Partial<PastorDTO>) {
        Object.assign(this, init);
    }

    userId: number;
    fullName: string;
    branches: PastorBranchesDTO[] = [];
}

export class PastorBranchesDTO {
    public constructor (init?: Partial<PastorDTO>) {
        Object.assign(this, init);
    }

    branchId: number;
    branchName: string;
}