import {IsDefined, IsNotEmpty, IsNumber} from "class-validator"

export class UserBodyDTO{
    @IsDefined()
    @IsNotEmpty({message: "name is required"})
    name: string;
    
    @IsNotEmpty({message: 'age is required'})
    @IsNumber({}, {message: 'age need be a number'})
    age: number;
}