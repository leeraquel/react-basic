import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();
  console.log(params);
  const { productId } = useParams();
  let navigate = useNavigate();

  const tempProductsData = [
    {
      id: 1,
      name: "다이슨 슈퍼소닉",
      email: "Eliseo@gardner.biz",
      body: "다이슨 슈퍼소닉 헤어드라이어를 위한 자석 부착형 스타일링 노즐, 스탠드 및 스타일링 액세서리.",
    },
    {
      id: 2,
      name: "SSD 1TB",
      email: "Jayne_Kuhic@sydney.com",
      body: "삼성전자 삼성 외장SSD T7 1TB 외장하드 1테라 USB3.2 Gen.2 Type-C MU-PC1T0 공식인증 (정품)",
    },
  ];
  const [result] = tempProductsData.filter((prod) => prod.id === productId);
  // 구조분해 할당 [result] =  ...codes 하면
  // 원본 : 파라미터로 받은 id의 상품 정보가 담긴 객체가 배열에 감싸 있음
  // 구조분해할당해서 바로 객체를 변수에 저장하기
  // [result] = 어쩌구 하면 필터한 결과의 배열에서 0번 인덱스 값을 result 변수에 저장
  // 필터함수는 배열을 반환하고 그러면 한 겹 더 들어가야하니까 구조분해할당으로 result 배열 벗겨주는 거임
  // 배열 수가 많으면 변수에 첫 번째 객체만 들어감

  if (!result) {
    return (
      <>
        <div>결과값이 없습니다.</div>
        <button onClick={() => navigate("/")}> 홈으로 이동하기 </button>
        <button onClick={() => navigate("/products")}>
          상품페이지 이동하기
        </button>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </>
    );
  }

  return (
    <>
      <div>ProductDetailPage</div>
      <div>Product name: {result.name}</div>
      <div>Product email: {result.email}</div>
      <div>Product body: {result.body}</div>
    </>
  );
}
