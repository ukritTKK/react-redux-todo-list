
export function onSelectFilter(filter){
  return (dispatch) =>{
      dispatch({
          type : 'Set_Filter',
          payload : filter,
      })
  }
}

export function toggleDropdownFilter(){
  return (dispatch) =>{
      dispatch({
          type : 'Toggle_Dropdown_Filter',
      })
  }
}

