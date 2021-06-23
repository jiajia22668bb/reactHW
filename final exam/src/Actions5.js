import { useState, useEffect } from 'react';

export const Actions5 = () => {
  let [users5, setUsers5] = useState([]);
  let [userLength5, setUserLength5] = useState(null);
  useEffect(() => {
    fetch("http://localhost/php-react/all-users-5.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setUsers5(data.users5);
          setUserLength5(true);
        } else {
          setUserLength5(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteUser5 = (theID) => {
    // filter outing the user.
    let userDeleted = users5.filter((user) => {
      return user.seq2 !== theID;
    });
    fetch("http://localhost/php-react/delete-user-5.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seq2: theID }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setUsers5(userDeleted);
          if (users5.length === 1) {
            setUserLength5(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editMode5 = (id) => {
    users5 = users5.map((user) => {
      if (user.seq2 === id) {
        user.isEditing = true;
        return user;
      }
      user.isEditing = false;
      return user;
    });
    setUsers5(users5);
  };

  // Cance the edit mode.
  const cancelEdit5 = (id) => {
    users5 = users5.map((user) => {
      if (user.seq2 === id) {
        user.isEditing = false;
        return user;
      }
      return user;
    });
    setUsers5(users5);
  };

  const updateUser5 = (userData) => {
    fetch("http://localhost/php-react/update-user-5.php", {
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
          users5 = users5.map((user) => {
            if (user.seq2 === userData.seq2) {
              user.isEditing = false;
              user.OId2 = userData.OId2;
              user.PI2 = userData.PI2;
              user.qty = userData.qty;
              user.discount = userData.discount;
              return user;
            }
            return user;
          });
          setUsers5(users5);
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const insertUser5 = (newUser) => {
    fetch("http://localhost/php-react/add-user-5.php", {
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
          setUsers5([
            {
              seq2: data.seq2,
              ...newUser,
            },
            ...users5,
          ]);
          setUserLength5(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    users5,
    userLength5,
    deleteUser5,
    updateUser5,
    editMode5,
    cancelEdit5,
    insertUser5
  };
};