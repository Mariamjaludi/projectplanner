const initState = {
  projects: [
    { id: '1', title: 'project 1 title', content: 'this is the content for project 1'},
    { id: '2', title: 'project 2 title', content: 'this is the content for project 2'},
    { id: '3', title: 'project 3 title', content: 'this is the content for project 3'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
        console.log('create project error', action.err);
        return state;
    default:
        return state;
  }
}

export default projectReducer
