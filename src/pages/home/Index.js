import React, { useState } from 'react'
import Footer from '../../components/common/footer/Index'
import Header from '../../components/common/header/Index'
import Tab from '../../components/common/tab/Index'
import Delivery from '../../components/delivery/Index';
import Dining from '../../components/dining/Index';
import Nightlife from '../../components/night/Index';

const Home = () => {

    const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
        <Header />
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
        {getCorrectScreen(activeTab)}
        <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) =>{
    switch(tab){

        case "Delivery":
            return <Delivery />;

        case "Dining Out":
            return <Dining />

        case "Nightlife":
            return <Nightlife />;

        default:
            return <Delivery />;
    }
};

export default Home;