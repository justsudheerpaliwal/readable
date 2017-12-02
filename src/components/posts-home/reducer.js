export default function (state = {}, action) {
  switch (action.type) {
  case 'SET_CATEGORIES':
    return {
      ...state,
      categories: action.categories,
    };

  case 'HANDLE_POST_MODAL_STATE':
    return {
      ...state,
      isPostModalOpen: action.isPostModalOpen,
    };
  default:
    return state;
  }
}
