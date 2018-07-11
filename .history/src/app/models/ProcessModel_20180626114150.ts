import * as models from '../models/models';

export class ProcessModel  {

    /** abbot process */
    processId : string;
    processType : string;
    processName : string;
    processStatus : string;
    description : string;
    version : string;
    createdate: Date;
    createby : string;
    runmode : number;
    sharedObject : number;

    /** AbbotAction */

    actionId : Int16Array;






   
}
