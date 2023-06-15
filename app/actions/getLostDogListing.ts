import axios from "axios";
import { toast } from "react-hot-toast";

export default async function getLostDogList() {
  const res = await axios.get("http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=rOvv7bWtOK1XIG01JWXB1paSn4T1A9c58tCt64ADXaqdN%2B0YEniOPGksdlMShGFahDXyZB3tDFB3aOYENTMJ0A%3D%3D&_type=json&numOfRows=20&pageNo=2")
  if (res.status !== 200) {
    toast.error("데이터 취소")
  }
  return res.data.response.body.items.item;
}

