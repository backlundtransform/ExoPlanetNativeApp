const time = (longitude: number): number => {
    const now = new Date()
    var utc_timestamp = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds(),
        now.getUTCMilliseconds(),
    )

    const start = Date.UTC(now.getUTCFullYear(), 0, 1)
    const diff = utc_timestamp - start
    const oneDay = 1000 * 60 * 60 * 24
    const days = Math.floor(diff / oneDay)

    let startime =
        0.0657098 * days -
        17.41409 +
        ((now.getUTCHours() * 60 + now.getUTCMinutes() + 4 * longitude) / 60) *
            1.002737909

    return (startime + 24) % 24
}
const hourangle = (latitude: number, altitude: number, azimuth: number) => {
    let numerator = Math.sin(toRadians(azimuth))
    let denominator =
        Math.cos(toRadians(azimuth)) * Math.sin(toRadians(latitude)) +
        Math.tan(toRadians(altitude)) * Math.cos(toRadians(latitude))

    return toDegrees(Math.atan2(numerator, denominator))
}

export const siderealtime = (longitude: number): string => {
    return timeformat(time(longitude))
}
export const dot_product = (
    a1: number,
    a2: number,
    a3: number,
    b1: number,
    b2: number,
    b3: number,
): number => {
    let numerator =
        Math.sqrt(a1 * a1 + a2 * a2 + a3 * a3) *
        Math.sqrt(b1 * b1 + b2 * b2 + b3 * b3)
    numerator = numerator === 0 ? 1 : numerator
    return toDegrees(Math.acos((a1 * b1 + a2 * b2 + a3 * b3) / numerator))
}
export const getdeclination = (
    latitude: number,
    altitude: number,
    azimuth: number,
): number => {
    let sindec =
        Math.sin(toRadians(latitude)) * Math.sin(toRadians(altitude)) -
        Math.cos(toRadians(latitude)) *
            Math.cos(toRadians(altitude)) *
            Math.cos(toRadians(azimuth))

    return toDegrees(Math.asin(sindec))
}

export const toRadians = (value: number) => {
    return (value * Math.PI) / 180
}
export const toDegrees = (value: number) => {
    return (value * 180) / Math.PI
}

export const azimuth_degree = (accelerometer: any, data: any) => {
    const b = calculatecrossproduct(accelerometer, { x: 0, y: 0, z: 1 })
    const a = calculatecrossproduct(accelerometer, data)
    const az = dot_product(a[0], a[1], a[2], b[0], b[1], b[2])
    return (az + 360) % 360
}

export const calculatecrossproduct = (a: any, b: any) => [
    a.y * b.z - a.z * b.y,
    a.z * b.x - a.x * b.z,
    a.x * b.y - a.y * b.x,
]

export const right_ascension = (
    longitude: number,
    latitude: number,
    altitude: number,
    azimuth: number,
) => {
    const angle = hourangle(latitude, altitude, azimuth)
    let right_ascension = time(longitude) * 15 + angle

    return (right_ascension / 15 + 24) % 24
}

const timeformat = (time: number) => {
    const decimal = Math.trunc(time)
    const fractional = time - decimal
    let numb = (fractional * 60).toString().substring(0, 2)
    if (fractional < 10 / 60) {
        numb = '0' + (fractional * 60).toString().substring(0, 1)
    }

    return decimal + ':' + numb
}
