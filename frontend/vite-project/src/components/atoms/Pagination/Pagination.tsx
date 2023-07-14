import { StyledPagination } from './style';

export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  const generatePagination = () => {
    const visiblePages = Array(totalPages)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((x, _, arr) => {
        if (x === 1) {
          return true;
        } else if (x === currentPage) {
          return true;
        } else if (
          x - 1 === currentPage ||
          x - 2 === currentPage ||
          x + 1 === currentPage ||
          x + 2 === currentPage
        ) {
          return true;
        } else if (x === arr.length) {
          return true;
        }
        return false;
      });

    if (visiblePages.length > 10) {
      const startIndex = Math.max(0, currentPage - 5);
      const endIndex = Math.min(startIndex + 10, visiblePages.length);
      return visiblePages.slice(startIndex, endIndex).map((x) => (
        <button
          key={x}
          onClick={() => setCurrentPage(x)}
          className='button is-info is-rounded is-responsive is-focused is-inverted'
        >
          {String(x)}
        </button>
      ));
    } else {
      return visiblePages.map((x) => (
        <button
          key={x}
          onClick={() => setCurrentPage(x)}
          className='button is-info is-rounded is-responsive is-focused is-inverted'
        >
          {String(x)}
        </button>
      ));
    }
  };

  return <StyledPagination>{generatePagination()}</StyledPagination>;
};

export default Pagination;
