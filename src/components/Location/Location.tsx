
"use client"

import { Map } from "leaflet"
import { MapContainer, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Transition } from "../Transition"
import { MarkerHouse } from "./MarkerHouse"

export function Location() {
    const coordinatePoint = {
        lat: 4.570868,
        lng: -74.297333
    }
    const centerMarket = (position: {lat:number, lng:number}, fnMap: Map) => {
        fnMap.flyTo({
            lat: position.lat,
            lng: position.lng
        })
    }
    return (
        <Transition className="px-4 py-8 md:py-44 md:px-36">
            <h4 className="text-center text-secondary" id="location">Ubicación</h4>
            <h2 className="max-w-2xl mx-auto my-4 mb-8 text-3xl font-semibold text-center">Disponibles en toda Colombia, con la comunidad mas grande desde 2020</h2>
            <MapContainer center={coordinatePoint} zoom={6} scrollWheelZoom={false} className="h-[700px]">
                <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"/>
                <MarkerHouse selectMarker={centerMarket}>

                </MarkerHouse>

            </MapContainer>
        </Transition>
    )
}
