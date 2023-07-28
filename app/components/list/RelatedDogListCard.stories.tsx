import { Meta, StoryObj } from "@storybook/react";
import RelatedDogListCard, { RelatedDogListCardProps } from "./RelatedDogListCard";
import DogListCard from "./DogListCard";
import Container from "../Container";

const meta: Meta<typeof RelatedDogListCard> = {
  title: "list/강아지리스트",
  component: RelatedDogListCard,
  tags: ["autudocs"]
};

export default meta;
type Story = StoryObj<typeof RelatedDogListCard>

const getAllLostDogListing = [
  // mock data for testing
  {
    desertionNo: '446484202300395',
    filename: 'http://www.animal.go.kr/files/shelter/2023/07/202307270907552_s.jpg',
    happenDt: '20230727',
    happenPlace: '광양읍 칠성리950-5 주변',
    kindCd: '[개] 믹스견',
    colorCd: '검정+흰색',
    age: '2023(60일미만)(년생)',
    weight: '1(Kg)',
    noticeNo: '전남-광양-2023-00301',
    noticeSdt: '20230727',
    noticeEdt: '20230807',
    popfile: 'http://www.animal.go.kr/files/shelter/2023/07/202307270907552.jpg',
    processState: '보호중',
    sexCd: 'M',
    neuterYn: 'N',
    specialMark: '믹스 검정+흰색 수컷 2개월추정(피부병있음)',
    careNm: '광양시 임시보호소',
    careTel: '061-797-3386',
    careAddr: '전라남도 광양시 봉강면 인덕로 1169-20 (봉강면) 지곡리 864-24',
    orgNm: '전라남도 광양시',
    chargeNm: '광양시',
    officetel: '061-797-3386'
  },
  {
    desertionNo: '446484202300395',
    filename: 'http://www.animal.go.kr/files/shelter/2023/07/202307270907552_s.jpg',
    happenDt: '20230727',
    happenPlace: '광양읍 칠성리950-5 주변',
    kindCd: '[개] 믹스견',
    colorCd: '검정+흰색',
    age: '2023(60일미만)(년생)',
    weight: '1(Kg)',
    noticeNo: '전남-광양-2023-00301',
    noticeSdt: '20230727',
    noticeEdt: '20230807',
    popfile: 'http://www.animal.go.kr/files/shelter/2023/07/202307270907552.jpg',
    processState: '보호중',
    sexCd: 'M',
    neuterYn: 'N',
    specialMark: '믹스 검정+흰색 수컷 2개월추정(피부병있음)',
    careNm: '광양시 임시보호소',
    careTel: '061-797-3386',
    careAddr: '전라남도 광양시 봉강면 인덕로 1169-20 (봉강면) 지곡리 864-24',
    orgNm: '전라남도 광양시',
    chargeNm: '광양시',
    officetel: '061-797-3386'
  },
  {
    desertionNo: '446484202300395',
    filename: 'http://www.animal.go.kr/files/shelter/2023/07/202307270907552_s.jpg',
    happenDt: '20230727',
    happenPlace: '광양읍 칠성리950-5 주변',
    kindCd: '[개] 믹스견',
    colorCd: '검정+흰색',
    age: '2023(60일미만)(년생)',
    weight: '1(Kg)',
    noticeNo: '전남-광양-2023-00301',
    noticeSdt: '20230727',
    noticeEdt: '20230807',
    popfile: 'http://www.animal.go.kr/files/shelter/2023/07/202307270907552.jpg',
    processState: '보호중',
    sexCd: 'M',
    neuterYn: 'N',
    specialMark: '믹스 검정+흰색 수컷 2개월추정(피부병있음)',
    careNm: '광양시 임시보호소',
    careTel: '061-797-3386',
    careAddr: '전라남도 광양시 봉강면 인덕로 1169-20 (봉강면) 지곡리 864-24',
    orgNm: '전라남도 광양시',
    chargeNm: '광양시',
    officetel: '061-797-3386'
  },
  {
    desertionNo: '446484202300395',
    filename: 'http://www.animal.go.kr/files/shelter/2023/07/202307270907552_s.jpg',
    happenDt: '20230727',
    happenPlace: '광양읍 칠성리950-5 주변',
    kindCd: '[개] 믹스견',
    colorCd: '검정+흰색',
    age: '2023(60일미만)(년생)',
    weight: '1(Kg)',
    noticeNo: '전남-광양-2023-00301',
    noticeSdt: '20230727',
    noticeEdt: '20230807',
    popfile: 'http://www.animal.go.kr/files/shelter/2023/07/202307270907552.jpg',
    processState: '보호중',
    sexCd: 'M',
    neuterYn: 'N',
    specialMark: '믹스 검정+흰색 수컷 2개월추정(피부병있음)',
    careNm: '광양시 임시보호소',
    careTel: '061-797-3386',
    careAddr: '전라남도 광양시 봉강면 인덕로 1169-20 (봉강면) 지곡리 864-24',
    orgNm: '전라남도 광양시',
    chargeNm: '광양시',
    officetel: '061-797-3386'
  },
];

const getDogListing = {
  desertionNo: '446484202300395',
  filename: 'http://www.animal.go.kr/files/shelter/2023/07/202307270907552_s.jpg',
  happenDt: '20230727',
  happenPlace: '광양읍 칠성리950-5 주변',
  kindCd: '[개] 믹스견',
  colorCd: '검정+흰색',
  age: '2023(60일미만)(년생)',
  weight: '1(Kg)',
  noticeNo: '전남-광양-2023-00301',
  noticeSdt: '20230727',
  noticeEdt: '20230807',
  popfile: 'http://www.animal.go.kr/files/shelter/2023/07/202307270907552.jpg',
  processState: '보호중',
  sexCd: 'M',
  neuterYn: 'N',
  specialMark: '믹스 검정+흰색 수컷 2개월추정(피부병있음)',
  careNm: '광양시 임시보호소',
  careTel: '061-797-3386',
  careAddr: '전라남도 광양시 봉강면 인덕로 1169-20 (봉강면) 지곡리 864-24',
  orgNm: '전라남도 광양시',
  chargeNm: '광양시',
  officetel: '061-797-3386'
};

export const RelatedDogList: Story = (args: RelatedDogListCardProps) => {
  return (
    <Container>
      <RelatedDogListCard {...args} />
    </Container>
  )
}

RelatedDogList.args = {
  title: '다른 유기견 보기',
  dogLabel: '테스트',
  getAlLostDogListing: getAllLostDogListing,
  getLostDogListing: getDogListing,
}

RelatedDogList.parameters = {
  nextjs: {
    appDirectory: true
  }
};
