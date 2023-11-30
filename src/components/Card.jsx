 import data from '../data.json'
 import styled from 'styled-components'

// const CardItem = styled('div')`
//   background-color: ${({id}) => (id%2===0?'blue':'red')};
//   & > h1 {
//     text-align: center;
//     text-transform: uppercase;
//     font-size: 40px;
//   }
// `
const CardItem = styled('div')(({id}) => {
  const DifferColor = id % 2 === 0
  return {
    background: DifferColor ? 'tomato' : 'blue',
    h1: {
      textAlign:'center',
      textTransform:'uppercase',
      fontSize: 40,
      color: 'white'
    }
  }
})

const Card = () => {
  return data.map((elem) => (
    <CardItem key={elem.id} id={elem.id}>
      {/* {elem.id % 2 === 0 ? <h3>True</h3> : <h3>False</h3>} */}
      {/* {elem.id % 2 === 0 && <h3>True</h3>} */}
      <h1 className='title'>{elem.title}</h1>
      <h4 className='description'>{elem.body}</h4>
      <p className='price'>{elem.price}</p>
    </CardItem>
  ))
}

export default Card