const julianDayZero = 2451545
const angle = 0.9856076686
const ecliptic = (23.4397 * Math.PI) / 180
const earthEccentricity = 0.01671
const earthArgumentOmega = (288.064 * Math.PI) / 180
const earthEclipticlongitude = (174.873 * Math.PI) / 180
const earthMeanAnomalyZero = 357.529

const julianDay = () => {
    var date = new Date()
    var time = date.getTime()
    return time / 86400000 + 2440587.5 - date.getTimezoneOffset() / 1440
}

const getMeanAnomaly = (
    julianDay: number,
    meanAnomalyZero: number,
    distance: number,
) =>
    ((meanAnomalyZero +
        ((julianDay - julianDayZero) * angle) / Math.pow(distance, 3 / 2)) *
        Math.PI) /
    180

const getTrueAnomaly = (meanAnomaly: number, eccentricity: number) => {
    return (
        meanAnomaly +
        (2 * eccentricity - Math.pow(eccentricity, 3) / 4) *
            Math.sin(meanAnomaly) +
        (5 * Math.pow(eccentricity, 2) * Math.sin(2 * meanAnomaly)) / 4 +
        (13 * Math.pow(eccentricity, 3) * Math.sin(3 * meanAnomaly)) / 12
    )
}

const getDistanceFromSun = (
    trueAnomaly: number,
    eccentricity: number,
    distance: number,
) =>
    (distance * (1 - Math.pow(eccentricity, 2))) /
    (1 + eccentricity * Math.cos(trueAnomaly))

const getHeliocentricCoordinates = (
    sunDistance: number,
    trueAnomaly: number,
    eclipticlongitude: number,
    argumentOmega: number,
    inclination: number,
): Array<number> => {
    const x =
        sunDistance *
        (Math.cos(eclipticlongitude) * Math.cos(argumentOmega + trueAnomaly) -
            Math.sin(eclipticlongitude) *
                Math.cos(inclination) *
                Math.sin(argumentOmega + trueAnomaly))
    const y =
        sunDistance *
        (Math.sin(eclipticlongitude) * Math.cos(argumentOmega + trueAnomaly) +
            Math.cos(eclipticlongitude) *
                Math.cos(inclination) *
                Math.sin(argumentOmega + trueAnomaly))
    const z =
        sunDistance *
        (Math.sin(inclination) * Math.sin(argumentOmega + trueAnomaly))
    return [x, y, z]
}

const getGeocentricCoordinates = (
    heliocoordplanet: Array<number>,
): Array<number> => {
    const [px, py, pz] = heliocoordplanet
    const earthmeanAnomaly = getMeanAnomaly(
        julianDay(),
        earthMeanAnomalyZero,
        1,
    )
    const earthtrueAnomaly = getTrueAnomaly(earthmeanAnomaly, earthEccentricity)
    const earthdistancefromsun = getDistanceFromSun(
        earthtrueAnomaly,
        earthEccentricity,
        1,
    )
    const [ex, ey, ez] = getHeliocentricCoordinates(
        earthdistancefromsun,
        earthtrueAnomaly,
        earthEclipticlongitude,
        earthArgumentOmega,
        0,
    )

    return [px - ex, py - ey, pz - ez]
}

const getGeocentricLongLat = (geocoord: Array<number>): Array<number> => {
    const [x, y, z] = geocoord
    const delta = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2))
    const longitude = Math.atan2(y, x)
    const latitude = Math.asin(z / delta)
    return [longitude, latitude]
}

const getRaDeg = (geolongLat: Array<number>): Array<number> => {
    const [longitude, latitude] = geolongLat
    const rightAscension = Math.atan2(
        Math.sin(longitude) * Math.cos(ecliptic) -
            Math.tan(latitude) * Math.sin(ecliptic),
        Math.cos(longitude),
    )
    const declination = Math.asin(
        Math.sin(latitude) * Math.cos(ecliptic) +
            Math.cos(latitude) * Math.sin(longitude) * Math.sin(ecliptic),
    )

    return [rightAscension, declination]
}

export const getCoordinates = (
    eccentricity: number,
    distance: number,
    argumentOmega: number,
    eclipticlongitude: number,
    meanAnomalyZero: number,
    inclination: number,
): { longitude: number; latitude: number } => {
    const day = julianDay()

    const meanAnomaly = getMeanAnomaly(day, meanAnomalyZero, distance)

    const trueAnomaly = getTrueAnomaly(meanAnomaly, eccentricity)

    const distancefromsun = getDistanceFromSun(
        trueAnomaly,
        eccentricity,
        distance,
    )

    const heliocoord = getHeliocentricCoordinates(
        distancefromsun,
        trueAnomaly,
        (eclipticlongitude * Math.PI) / 180,
        (argumentOmega * Math.PI) / 180,
        (inclination * Math.PI) / 180,
    )

    const geocoord = getGeocentricCoordinates(heliocoord)
    const [ra, dec] = getRaDeg(getGeocentricLongLat(geocoord))
    return {
        longitude:
            ra < 0 ? (-ra * 180) / Math.PI - 180 : 180 - (ra * 180) / Math.PI,
        latitude: (dec * 180) / Math.PI,
    }
}
export const CalculateMoonPosition = () => {
    const julianday = julianDay()
    const lValue = 218.316 + 13.176396 * (julianday - julianDayZero)
    const mValue = 134.963 + 13.064993 * (julianday - julianDayZero)
    const fValue = 93.272 + 13.22935 * (julianday - julianDayZero)
    const longitude = lValue + 6.289 * Math.sin((mValue * Math.PI) / 180)
    const latitude = 5.128 * Math.sin((fValue * Math.PI) / 180)
    const [ra, dec] = getRaDeg([
        (longitude * Math.PI) / 180,
        (latitude * Math.PI) / 180,
    ])
    return {
        longitude:
            ra < 0 ? (-ra * 180) / Math.PI - 180 : 180 - (ra * 180) / Math.PI,
        latitude: (dec * 180) / Math.PI,
    }
}

export const getMoonPhase = () => {
    const julianday = julianDay()
    const daysSince = julianday - 2451549.5
    const daysIntoCycle = ((daysSince / 29.53) % 1) * 29.53

    if (daysIntoCycle < 6) {
        return require('../images/rtcresent.png')
    }
    if (daysIntoCycle < 10) {
        return require('../images/rtquater.png')
    }
    if (daysIntoCycle < 14) {
        return require('../images/rtgibbous.png')
    }
    if (daysIntoCycle < 18) {
        return require('../images/moon.png')
    }
    if (daysIntoCycle < 21) {
        return require('../images/gibbous.png')
    }
    if (daysIntoCycle < 24) {
        return require('../images/quater.png')
    }
    return require('../images/cresent.png')
}
