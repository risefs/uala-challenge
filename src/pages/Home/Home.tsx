import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
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

  const handleSelectAvailable = (data: any) => {
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
      <div className="tableContainer">
        <div className="buttonContainer">
          <div className="filterContainer">
            <div>
              <Button
                color="#4ab864"
                onClick={() => handleOnlyAvailableFilter()}
                text="Disponible"
                width="130px"
              />
            </div>

            <div>
              <Button
                color="#C43B01"
                onClick={() => handleOnlyNotAvailableFilter()}
                text="No Disponible"
                width="130px"
              />
            </div>
            {allowViewAllBooks ? (
              <div>
                <Button
                  width="130px"
                  text="Ver todos los libros"
                  onClick={() => handleViewAllBooks()}
                />
              </div>
            ) : (
              <div>
                <Button
                  width="130px"
                  text="Ver libros mas populares"
                  onClick={() => handlePopularBooks()}
                />
              </div>
            )}
          </div>
          <div>
            <Button
              width="50px"
              radius="50%"
              onClick={() => logout()}
              text="Sign Out"
              color="#9b5d5d"
            />
          </div>
        </div>
        <Table
          handleAvailable={handleSelectAvailable}
          columns={columns}
          data={books}
        />
      </div>
    </HomeContainer>
  );
};

export default Home;
