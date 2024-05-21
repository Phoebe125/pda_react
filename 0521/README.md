### 프로디지털 아카데미 프론트 리액트 강의 (5/21)

### Session 실습

- 사용자의 방문 순서를 tracking하고자 할때,
- 모든 요청 url의 path를 session의 배열로 관리하도록

- app.js에 다음 코드 추가

```jsx
// 모든 요청 url의 path를 session의 배열로 관리하도록 함
app.use((req, res, next) => {
  if (!req.session.paths) {
    req.session.paths = [];
  }
  req.session.paths.push(req.path);
  console.log(req.session.paths);
  next();
});
```

### Session VS Cookie

쿠키와 세션은 웹 애플리케이션에서 사용자의 상태를 관리하기 위해 사용되는 두 가지 주요 기술입니다. 둘 다 사용자가 웹 사이트와 상호작용하는 동안 데이터를 저장하고 전송하는 데 사용되지만, 그 작동 방식과 용도가 다릅니다.

**쿠키 (Cookies)**
쿠키는 사용자의 브라우저에 저장되는 작은 데이터 파일입니다. 서버가 사용자의 브라우저에 정보를 저장하고, 이후의 요청에서 해당 정보를 다시 서버로 전송하는 데 사용됩니다.

1. 저장 위치: 사용자의 브라우저에 저장됩니다.
2. 유효 기간: 만료 날짜를 설정할 수 있으며, 이 경우 브라우저를 닫아도 쿠키가 유지됩니다. 만료 날짜가 없으면 세션 쿠키로 취급되어 브라우저를 닫으면 삭제됩니다.
3. 접근성: 클라이언트(브라우저)와 서버 모두에서 접근 가능합니다.
4. 보안: 민감한 정보 저장 시 보안에 취약할 수 있습니다. HTTPS를 통해 전송할 수 있으며, HttpOnly와 Secure 속성을 통해 보안을 강화할 수 있습니다.
5. 크기 제한: 하나의 쿠키당 약 4KB 정도의 크기 제한이 있습니다.

사용 사례

1. 로그인 상태 유지
2. 사용자 설정 저장 (예: 언어, 테마)
3. 장바구니 정보 저장

**세션 (Sessions)**
세션은 서버 측에서 관리되는 사용자 상태 정보입니다. 각 사용자는 고유한 세션 ID를 가지며, 이 세션 ID는 보통 쿠키를 통해 클라이언트에게 전달됩니다. 세션 ID를 통해 서버는 특정 사용자의 상태 정보를 식별하고 유지할 수 있습니다.

1. 저장 위치: 서버 측에 저장됩니다.
2. 유효 기간: 일반적으로 서버 설정에 따라 일정 시간이 지나면 만료됩니다. 사용자가 브라우저를 닫거나 일정 시간 동안 활동이 없으면 세션이 종료될 수 있습니다.
3. 접근성: 서버 측에서만 접근 가능합니다.
4. 보안: 비교적 보안성이 높습니다. 세션 ID가 유출되지 않는 한 데이터가 안전하게 유지됩니다.
5. 크기 제한: 서버의 메모리나 스토리지 용량에 따라 다릅니다.

사용 사례

1. 로그인 정보 관리
2. 사용자 상태 정보 저장 (예: 현재 진행 중인 게임 상태)
3. 쇼핑몰에서 주문 처리 과정 관리

차이점

1. 저장 위치: 쿠키는 클라이언트 측에, 세션은 서버 측에 저장됩니다.
2. 유효 기간: 쿠키는 설정된 만료 날짜에 따라 유지되며, 세션은 브라우저를 닫거나 일정 시간 후 만료됩니다.
3. 보안: 세션이 상대적으로 더 안전합니다. 쿠키는 클라이언트 측에서 조작될 가능성이 있습니다.
4. 크기 및 용량: 쿠키는 크기 제한이 있지만, 세션은 서버 용량에 따라 다릅니다.
5. 접근성: 쿠키는 클라이언트와 서버에서 모두 접근 가능하지만, 세션은 서버에서만 접근 가능합니다.
   언제 사용되는지
6. 쿠키 사용 시기: 사용자 설정 저장, 장바구니 정보와 같은 비민감 데이터를 저장할 때.
7. 세션 사용 시기: 로그인 정보, 사용자 인증과 같은 민감한 데이터 관리, 사용자별 상태 정보를 서버에서 안전하게 관리할 때.
   이러한 차이와 특성을 이해함으로써 웹 애플리케이션의 요구사항에 따라 적절한 상태 관리 방법을 선택할 수 있습니다.

### Express.js에서 인증 구현하기 > 0517 폴더에 이어서 작업함

1. 필요 라이브러리 설치하기

- `npm install bcrypt validator jsonwebtoken`

2. User Schema 정의하기

```jsx
const mongoose = require("mongoose");
const { isEmail, isLowercase } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "이메일을 입력하여 주세요."],
    unique: true,
    lowercase: true,
    validate: [isEmail, "올바른 이메일 형식이 아닙니다."],
  },
  password: {
    type: String,
    required: [true, "비밀번호가 입력되어야 합니다."],
  },
});

userSchema.statics.signUp = async function (email, password) {
  const salt = await bcrypt.genSalt();
  console.log(salt);
  try {
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await this.create({ email, password: hashedPassword });
    return {
      _id: user._id,
      email: user.email,
    };
  } catch (err) {
    throw err;
  }
};

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user.visibleUser;
    }
    throwError("incorrect password");
  }
  throw Error("incorrect email");
};

const constvisibleUser = userSchema.virtual("visibleUser");
visibleUser.get(function (value, virtual, doc) {
  return {
    _id: doc._id,
    email: doc.email,
  };
});
constUser = mongoose.model("user", userSchema);
module.exports = User;
```
- 회원가입: password는 hashing한 결과 값으로 저장함, 비밀 번호는 무조건 hashing해서 저장함
- 로그인: 입력한 password의 hashing 한 값과 저장한 값을 비교함

- hashing 알고리즘의 특징: 같은 값을 넣으면, 동일한 값이 나옴 (단방향 해싱 알고리즘)
