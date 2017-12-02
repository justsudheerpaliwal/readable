export function setCategories(categories) {
  return {
    type: 'SET_CATEGORIES',
    categories
  }
}

export function handlePostModalState(isPostModalOpen) {
  return {
    type: 'HANDLE_POST_MODAL_STATE',
    isPostModalOpen,
  };
}
