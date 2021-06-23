import { useState, useEffect } from 'react';

export const Actions6 = () => {
  let [users6, setUsers6] = useState([]);
  let [userLength6, setUserLength6] = useState(null);
  useEffect(() => {
    fetch("http://localhost/php-react/all-users-6.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setUsers6(data.users6);
          setUserLength6(true);
        } else {
          setUserLength6(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    users6,
    userLength6,
  };
};