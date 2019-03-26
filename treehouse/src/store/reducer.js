const initialState = {
  age: 20,
  doubleAge: 40
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  //   console.log('Action Type::- ', action);

  switch (action.type) {
    case 'AGE_UP':
      newState.age += action.value;
      break;

    case 'AGE_DOWN':
      newState.age -= action.value;
      break;

    case 'DOUBLE_AGE':
      console.log(state);
      newState.doubleAge = newState.doubleAge * 2;
      break;
  }
  return newState;
};

export default reducer;
