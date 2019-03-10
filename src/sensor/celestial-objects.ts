import { StyleSheet } from 'react-native'
export interface CelestialObject {
    name: string
    coordinates: Array<number>
    image: any
    size: number
}

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

const getCoordinates = (
    eccentricity: number,
    distance: number,
    argumentOmega: number,
    eclipticlongitude: number,
    meanAnomalyZero: number,
    inclination: number,
): Array<number> => {
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
    return [
        (dec * 180) / Math.PI,
        ra < 0 ? (-ra * 180) / Math.PI - 180 : 180 - (ra * 180) / Math.PI,
    ]
}
const celestialObject = [
    {
        name: 'Mercury',
        image: require('../images/mercury.png'),
        coordinates: getCoordinates(
            0.20563,
            0.3871,
            29.125,
            48.331,
            174.795,
            7.005,
        ),
        size: {
            height: 30,
        },
    },
    {
        name: 'Venus',
        image: require('../images/venus.png'),
        coordinates: getCoordinates(
            0.00677,
            0.72333,
            54.884,
            76.68,
            50.416,
            3.395,
        ),
        size: {
            height: 30,
        },
    },
    {
        name: 'Mars',
        image: require('../images/mars.png'),
        coordinates: getCoordinates(
            0.0934,
            1.52368,
            286.502,
            49.558,
            19.373,
            1.85,
        ),
        size: {
            height: 30,
        },
    },
    {
        name: 'Jupiter',
        image: require('../images/jupiter.png'),
        coordinates: getCoordinates(
            0.04849,
            5.2026,
            273.867,
            100.464,
            20.02,
            1.303,
        ),
        size: StyleSheet.create({ image: { width: 60 } }),
    },
    {
        name: 'Saturn',
        image: require('../images/saturn.png'),
        coordinates: getCoordinates(
            0.05551,
            9.55491,
            339.391,
            113.666,
            317.021,
            2.489,
        ),
        size: {
            height: 40,
        },
    },
    {
        name: 'Uranus',
        image: require('../images/uranus.png'),
        coordinates: getCoordinates(
            0.0463,
            19.21845,
            98.999,
            74.006,
            141.05,
            0.773,
        ),
        size: {
            height: 40,
        },
    },
    {
        name: 'Neptune',
        image: require('../images/neptune.png'),
        coordinates: getCoordinates(
            0.00899,
            30.11039,
            276.34,
            131.784,
            256.225,
            1.7,
        ),
        size: {
            height: 40,
        },
    },
]
export default celestialObject
