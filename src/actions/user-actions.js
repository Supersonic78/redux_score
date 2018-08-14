export const UPDATE_USER = "users:updateUser";
export const UPDATE_USER2 = "users:updateUser2";

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  };
}

export function updateUser2() {
  return {
    type: UPDATE_USER2,
    payload: {
      user: "banan"
    }
  };
}
