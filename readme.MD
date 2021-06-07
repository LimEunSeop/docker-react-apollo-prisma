# docker-react-apollo-prisma

nexus-plugin-prisma 가 아직 개발중이라 nexus 코드를 수동작업해야할듯. 괜시리 지원 안돼서 아쉽네. 그래도 Nexus 같은 좋은 툴 있어서 어디인가?

어차피 내 생각에도 Prisma 와 GraphQL 스키마는 별개로 관리하는게 맞긴 하다. 왜냐하면 GraphQL 에서 공개하고 싶은 것을 따로 설정하고 싶기도 하기 마련이니까.

Nexus 코드 작성하면서 GraphQL 코드가 어찌 변하는지 잘 관찰하면서 GraphQL 과 친해지자.


## Requirement

/web/server 에 .env 파일을 다음과 같이 만들기. (docker-compose 환경변수 정보랑 일치하게 해야함)
```
DATABASE_URL="postgresql://dmstjq:dmstjq@docker.for.mac.host.internal:5432/dev?schema=public
```

DB HOST 르 docker.for.mac.host.internal 로 하는게 핵심임. 왜냐하면 컨테이너 내부와 컨테이너 외부 모두에서 접근가능한 DB 여야 하니까. 이렇게 하면 개발환경에서 굳이 컨테이너 내부 쉘에 접근하지 않고도 컨테이너 밖에서 npx prisma migrate dev 할 수 있다.

대신 /etc/hosts 파일에서 docker.for.mac.host.internal localhost 라인을 추가 해야할것!!!!
