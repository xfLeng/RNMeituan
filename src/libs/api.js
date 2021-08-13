import { Request, instance as axios } from './axios'

export function fetchPosition(coord) {
    const url = `http://apimobile.meituan.com/locate/v2/rgeo?client_source=mars-webloc&coord=${coord}`;
    
    return Request({ url });
}