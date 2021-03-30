// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
user: IUser;
users_all: Array<IUser>;
isEmail: IUser;
getTypesOfDocuments: IUser;
testObject2: IUser;
verifyToken: boolean;
}

interface IUserOnQueryArguments {
id: number;
}

interface IIsEmailOnQueryArguments {
email: string;
}

interface IGetTypesOfDocumentsOnQueryArguments {
id: number;
}

interface ITestObject2OnQueryArguments {
user: IUserInput;
}

interface IUser {
__typename: "User";
id: number | null;
email: string | null;
idNumber: string | null;
username: string | null;
firstName: string | null;
lastName: string | null;
previousLastName: string | null;
birthYear: number | null;
gender: string | null;
student_residency: string | null;
rent_status: string | null;
kids: string | null;
below_18: string | null;
over_18: string | null;
mother_fullname: string | null;
mother_birthdate: string | null;
mother_status: string | null;
mother_occuptation: string | null;
mother_medical_handicap: string | null;
mother_in_contact: string | null;
father_fullname: string | null;
father_birthdate: string | null;
father_status: string | null;
father_occuptation: string | null;
father_medical_handicap: string | null;
father_in_contact: string | null;
student_occupation: string | null;
student_pay: string | null;
password: string | null;
is_admin: boolean | null;
documentTypes: Array<IDocumentType> | null;
}

interface IDocumentType {
__typename: "DocumentType";
id: number | null;
text: string | null;
value: string | null;
}

interface IUserInput {
id?: number | null;
idNumber?: string | null;
username?: string | null;
firstName?: string | null;
lastName?: string | null;
previousLastName?: string | null;
birthYear?: number | null;
gender?: string | null;
}

interface IMutation {
__typename: "Mutation";
register: IUser;
register2: IUser;
}

interface IRegisterOnMutationArguments {
gender: string;
previousLastName: string;
lastName: string;
firstName: string;
password: string;
username: string;
}

interface IRegister2OnMutationArguments {
username: string;
password: string;
firstName: string;
lastName: string;
previousLastName: string;
birthYear: number;
gender: string;
idNumber: string;
}
}

// tslint:enable
