import './App.css';
import Data from './Components/Data/Data';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import AgencyServices from './Components/AgencyServices/AgencyServices';
import Portfolio from './Components/Portfolio/Portfolio';
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';

function App() {

    const headerData = Data.main_menu;
    const heroData = Data.hero;
    const servicesData = Data.services;
    const portfolio = Data.portfolio;
    const agencyServices = Data.agency_services;
    const companyData = Data.company_data;
    const footerMenu = Data.footer_menu
    return (
        <>
            <Header pagesInfo={headerData} />
            <Hero pagesInfo={heroData} />
            <Services pagesInfo={servicesData} />
            <Portfolio pageInfo={portfolio} />
            <AgencyServices pageInfo={agencyServices} />
            <GetStarted />
            <Footer compData = {companyData} footerData = {footerMenu} />
        </>
    );
}

export default App;
