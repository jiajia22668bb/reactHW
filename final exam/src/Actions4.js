import { useState, useEffect } from 'react';

export const Actions4 = () => {
  let [users4, setUsers4] = useState([]);
  let [userLength4, setUserLength4] = useState(null);
  useEffect(() => {
    fetch("http://localhost/php-react/all-users-4.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setUsers4(data.users4);
          setUserLength4(true);
        } else {
          setUserLength4(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    users4,
    userLength4,
  };
};