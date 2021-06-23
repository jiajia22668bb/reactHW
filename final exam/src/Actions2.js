import { useState, useEffect } from 'react';

export const Actions2 = () => {
  let [users2, setUsers2] = useState([]);
  let [userLength2, setUserLength2] = useState(null);
  useEffect(() => {
    fetch("http://localhost/php-react/all-users-2.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setUsers2(data.users2);
          setUserLength2(true);
        } else {
          setUserLength2(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const insertUser2 = (newUser) => {
    fetch("http://localhost/php-react/add-user2.php", {
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
        if (data.success) {
          setUsers2([
            {
              ...newUser,
            },
            ...users2,
          ]);
          setUserLength2(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser2 = (theID) => {
    // filter outing the user.
    let userDeleted = users2.filter((user) => {
      return user.PId !== theID;
    });
    fetch("http://localhost/php-react/delete-user-2.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ PId: theID }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setUsers2(userDeleted);
          if (users2.length === 1) {
            setUserLength2(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editMode2 = (id) => {
    users2 = users2.map((user) => {
      if (user.PId === id) {
        user.isEditing = true;
        return user;
      }
      user.isEditing = false;
      return user;
    });
    setUsers2(users2);
  };

  // Cance the edit mode.
  const cancelEdit2 = (id) => {
    users2 = users2.map((user) => {
      if (user.PId === id) {
        user.isEditing = false;
        return user;
      }
      return user;
    });
    setUsers2(users2);
  };

  const updateUser2 = (userData) => {
    fetch("http://localhost/php-react/update-user-2.php", {
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
          users2 = users2.map((user) => {
            if (user.PId === userData.PId) {
              user.isEditing = false;
              user.PN = userData.PN;
              user.UP = userData.UP;
              user.Cost = userData.Cost;
              return user;
            }
            return user;
          });
          setUsers2(users2);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    users2,
    userLength2,
    insertUser2,
    deleteUser2,
    editMode2,
    cancelEdit2,
    updateUser2,
  };
};