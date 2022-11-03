
import dynamic from 'next/dynamic'

const Map= dynamic(()=>import('./Map'), {
    ssr:false
})

export default Map

export {default as Footer} from './Footer'
export {default as Cart} from './Cart'
export {default as Layout} from './Layout'
export {default as Navbar} from './Navbar'
export {default as Product} from './Product'
export {default as Start} from './Start'
export {default as Benefits} from './Benefits'
export {default as OurProducts} from './OurProducts'
export {default as DealMonth} from './DealMonth'
export {default as ShopStart} from './ShopStart'
export {default as ListProducts} from './ListProducts'
export {default as Testimonials} from './Testimonials'
export {default as Video} from './Video'
export {default as Promo} from './Promo'
export {default as OurNews} from './OurNews'
export {default as Brands} from './Brands'
export {default as Article} from './Article'
export {default as Team} from './Team'
export {default as Search} from './Search'



