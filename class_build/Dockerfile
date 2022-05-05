FROM node:14

# RUN mkdir class_build 원래는 파일을 이렇게 만들어줘야겟지만, 굳이 이렇게 따로 만들어줄 필요 없음

WORKDIR /class_build/
COPY . /class_build/
# 커서 위치를 폴더로 이동
RUN yarn install
RUN yarn build:ssr
CMD yarn start

# RUN과 CMD 둘 다 명령을 실행시키는 명령어이다.
# 차이는: CMD는 한번밖에 못쓰고, RUN은 여러번 쓸 수 있다.

