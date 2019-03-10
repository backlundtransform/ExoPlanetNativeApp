import { Star } from './getPlanets'
export const apiurl = 'https://exoplanethunter.com/api'
const getData = async (uri: string): Promise<any> => {
    const SolarSystems = await fetch(uri)
        .then(response => {
            return response.json()
        })
        .then(myJson => {
            return myJson
        })

    return SolarSystems
}

export const getStarSize = (star: Star): number => {
    if (star.luminosity < 3) {
        return 150
    }

    if (star.luminosity < 6) {
        return 100
    }
    return 75
}

export const getSolarSystem = async (star: Star): Promise<Star> => {
    const SolarSystems = await getData(
        `${apiurl}/ExoSolarSystems/GetExoSolarSystemByName?name=${encodeURIComponent(
            star.name,
        )}`,
    )
    return SolarSystems as Promise<Star>
}

export const ConstellationSolarSystems = async (
    constellation: number,
): Promise<Array<Star>> => {
    const SolarSystems = await getData(
        `${apiurl}/ExoSolarSystems/GetSolarSystemPerConstellation?constellation=${constellation}`,
    )

    return SolarSystems as Promise<Array<Star>>
}
