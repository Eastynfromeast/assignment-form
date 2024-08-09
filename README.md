# A26 Forms & Actions

## Goal

- 잘 기억이 나지 않는 흐흑
- form을 만들고
- server action으로 검증?
  - 비밀번호가 12345 면 통과 아니면 에러

# A27 Zexy Zod

## Goal

- zod로 로그인 검증!
- 이메일은 @zod.com 로 끝나야 하고
- 유저명은 5글자 이상에
- 비밀번호는 10글자 이상에 반드시 숫자 1개 이상 포함되어 있어야 한다

# A28 Prisma

## Goal

- SQLite로 프리즈마를 초기화하고 유저, 트윗, 좋아요 모델을 생성합니다.
- User 모델에는 username, password, email, bio, created_at updated_at 필드가 있어야 합니다.
- Tweet 모델에는 tweet, created_at 및 updated_at 필드가 있어야 합니다. 또한 User 와의 관계가 있어야 합니다.
- Like 모델에는 created_at 필드가 있어야 하며 User 및 Tweet과의 관계가 있어야 합니다.
- 모든 모델에는 primary key 가 있어야 합니다. === 모든 모델은 unique한 id가 있어야 함

# A29 Authentication

## Goal

- Zod, 서버 액션, 미들웨어, 테일윈드, 프리즈마, iron-session 및 bcrypt를 사용하여 유저 인증을 구현합니다.
- 3가지 페이지를 구현합니다: /create-account, /log-in, /profile.
- /create-account 및 /log-in양식은 Zod를 사용하여 유효성을 검사하고 오류를 표시해야 합니다.
- 유저는 로그인한 후에만 /profile을 볼 수 있어야 합니다.
- /profile 페이지에는 유저 프로필이 표시되어야 합니다.
