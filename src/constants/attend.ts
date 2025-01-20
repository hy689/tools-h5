export interface IAddress {
    outside: boolean,
    address: string,
    latitude: number,
    longitude: number,
    id: string
}
export const addresses:IAddress[] = [
    {
        outside: false,
        address: '山东省济南市槐荫区兴福街道齐州路2999号绿地中央广场商业一区B栋207',
        latitude: 36.664856,
        longitude: 116.895983,
        id:`山东省济南市槐荫区兴福街道齐州路2999号绿地中央广场商业一区B栋207/36.664856/116.895983`
    },
    {
        outside: false,
        address: '北京市东城区后永康胡同东雍创业谷',
        latitude: 39.945207,
        longitude: 116.423544,
        id:`北京市东城区后永康胡同东雍创业谷/39.945207/116.423552`
    },
    {
        outside: true,
        address: '中关村环保科技示范园（夏雪路）中国人寿科技园B座北',
        latitude: 40.062539,
        longitude: 116.171196,
        id:'中关村环保科技示范园（夏雪路）中国人寿科技园B座北/40.062539/116.171196'
    }
]