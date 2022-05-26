import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function EventMap({
  latitude = 0,
  longitude = 0,
  endereco,
}: Props) {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%', minHeight: 400 }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>{endereco}</Popup>
      </Marker>
    </MapContainer>
  )
}

interface Props {
  latitude?: number
  longitude?: number
  endereco?: string
}
