import * as models from '../models/models';

export class UserManagementModel  {
   
        abbotProcessSteps?: (null)[] | null;
        createdBy: CreatedByOrLastModifiedBy;
        description: string;
        lastModifiedBy: CreatedByOrLastModifiedBy;
        name: string;
        processType: string;
        runmode: string;
        sharedObject: number;
        version: string;
        processId: number;

        this.Value = Value;
            this.userId = userId;
            this.lastModifiedBy = lastModifiedBy;
            this.userRoleId = userRoleId;
            this.createdBy = createdBy;
            this.department = department;
            this.systemUsername = systemUsername;
            this.passwordDuration = passwordDuration;
            this.LoginAttemps = LoginAttemps;
    }  
    
    export class CreatedByOrLastModifiedBy {
        userid: number;
        authorities?: (string)[] | null;
        abbotUserRole: AbbotUserRole;
      }
      export class AbbotUserRole {
        id: number;

}
