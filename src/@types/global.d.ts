declare namespace global {
     interface IAnyObject {
        [key: string]: any
    }

     interface IReturnData {
        code: number,
        data?: any
        message: string
    }
}

export = global;



