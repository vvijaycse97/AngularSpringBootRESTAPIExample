import {AbstractControl,ValidatorFn} from '@angular/forms';
import { environment } from 'src/environments/environment';
export function PasswordValidator():ValidatorFn
{
    return (control:AbstractControl): {[key:string]:boolean}|null => {
        if(control.value.trim()!=environment.password)
        {
            console.log("password validation fn()");
            return{'PasswordNotAllowed':true};
        }
        return null;
    };
}
