import axios from 'axios'

// PROMESAS
// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: 'ADD_FAV',
//              payload: data,
//           });
//        });
//     };
//  };

//  export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: 'REMOVE_FAV',
//              payload: data,
//        });
//        });
//     };
//  };

//ASYNC AWAIT

export const addFav = (character) => {

   const endpoint = 'http://localhost:3001/rickandmorty/fav';

   try {
      return async (dispatch) => {

         const { data } = await axios.post(endpoint, character)

         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         })
      }
       
   } catch (error) {
      console.log(error)
   }
}

//  export const removeFav = (id) => {

//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;

//     try {
//       return async (dispatch) => {

//          const { data } = await axios.delete(endpoint)

//          return dispatch({
//             type: 'REMOVE_FAV',
//             payload: data,
//          });
//       };
//     } catch (error) {
//       console.log(error);
//     }
    
//  };

export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;

  try{
     return async (dispatch) =>{
        const {data} = await axios.delete(endpoint);

        return dispatch({
           type: 'REMOVE_FAV',
           payload: data,
        })
     }

  }catch(error){
     return error
  }
};

