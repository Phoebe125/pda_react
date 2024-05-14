import { useState, useEffect } from "react";

// Higher-Order Component
export default function withUser(Component, callbackFn) {
  return function WrappedComponent({ userId, ...props }) { // 나머지 객체를 props로 묶어서 받겠다
    const result = callbackFn();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function fetchUser() {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const userData = await response.json();
        setUser(userData);
        setLoading(false);
      }
      fetchUser();
    }, [userId]);

    if (loading) {
      return <p>Loading user...</p>;
    }
    return <Component user={user} result={result} {...props} />; // props를 풀어서 받겠다
  };
}
