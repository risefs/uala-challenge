export const getBooks = async () => {
  try {
    const res = await fetch(
      "https://qodyhvpf8b.execute-api.us-east-1.amazonaws.com/test/books"
    );
    const output = await res.json();
    return output;
  } catch (error) {
    ///add error view
  }
};
