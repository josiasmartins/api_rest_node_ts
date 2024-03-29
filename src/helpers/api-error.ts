export class APiError extends Error {

    public readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }

}

export class BadRequestError extends APiError {
    constructor(message: string) {
        super(message, 400);
    }
}

export class NotFoundError extends APiError {
    constructor(message: string) {
        super(message, 404);
    }
}

export class UnauthorizedError extends APiError {
    constructor(message: string) {
        super(message, 401);
    }
}