const DEFAULT_MEASURE = 'px'
const OBJECTS_CONTAINER_CLASS = '.img-container'
const DEFAULT_CSS_POSITION = 'absolute'

let DEFAULT_SHAPE_RADIUS;
const DEFAULT_SHAPE_ROTATION = 15
const DEFAULT_CIRCLE_MAX_DEGREE = 360
let DEFAULT_SHAPE_DEGREE;

const DEFAULT_MARGIN = 16;

Math.degrees = radians => radians * 180 / Math.PI
Math.radians = degrees => degrees * Math.PI / 180

const getImagesContainers = () => [...document.querySelectorAll(OBJECTS_CONTAINER_CLASS)]

const getWindowInnerSize = () => [window.innerWidth, window.innerHeight]

const simulateVMin = () => Math.min(...getWindowInnerSize())

const setMaxRadius = () => {
    const smallest_side_value = simulateVMin()
    const diameter = smallest_side_value - 2 * (DEFAULT_MARGIN ? DEFAULT_MARGIN : 0)
    DEFAULT_SHAPE_RADIUS = (diameter - 80) / 2;
}

const getWindowCenterPoint = () => getWindowInnerSize().map(item => item / 2)

const getWindowCenterPointAsObject = () => {
    const arr = getWindowCenterPoint()
    return {
        x: arr[0],
        y: arr[1]
    }
}

const giveAbsolutPosition = (objects) => {
    objects.forEach(element => {
        element.style.position = DEFAULT_CSS_POSITION
    });
}

const getHalfPropertyValue = (element, property) => parseFloat(getComputedStyle(element)[property]) / 2


const positionAtTheStartingPoint = (objects) => {
    giveAbsolutPosition(objects)
}


const positionElementInCoordinates = (element, coordinates) => {
    let new_top = coordinates.y
    let new_left = coordinates.x

    element.style.top = `${new_top}${DEFAULT_MEASURE}`
    element.style.left = `${new_left}${DEFAULT_MEASURE}`
}


const findShape = initial_point => {
    const shape = []
    for (let i = 0; i < 360; i += DEFAULT_SHAPE_DEGREE) {
        shape.push({
            x: (initial_point.x + DEFAULT_SHAPE_RADIUS * Math.cos(Math.radians(i + DEFAULT_SHAPE_ROTATION))),
            y: (initial_point.y + DEFAULT_SHAPE_RADIUS * Math.sin(Math.radians(i + DEFAULT_SHAPE_ROTATION))),
        })
    }
    return shape
}

const initDefaultShapeDegree = elements => DEFAULT_SHAPE_DEGREE = (DEFAULT_CIRCLE_MAX_DEGREE / elements.length)

const execute = () => {
    setMaxRadius()

    const images_containers = getImagesContainers()
    initDefaultShapeDegree(images_containers)

    positionAtTheStartingPoint(images_containers)

    const shape = findShape({
        x: 0,
        y: 0
    })
    images_containers.forEach((container, index) => {
        positionElementInCoordinates(container, shape[index])
    })
}
export default () => {
    let resize_timer;

    window.addEventListener('load', execute)

    window.addEventListener('resize', () => {
        clearTimeout(resize_timer)
        resize_timer = setTimeout(() => {
            execute()
        }, 250);
    })
}