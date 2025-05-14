// import React from "react";
// import { BsSearch } from "react-icons/bs";
// import { SearchContainer, SearchInput, SearchButton } from "./styledComponents";
// import { useTheme } from "../../Context/ThemeContext";

// interface SearchBarProps {
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onSearch: () => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
//   const { isDarkTheme } = useTheme();
//   const theme = isDarkTheme ? "dark" : "light";
//   const color = isDarkTheme ? "#f9f9f9" : "#181818";
//   return (
//     <SearchContainer>
//       <SearchInput
//         theme={theme}
//         type="search"
//         placeholder="Search"
//         onChange={onChange}
//         onKeyDown={(e) => {
//           if (e.key === "Enter") {
//             e.preventDefault();
//             onSearch();
//           }
//         }}
//         value={value}
//         data-testid="searchInput"
//       />
//       <SearchButton
//         theme={theme}
//         type="button"
//         data-testid="searchButton"
//         onClick={(e) => {
//           e.preventDefault();
//           onSearch();
//         }}
//       >
//         <BsSearch color={color} />
//       </SearchButton>
//     </SearchContainer>
//   );
// };

// export default SearchBar;

import React from "react";
import { SearchBarContainer, Input, SearchButton } from "./styledComponents";

type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // ✅ Critical to stop unwanted reload
      onSearch();
    }
  };

  return (
    <SearchBarContainer
      onSubmit={(e) => e.preventDefault()} // ✅ Prevent any default form behavior
    >
      <Input
        type="text"
        value={value}
        placeholder="Search..."
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <SearchButton type="button" onClick={onSearch}>
        Search
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
