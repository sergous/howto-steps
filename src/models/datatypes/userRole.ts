export enum RoleType {
    Guest,
    Asker,
    Adviser,
    Reviewer,
    Expert,
}

export type UserRole = RoleType | undefined;
