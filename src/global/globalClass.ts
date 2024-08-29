
export class ResponseData<T> {
    data: T | T[]
    status: number
    message: string

    constructor(data: T | T[], status: number, message: string) {
        this.data = data
        this.status = status
        this.message = message
        return this
    }

}