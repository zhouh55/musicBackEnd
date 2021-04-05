
interface ResponseBody {
    code: number,
    data?: any,
    message: string
}
interface Params {
    code?: number, 
    data?: any, 
    message?: string
}
export const getResponseDataFormat = ( params?: Params ): ResponseBody => {
    return {
        code: params?.code || 200,
        data: params?.data || '',
        message: params?.message || ''
    }
}