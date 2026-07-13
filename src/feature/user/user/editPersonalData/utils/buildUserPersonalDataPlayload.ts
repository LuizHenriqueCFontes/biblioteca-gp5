import type { UpdateUserRequestDTO } from "../../types/request/updateUserRequestDTO";

export function buildUserPersonalDataPlayload(originalUserData: UpdateUserRequestDTO, userData: UpdateUserRequestDTO): Partial<UpdateUserRequestDTO> {

    const playload: Partial<UpdateUserRequestDTO> = {};

    if(originalUserData.email !== userData.email) {
        playload.email = userData.email;
    }

    if(originalUserData.username !== userData.username) {
        playload.username = userData.username
    }

    if(originalUserData.phone !== userData.phone) {
        playload.phone = userData.phone
    }

    return playload;
}