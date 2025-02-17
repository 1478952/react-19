// 비동기 데이터 fetch 또는 context를 비동기로 불러올 수 있습니다.
// 기존 useEffect를 활용한 비동기 데이터 페칭 및 useContext로 context를 불러오는 부분을 대체할 수 있습니다.
// 다른 훅들과의 차이점으로 조건문과 반본문 내에서 사용이 가능합니다.

// async function fetchData() {
// 	const response = await fetch("http://localhost:80");
// 	return response.json();
// }

// function Component() {
// 	const [data, setData] = useState(null);

// 	useEffect(() => {
// 		fetchData().then((data) => setData(data));
// 	}, [])

// 	if (!data) return <h1>Loading...</h1>

// 	return <h1>{data}</h1>
// }

import { createContext, Suspense, use } from "react";

const fetchData = fetch("https://swapi.dev/api/people/1/").then((res) =>
  res.json()
);

const Context = createContext("");

function Component() {
  const data = use(fetchData);
  const context = use(Context);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{context}</p>
    </div>
  );
}

function TestUse() {
  return (
    <Context.Provider value="테스트입니다">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Component />
      </Suspense>
    </Context.Provider>
  );
}

export default TestUse;
