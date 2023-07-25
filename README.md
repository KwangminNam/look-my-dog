##   Project name (프로젝트 명)
  * Look My Dog / 룩마독 (2023.05.20 ~ 2023. 7.10)
  * https://lookmydog.vercel.app/

## Image 및 Icon 출처
* https://www.flaticon.com/search?word=puppy
* React Icons

## What skills did I use? (사용 기술)
* NextJS 13
* Nextjs Auth
* TypeScript
* Prisma Client
* mongoDB
* Storybook
  
## 상태관리 (State mangement) 
* Zustand

## Style 
* Tailwind.css


## Library
* axios
* react-hook-from
* react-hot-toatst
* query-string
* react-select
* react-spinners
* zod
* swiper slide
* lottie json

## Work Flow
* React-hook-form 라이브러러리를 이용하여 http 통신
* 서버사이드 렌더링을 Prisma Client를 이용해  클라이언트에서 fetch API 가 아닌 서버와 함께 바로 통신
* Next Auth 로 SNS Login 구현. (구글,깃허브,네이버)
* Query-string 을 이용해 url 파라미터 컨트롤
* React hot toast로 http 통신 시 success , fail(reject) 클라이언트에게 표시

기존 리액트처럼 빈html 태그에 데이터를 fetch 해와서 쓰는 방식이 아닌 ,Prisma Client를 통해 데이터베이스와 직접 통신 하기때문에 서버사이드 렌더링을 구현 할 수 있고,
클라이언트사이드렌더링의 단점인 SEO나 , 초기 로딩속도를 개선 할 수 있음.

## 공공데이터 유기견 API 활용
 * https://www.data.go.kr/data/15098931/openapi.do

## Page & Features
  ```sh
  /mypost
  /favorite
  /listing/[$listingId]
  /edit/[$listingId]
  /lost
  ```
  * CREATE
    좋아요 기능
    게시글 포스트
  * READ
    유저 본인이 등록한 게시글 /mypost
    유저가 좋아요 버튼을 누른 게시글 /favorite
    유기견 강아지 보기 /lost
  * DELETE
    유저 본인이 등록한 게시글 /mypost -> DELETE
    유저 본인이 "좋아요" 게시글 -> 좋아요 취소 -> DELETE
  * UPDATE (edit)
    유저 본인이 등록한 게시글 수정 /mypost -> UPDATE

```sh
* 폴더구조 
 * action:
   1.서버사이드 렌더링을 하기위한 폴더 Prisma Client로 서버와 다이렉트로 통신하여 데이터를 갖고옴 
   2.데이터를 렌더링 할 page파일에 action에 선언 해놓은 데이터 요청을 갖고와서 하위 컴포넌트(클라이언트 컴포넌트)로 전달
    서버사이드렌더링과 클라이언트사이드 (hydrate)렌더링을 시킴.
 ex:page.tsx -> ListClient.tsx . 서버컴포넌트에서 서버아사이드렌더링 후 클라이언트 컴포넌트로 데이터 props로 전달
 * API:
  http api 들을 선언해놓음. 여기서 또한 prisma client를 이용해서 Resopnse를 제공해줌.
  -* auth:
    Nextjs의 login auth 관리 . provider에서 sns 로그인 관리.
 * hooks:
  Zustand를 이용해 Modal의 상태관리 (on , off , action on/off)를 관리함.
 * Components:
   DogListCard
   Modal
   Input
   Button
   Validation
 * Sever component , Client component 구분   
 * 동적라우팅 listing/[listingId]
 * 서버컴포넌트의 default props로 params의 값을 갖고 올 수있음.
```


## TO DO
 * 강아지 사진 업로드 2장 이상
 * 댓글기능
 * 좋아요 갯수 표시



