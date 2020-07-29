const a = {
    id: 1,
    children: [
      {
        id: 2
      },
      {
        id: 3,
        children: [
          {
            id: 5,
            children: [
              {id: 6}
            ]
          }
        ]
      },
      {
          id: 4
      },
    ]
  } 
  
  
  let res = []
  
  function func(id, a) {    
      if (id === a.id) {
          res.push(a)
          getParent(a)
          
      }else {
          if (a.children) {
              for(let i = 0, len = a.children.length; i < len; i++) {
                  a.children[i].parent = a
                  func(id, a.children[i])
              }
          }
      }
  }
  
  function getParent(a) {
      while(a.parent) {
          res.push(a.parent)
          a = a.parent
      }
  }

func(6, a)
console.log(res)