import {stringify} from "wkt"
export default function (title=title, geometry=geometry, options=[]) {

    return [title, stringify(geometry), ...options]
}