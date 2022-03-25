import React from 'react';
import { FiSliders } from 'react-icons/fi'
import { restaurants } from '../../data/Restaurant';
import ExploreSection from '../common/exploresection';
import Filters from '../common/filters';
import './delivery.css';
import DeliveryCollections from './deliveryCollections/Index';
import TopBrands from './topbrands/Index';

const deliveryFilters = [
  {
    id:1,
    icon: <i className="absolute-center"><FiSliders /></i>,
    title: "Filters",
  },
  {
    id:2,
    title: "Rating: 4.0+",
  },
  {
    id:3,
    title: "Safe and Hygienic",
  },
  {
    id:4,
    title: "Pure Veg"
  },
  {
    id:5,
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    title: "Delivery Time"
  },
]

const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList={deliveryFilters}/>
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection list={restaurantList} collectionName='Delivery Restaurants in Bangalore' />
    </div>
  )
}

export default Delivery