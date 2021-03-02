import {AbstractControl,ValidatorFn} from '@angular/forms';
import { environment } from 'src/environments/environment';
export function UserNameValidator():ValidatorFn
{
    return (control:AbstractControl): {[key:string]:boolean}|null => {
        if(control.value.trim()!=environment.username)
        {
            console.log("username validation fn()");
            return{'UserNameNotAllowed':true};
        }
        return null;
    };
}