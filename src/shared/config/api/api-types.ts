export type Scale = 'PROVINCE' | 'CITY' | 'DISTRICT' | 'STREET';

export type Geotag = 'Москва';

export interface MapOptions {
	api: 'osm';
	geotag: Geotag;
	scale: Scale;
	size: number;
}
