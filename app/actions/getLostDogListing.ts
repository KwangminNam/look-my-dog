import axios from "axios";

export default async function getLostDogList() {
  try {
    const res = await axios.get(process.env.LOST_DOG_API_URL as string)
    return res.data.response.body.items.item;
  } catch (error: any) {
    console.log(error);
  }
}

