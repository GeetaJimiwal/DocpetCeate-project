import cats from '../data/cats'
import dog from '../data/dog'

export default {
  cats,
  dog,
  pets: [...cats, ...dog] 
}
