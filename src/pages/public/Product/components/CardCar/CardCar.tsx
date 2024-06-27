import Slider from 'react-slick'

interface imagesType {
  id: number,
  image: string
}

interface carType {
  id: number,
  name: string,
  model?: string,
  color?: string,
  type?: string,
  hp?: string,
  use?: string,
  images: imagesType[]
}

interface Props {
  data: carType
}
const CardCar = ({ data }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='CardCar'>
      <Slider {...settings}>
        {data.images?.map((car) => (
          <div className='cont-img' key={`${data.name}-${car.id}`}>
            <div className='mask-l' />
            <div className='mask-r' />
            <img src={car?.image} className='car' alt='car' />
          </div>
        ))}
      </Slider>
      <div className='item'>
        <h4 className='name'>{data.name}</h4>
        <p className='item-text'>MODEL: <span>{data.model}</span></p>
        <p className='item-text'>COLOR: <span>{data?.color}</span></p>
        <p className='item-text'>{data.type}</p>
        <p className='item-text'>{data.hp}</p>
        <p className='item-text'>{data.use}</p>
      </div>
    </div>
  )
}

export default CardCar