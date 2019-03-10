import { apiurl } from './getSolarSystem'

export const GetConstellationsLines = async () => {
    const lines = await fetch(`${apiurl}/Maps/ConstellationsLines`)
        .then(response => {
            return response.json()
        })
        .then(myJson => {
            return myJson
        })

    return lines
}

export const GetStarsMarkers = async () => {
    const lines = await fetch(`${apiurl}/Maps/StarMarkers`)
        .then(response => {
            return response.json()
        })
        .then(myJson => {
            return myJson
        })

    return lines
}
