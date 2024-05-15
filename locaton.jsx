import React, { useEffect } from 'react';
import styled from 'styled-components';

const Map = styled.div`
  width: 100%;
  height: 360px; /* 지도 높이 지정 */
`;

const Wrapper = styled.div` /* 스타일 컴포넌트 추가 설정 */
  margin: 20px;
`;

const Title = styled.h2` /* 제목 스타일 */
  font-size: 20px;
  margin-bottom: 16px;
`;

const Content = styled.div` /* 내용 스타일 */
  font-size: 16px;
`;

const Location = () => {
  // 카카오 맵 불러오기
  <!-- * 카카오맵 - 지도퍼가기 -->
  <!-- 1. 지도 노드 -->
  <div id="daumRoughmapContainer1715763488690" class="root_daum_roughmap root_daum_roughmap_landing"></div>

  <!--
    2. 설치 스크립트
    * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
  -->
  <script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>

  <!-- 3. 실행 스크립트 -->
  <script charset="UTF-8">
    new daum.roughmap.Lander({
      "timestamp" : "1715763488690",
      "key" : "2jccg",
      "mapWidth" : "640",
      "mapHeight" : "360"
    }).render();
  </script>



  return (
    <Wrapper>
      <Title>오시는 길</Title>
      <Map id="daumRoughmapContainer1652464367301" />
      <Content>
        신라호텔 영빈관
        <br />
        서울특별시 중구 장충단로 249
      </Content>
    </Wrapper>
  );
};

export default Location;
