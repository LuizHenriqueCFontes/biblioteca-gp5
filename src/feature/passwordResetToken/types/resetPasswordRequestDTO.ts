export type ResetPasswordRequestDTO = {
    token: string,
    password: string,
    confirmPassword: string
}