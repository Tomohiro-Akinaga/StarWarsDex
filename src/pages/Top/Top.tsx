import React from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";
import CardList from "../../components/CardList/CardList";

const Top: React.FC = () => {

    return (
        <>
            <Header />
            <SearchBar />
            <CardList />
            <Footer />
        </>
    );
};

export default Top;
