const productList = [
    {
      id: '1',
      title: 'ایرپادز',
      Price: 199,
      Image: '../../public/images/airpods.jpg',
    },
    {
      id: '2',
      title: 'آیپد',
      Price: 499,
      Image: '../../public/images/ipad.jpg',
    },
    {
      id: '3',
      title: 'مک‌بوک',
      Price: 1999,
      Image: '../../public/images/macbook.jpg',
    },
    {
      id: '4',
      title: 'آیفون',
      Price: 899,
      Image: '../../public/images/iphon.jpg',
    },
    {
      id: '5',
      title: 'هدفون',
      Price: 599,
      Image: '../../public/images/headphone.jpg',
    },
    {
      id: '6',
      title: 'ماوس',
      Price: 299,
      Image: '../../public/images/blackMouse.jpg',
    },
    {
      id: '7',
      title: 'اپل واچ',
      Price: 499,
      Image: '../../public/images/watch.jpg.jpg',
    },
    {
      id: '8',
      title: 'میکروفون',
      Price: 699,
      Image: '../../public/images/mic.jpg',
    },
  ]

function getProductDate (id){
   let productDate =  productList.find((item) => item.id === id)
   return productDate;
}

export {productList , getProductDate}