//Map Icon Import
import L from "leaflet"
import icon from '../assets/images/icon-location.svg'

export default L.icon({
    iconSize: [33,41],
    iconAnchor: [10,41],
    popUpAnchor: [5,-45],
    iconUrl:icon
})