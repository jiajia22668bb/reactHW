import { useState, useEffect } from 'react';

export const Actions3 = () => {
  let [users3, setUsers3] = useState([]);
  let [userLength3, setUserLength3] = useState(null);
  useEffect(() => {
    fetch("http://localhost/php-react/all-users-3.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setUsers3(data.users3);
          setUserLength3(true);
        } else {
          setUserLength3(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const deleteUser3 = (theID) => {
    // filter outing the user.
    let userDeleted = users3.filter((user) => {
      return user.seq !== theID;
    });
    fetch("http://localhost/php-react/delete-user-3.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seq: theID }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setUsers3(userDeleted);
          if (users3.length === 1) {
            setUserLength3(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editMode3 = (id) => {
    users3 = users3.map((user) => {
      if (user.seq === id) {
        user.isEditing = true;
        return user;
      }
      user.isEditing = false;
      return user;
    });
    setUsers3(users3);
  };

  // Cance the edit mode.
  const cancelEdit3 = (id) => {
    users3 = users3.map((user) => {
      if (user.seq === id) {
        user.isEditing = false;
        return user;
      }
      return user;
    });
    setUsers3(users3);
  };

  const updateUser3 = (userData) => {
    fetch("http://localhost/php-react/update-user-3.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          users3 = users3.map((user) => {
            if (user.seq === userData.seq) {
              user.isEditing = false;
              user.OI = userData.OI;
              user.EI = userData.EI;
              user.CI = userData.CI;
              user.OD = userData.OD;
              user.descript = userData.descript;
              return user;
            }
            return user;
          });
          setUsers3(users3);
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const insertUser3 = (newUser) => {
    fetch("http://localhost/php-react/add-user-3.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (true) {
          setUsers3([
            {
              seq: data.seq,
              ...newUser,
            },
            ...users3,
          ]);
          setUserLength3(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    users3,
    userLength3,
    deleteUser3,
    updateUser3,
    editMode3,
    cancelEdit3,
    insertUser3
  };
};