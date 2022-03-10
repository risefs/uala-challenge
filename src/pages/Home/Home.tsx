import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { getBooks } from "../../services/books";
import { columns } from "./helpers";
import { HomeContainer } from "./HomeCss";

const Home = () => {
  const [booksStore, setBooksStore] = useState([]);
  const [books, setBooks] = useState([]);
  const [allowViewAllBooks, setAllowViewBooks] = useState(true);
  const [booksAvailableFilter, setBooksAvailableFilter] = useState(false);
  const { logout } = useAuth();

  const getFirstFiveBooks = (data: any) => {
    const booksStoreSortedByPopularity = data.sort(
      (a: any, b: any) => b.popularidad - a.popularidad
    );
    return booksStoreSortedByPopularity.slice(0, 5);
  };
  const handleViewAllBooks = () => {
    setBooks(booksStore);
    setAllowViewBooks(!allowViewAllBooks);
  };
  const handlePopularBooks = () => {
    setBooks(getFirstFiveBooks(booksStore));
    setAllowViewBooks(!allowViewAllBooks);
  };
  const fetchData = async () => {
    const resBooksStore = await getBooks();
    const firstFivebooksStore = getFirstFiveBooks(resBooksStore);
    setBooks(firstFivebooksStore);
    setBooksStore(resBooksStore);
  };

  const handleAvailable = (data: any) => {
    const newBooksAvailable: any = booksStore.map((record: any) => {
      return {
        ...record,
        disponibilidad:
          data.id === record.id ? !data.disponibilidad : record.disponibilidad,
      };
    });
    const newBooksMatched = newBooksAvailable.filter((item: any) => {
      const booksIds = books.map((book: any) => book.id);
      return booksIds.includes(item.id);
    });

    setBooks(newBooksMatched);
    setBooksStore(newBooksAvailable);
  };

  const handleAvailableFilter = () => {
    setBooksAvailableFilter(!booksAvailableFilter);
  };

  const handleOnlyAvailableFilter = () => {
    const booksAvailables: any = booksStore.filter(
      (record: any) => record.disponibilidad
    );
    setBooks(booksAvailables);
    handleAvailableFilter();
  };
  const handleOnlyNotAvailableFilter = () => {
    const booksNotAvailables: any = booksStore.filter(
      (record: any) => !record.disponibilidad
    );
    setBooks(booksNotAvailables);
    handleAvailableFilter();
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <HomeContainer>
      <div className="buttonContainer">
        {allowViewAllBooks ? (
          <button onClick={() => handleViewAllBooks()}>
            Ver todos los libros
          </button>
        ) : (
          <button onClick={() => handlePopularBooks()}>
            Ver libros mas populares
          </button>
        )}
        <>
          <button onClick={() => logout()}>Sign Out</button>
        </>
        <div className="filterContainer">
          <button onClick={() => handleOnlyAvailableFilter()}>
            Disponible
          </button>
          <button onClick={() => handleOnlyNotAvailableFilter()}>
            No Disponible
          </button>
        </div>
      </div>
      <div className="tableContainer">
        <Table
          handleAvailable={handleAvailable}
          columns={columns}
          data={books}
        />
      </div>
    </HomeContainer>
  );
};

export default Home;
