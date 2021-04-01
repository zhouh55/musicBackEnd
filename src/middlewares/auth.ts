import { Context } from "node:vm";

export default (ctx: Context, next: () => Promise<any>) => {
    return next().catch( err => {
        // TODO 做其他处理 待完成
        if (err.status === 401) {
            
          ctx.status = 401;
          ctx.body = {
            error: err.originalError ? err.originalError.message : err.message
          };
        } 
        else {
          throw err;
        }
      });
}